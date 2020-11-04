// @ts-nocheck
import React from 'react'
import Container from '../components/container'
import Header from '../components/header'
import dynamic from 'next/dynamic'
import { Button, Panel } from '../components/app'
import { formattedNum, toK } from '../utils'

const GlobalChart = dynamic(() => import('../components/charts/globalChart'), {
  ssr: false,
})

const Home = () => {
  const sushiData = {
    balance: 0,
    supply: 2_011_1111,
    valueUsd: 3.02,
  }
  const nextSushiPercent = sushiData.balance - Math.floor(sushiData.balance)
  return (
    <>
      <Header />
      <Container dottedBG className="py-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col flex-1 justify-center lg:order-1 max-w-xl first:ml-12 w-full">
            <img src="/sushi-plate.svg" alt="Sushi plate" />
            <div className="absolute self-center flex flex-col -mt-24">
              <div className="pl-5 flex flex-col items-center w-full">
                {sushiData.balance != null && (
                  <div className="text-5xl">{formattedNum(Math.floor(sushiData.balance))}</div>
                )}
                {sushiData.balance == null && <div className="text-5xl w-full text-center">🍣</div>}
                <div className="w-32 flex">
                  <div className="bg-orange-500 h-1 rounded-l-full" style={{ flex: nextSushiPercent }} />
                  <div className="bg-gray-400 h-1 rounded-r-full" style={{ flex: 1 - nextSushiPercent }} />
                </div>
              </div>
              <div className="flex justify-center mt-4 ml-6">
                {[`💲${sushiData.valueUsd}`, `📊 ${toK(sushiData.supply)}`].map((t, key) => (
                  <div
                    className="h-8 rounded-lg bg-gray-200 flex justify-center items-center text-gray-600 px-2 text-sm first:mr-4"
                    key={key}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button type="primary">
                <>
                  <span className="text-lg mr-3">👩‍🍳</span>Earn
                </>
              </Button>
              <Button type="secondary">
                <>
                  <span className="text-lg mr-3">🍣</span>Trade
                </>
              </Button>
            </div>
          </div>
          <div className="flex-1 max-w-xl min-w-full lg:min-w-0">
            <Panel className="mt-4  border-2 border-gray-200">
              <GlobalChart display="liquidity" />
            </Panel>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
