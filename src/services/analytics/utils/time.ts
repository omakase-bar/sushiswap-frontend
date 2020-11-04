// @ts-nocheck
import { blockClient } from '../gql/client'
import { GET_BLOCK, GET_BLOCKS } from '../gql/queries'
import dayjs from 'dayjs'
import { TimeFrame } from '../constants'

export async function splitQuery(query, localClient, vars, list, skipCount = 100) {
  let fetchedData = {}
  let allFound = false
  let skip = 0

  while (!allFound) {
    let end = list.length
    if (skip + skipCount < list.length) {
      end = skip + skipCount
    }
    const sliced = list.slice(skip, end)
    const result = await localClient.query({
      query: query(...vars, sliced),
      fetchPolicy: 'cache-first',
    })
    fetchedData = {
      ...fetchedData,
      ...result.data,
    }
    if (Object.keys(result.data).length < skipCount || skip + skipCount > list.length) {
      allFound = true
    } else {
      skip += skipCount
    }
  }

  return fetchedData
}

export async function getBlockFromTimestamp(timestamp: number) {
  const result = await blockClient.query({
    query: GET_BLOCK,
    variables: {
      timestampFrom: timestamp,
      timestampTo: timestamp + 600,
    },
    fetchPolicy: 'cache-first',
  })
  return result?.data?.blocks?.[0]?.number
}

export async function getBlocksFromTimestamps(timestamps: number[], skipCount = 500) {
  if (timestamps?.length === 0) {
    return []
  }

  const fetchedData = await splitQuery(GET_BLOCKS, blockClient, [], timestamps, skipCount)

  const blocks = []
  if (fetchedData) {
    for (const t in fetchedData) {
      if (fetchedData[t].length > 0) {
        blocks.push({
          timestamp: t.split('t')[1],
          number: fetchedData[t][0]['number'],
        })
      }
    }
  }
  return blocks
}

export function getTimeframe(timeWindow: TimeFrame) {
  const utcEndTime = dayjs.utc()
  // based on window, get starttime
  switch (timeWindow) {
    case TimeFrame.WEEK:
      return utcEndTime.subtract(1, 'week').endOf('day').unix() - 1
    case TimeFrame.MONTH:
      return utcEndTime.subtract(1, 'month').endOf('day').unix() - 1
    case TimeFrame.ALL_TIME:
      return utcEndTime.subtract(1, 'year').endOf('day').unix() - 1
    default:
      return utcEndTime.subtract(1, 'year').startOf('year').unix() - 1
  }
}
