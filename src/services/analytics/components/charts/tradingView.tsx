import React, { useState, useEffect, useRef } from 'react'
import { createChart, IChartApi } from 'lightweight-charts'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { formattedNum } from '../../utils'
import { usePrevious } from 'react-use'

dayjs.extend(utc)

export enum ChartType {
  BAR,
  AREA,
}

// constant height for charts
const HEIGHT = 300

interface TradingViewCharts {
  type: ChartType
  data: any
  base: number
  baseChange: number
  field: string
  title: string
  width: number
  useWeekly?: boolean
}

const TradingViewChart = ({
  type = ChartType.BAR,
  data,
  base,
  baseChange,
  field,
  title,
  width,
  useWeekly = false,
}: TradingViewCharts) => {
  // reference for DOM element to create with chart
  const ref = useRef()

  // pointer to the chart object
  const [chartCreated, setChartCreated] = useState<IChartApi | null>(null)
  const dataPrev = usePrevious(data)

  useEffect(() => {
    if (data !== dataPrev && chartCreated && type === ChartType.BAR) {
      // remove the tooltip element
      const tooltip = document.getElementById('tooltip-id' + type)
      const node = document.getElementById('test-id' + type)
      node.removeChild(tooltip)
      chartCreated.resize(0, 0)
      setChartCreated(null)
    }
  }, [chartCreated, data, dataPrev, type])

  // parese the data and format for tardingview consumption
  // @ts-ignore
  const formattedData = data?.map((entry) => {
    return {
      time: dayjs.unix(entry.date).format('YYYY-MM-DD'),
      value: parseFloat(entry[field]),
    }
  })

  // adjust the scale based on the type of chart
  const topScale = type === ChartType.AREA ? 0.32 : 0.2

  // const [darkMode] = useDarkModeManager()
  const darkMode = false
  const textColor = darkMode ? 'white' : 'black'
  const previousTheme = usePrevious(darkMode)

  // reset the chart if them switches
  useEffect(() => {
    if (chartCreated && previousTheme !== darkMode) {
      // remove the tooltip element
      const tooltip = document.getElementById('tooltip-id' + type)
      const node = document.getElementById('test-id' + type)
      node.removeChild(tooltip)
      chartCreated.resize(0, 0)
      setChartCreated(null)
    }
  }, [chartCreated, darkMode, previousTheme, type])

  // if no chart created yet, create one with options and add to DOM manually
  useEffect(() => {
    if (!chartCreated && formattedData) {
      const chart = createChart(ref.current, {
        width: width,
        height: HEIGHT,
        layout: {
          backgroundColor: 'transparent',
          textColor: textColor,
        },
        rightPriceScale: {
          scaleMargins: {
            top: topScale,
            bottom: 0,
          },
          borderVisible: false,
        },
        timeScale: {
          borderVisible: false,
        },
        grid: {
          horzLines: {
            color: 'rgba(197, 203, 206, 0.5)',
            visible: false,
          },
          vertLines: {
            color: 'rgba(197, 203, 206, 0.5)',
            visible: false,
          },
        },
        crosshair: {
          horzLine: {
            visible: false,
            labelVisible: false,
          },
          vertLine: {
            visible: true,
            style: 0,
            width: 2,
            color: 'rgba(32, 38, 46, 0.1)',
            labelVisible: false,
          },
        },
        localization: {
          priceFormatter: (val: number) => formattedNum(val, true),
        },
      })

      const series =
        type === ChartType.BAR
          ? chart.addHistogramSeries({
              color: '#fa7814',
              priceFormat: {
                type: 'volume',
              },
              scaleMargins: {
                top: 0.32,
                bottom: 0,
              },
            })
          : chart.addAreaSeries({
              topColor: '#fa7814',
              bottomColor: '#fa781455',
              lineColor: '#fa7814',
              lineWidth: 3,
            })

      series.setData(formattedData)
      const toolTip = document.createElement('div')
      const current: any = ref.current
      toolTip.setAttribute('id', 'tooltip-id' + type)
      toolTip.className = darkMode ? 'three-line-legend-dark' : 'three-line-legend'
      current.appendChild(toolTip)
      toolTip.className = 'absolute bg-transparent'
      toolTip.style.left = -4 + 'px'
      toolTip.style.top = '-' + 8 + 'px'

      // format numbers
      const percentChange = baseChange?.toFixed(2)
      const formattedPercentChange = (baseChange > 0 ? '+' : '') + percentChange + '%'
      const color = baseChange >= 0 ? 'green' : 'red'

      // get the title of the chart
      const setLastBarText = () => {
        toolTip.innerHTML =
          `<div style="font-size: 16px; margin: 4px 0px; color: ${textColor};">${title} ${
            type === ChartType.BAR && !useWeekly ? '(24hr)' : ''
          }</div>` +
          `<div style="font-size: 22px; margin: 4px 0px; color:${textColor}" >` +
          formattedNum(base ?? 0, true) +
          `<span style="margin-left: 10px; font-size: 16px; color: ${color};">${formattedPercentChange}</span>` +
          '</div>'
      }
      setLastBarText()

      // update the title when hovering on the chart
      chart.subscribeCrosshairMove(function (param) {
        if (
          param === undefined ||
          param.time === undefined ||
          param.point.x < 0 ||
          param.point.x > width ||
          param.point.y < 0 ||
          param.point.y > HEIGHT
        ) {
          setLastBarText()
        } else {
          const time: any = param.time
          const dateStr = useWeekly
            ? dayjs(time.year + '-' + time.month + '-' + time.day)
                .startOf('week')
                .format('MMMM D, YYYY') +
              '-' +
              dayjs(time.year + '-' + time.month + '-' + time.day)
                .endOf('week')
                .format('MMMM D, YYYY')
            : dayjs(time.year + '-' + time.month + '-' + time.day).format('MMMM D, YYYY')
          const price = Number(param.seriesPrices.get(series))

          toolTip.innerHTML =
            `<div style="font-size: 16px; margin: 4px 0px; color: ${textColor};">${title}</div>` +
            `<div style="font-size: 22px; margin: 4px 0px; color: ${textColor}">` +
            formattedNum(price, true) +
            '</div>' +
            '<div>' +
            dateStr +
            '</div>'
        }
      })

      chart.timeScale().fitContent()

      setChartCreated(chart)
    }
  }, [
    base,
    baseChange,
    chartCreated,
    darkMode,
    data,
    formattedData,
    textColor,
    title,
    topScale,
    type,
    useWeekly,
    width,
  ])

  // responsiveness
  useEffect(() => {
    if (width) {
      chartCreated && chartCreated.resize(width, HEIGHT)
      chartCreated && chartCreated.timeScale().scrollToPosition(0, true)
    }
  }, [chartCreated, width])

  return (
    <div className="relative">
      <div ref={ref} id={'test-id' + type} />
    </div>
  )
}

export default TradingViewChart
