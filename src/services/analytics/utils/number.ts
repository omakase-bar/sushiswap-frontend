import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import Numeral from 'numeral'
dayjs.extend(utc)

// using a currency library here in case we want to add more in future
const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const toK = (num: number | string) => {
  return Numeral(num).format('0.[00]a')
}

export const formattedNum = (num: number, usd = false, acceptNegatives = false) => {
  if (isNaN(num)) {
    return usd ? '$0' : 0
  }

  if (num > 500000000) {
    return (usd ? '$' : '') + toK(num.toFixed(0))
  }

  if (num === 0) {
    if (usd) {
      return '$0'
    }
    return 0
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< $0.0001' : '< 0.0001'
  }

  if (num > 1000) {
    return usd ? '$' + Number(num.toFixed(0)).toLocaleString() : '' + Number(num.toFixed(0)).toLocaleString()
  }

  if (usd) {
    if (num < 0.1) {
      return '$' + Number(num.toFixed(4))
    } else {
      const usdString = priceFormatter.format(num)
      return '$' + usdString.slice(1, usdString.length)
    }
  }

  return Number(num.toFixed(5))
}

// gets the amoutn difference plus the % change in change itself (second order change)
export const get2DayPercentChange = (valueNow: number, value24HoursAgo: number, value48HoursAgo: number) => {
  // get volume info for both 24 hour periods
  const currentChange = valueNow - value24HoursAgo
  const previousChange = value24HoursAgo - value48HoursAgo

  const adjustedPercentChange = ((currentChange - previousChange) / previousChange) * 100

  if (isNaN(adjustedPercentChange) || !isFinite(adjustedPercentChange)) {
    return [currentChange, 0]
  }
  return [currentChange, adjustedPercentChange]
}

// get standard percent change between two values
export const getPercentChange = (valueNow: number, value24HoursAgo: number) => {
  const adjustedPercentChange = ((valueNow - value24HoursAgo) / value24HoursAgo) * 100
  if (isNaN(adjustedPercentChange) || !isFinite(adjustedPercentChange)) {
    return 0
  }
  return adjustedPercentChange
}
