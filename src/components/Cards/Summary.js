import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTokenData } from "../../classic/vision/contexts/TokenData";
import { useGlobalData } from "../../classic/vision/contexts/GlobalData";
import {
  formattedNum,
  formattedPercent,
  getPoolLink,
  getSwapLink,
  localNumber,
} from "../../classic/vision/utils";

import ExpandButton from "./ExpandButton";

//import { client } from "../../classic/vision/apollo/client";
//import { LIQUID_POSITIONS } from "../../apollo/queries";
// const getLP = async () => {
//   let ethPrice = 0;
//   let ethPriceOneDay = 0;
//   let priceChangeETH = 0;
//   const chefAddress = "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd";
//   const uniswapPairs = [
//     "0xf80758ab42c3b07da84053fd88804bcb6baa4b5c", //sUSD/ETH
//     "0xcffdded873554f362ac02f8fb1f02e5ada10516f", //COMP/ETH
//     "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11", //DAI/ETH
//     "0x88d97d199b9ed37c29d846d00d443de980832a22", //UMA/ETH
//     "0xf421c3f2e695c2d4c0765379ccace8ade4a480d9", //BAND/ETH
//     "0xc5be99a02c6857f9eac67bbce58df5572498f40c", //AMPL/ETH
//     "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc", //USDC/ETH
//     "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28", //YFI/ETH
//     "0x43ae24960e5534731fc831386c07755a2dc33d47", //SNX/ETH
//     "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974", //LINK/ETH
//     "0xab3f9bf1d81ddb224a2014e98b238638824bcf20", //LEND/ETH
//     "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852", //USDT/ETH
//     "0xce84867c3c02b05dc570d0135103d3fb9cc19433", //SUSHI/ETH
//   ];

//   try {
//     let result = await client.query({
//       query: LIQUID_POSITIONS,
//       variables: {
//         user: chefAddress,
//         allPairs: uniswapPairs,
//       },
//       fetchPolicy: "cache-first",
//     });
//     console.log("GET LP:", result);
//     // const currentPrice = result?.data?.bundles[0]?.ethPrice;
//     // const oneDayBackPrice = resultOneDay?.data?.bundles[0]?.ethPrice;
//     // priceChangeETH = getPercentChange(currentPrice, oneDayBackPrice);
//     // ethPrice = currentPrice;
//     // ethPriceOneDay = oneDayBackPrice;
//   } catch (e) {
//     console.log(e);
//   }
//   return [ethPrice, ethPriceOneDay, priceChangeETH];
// };

const SummaryCard = ({ title }) => {
  // useEffect(() => {
  //   async function fetchData() {
  //     let result = await getLP();
  //     console.log("result:", result);
  //   }
  //   fetchData();
  // }, []);

  const { priceUSD, priceChangeUSD } = useTokenData(
    "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
  );
  const price = priceUSD ? formattedNum(priceUSD, true) : "";
  const priceChange = priceChangeUSD ? formattedPercent(priceChangeUSD) : "";
  const globalData = useGlobalData();
  console.log(globalData);
  const {
    totalLiquidityUSD,
    liquidityChangeUSD,
    oneDayVolumeUSD,
    volumeChangeUSD,
  } = useGlobalData();
  const tvl = totalLiquidityUSD ? formattedNum(totalLiquidityUSD, true) : "";
  const tvlChange = liquidityChangeUSD
    ? formattedPercent(liquidityChangeUSD, true)
    : "";
  const volume = oneDayVolumeUSD ? formattedNum(oneDayVolumeUSD, true) : "";
  const fee = oneDayVolumeUSD
    ? formattedNum(oneDayVolumeUSD * 0.0005, true)
    : "";
  const feeChange = volumeChangeUSD
    ? formattedPercent(volumeChangeUSD, true)
    : "";

  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-pb-5 sushi-border-b sushi-border-gray-200 sushi-space-y-4 sm:sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              🍱 Summary
            </h3>
            <ExpandButton
              widgetPath={"/widgets/summary"}
              dashboardPath={"/omakase-bar"}
            />
          </div>
        </div>
        <div className="sushi-mt-6 sushi-flex-1">
          <div className="sushi-w-full sushi-bg-white sushi-pointer-events-auto">
            <div className="sushi-flex sushi-items-center sushi-p-4">
              <div
                className="sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-16 sushi-h-16 sushi-text-3xl sushi-rounded-md sushi-shadow-md"
                style={{ border: "solid 1px #ee6d48" }}
              >
                🍣
              </div>{" "}
              <div className="sushi-flex-1 sushi-w-0 sushi-ml-5">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    The SUSHI Token
                  </dt>{" "}
                  <dd>
                    <a
                      href="https://www.coingecko.com/en/coins/sushi"
                      target="_blank"
                      className="sushi-inline-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900 hover:sushi-underline"
                    >
                      <span className="sushi-pr-1">{price}</span>{" "}
                      <div className="sushi-ml-1 sushi-font-normal sushi-text-sm">
                        {priceChange}
                      </div>
                      {/* <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-6 sushi-h-6 sushi-external-link"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg> */}
                    </a>{" "}
                    {/* <div className="sushi-mt-0.5 sushi-text-xs sushi-text-gray-500">
                      Market Cap / $262.41M
                    </div> */}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="sushi-w-full sushi-bg-white sushi-pointer-events-auto">
            <div className="sushi-flex sushi-items-center sushi-p-4">
              <div className="sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-16 sushi-h-16 sushi-text-3xl sushi-border sushi-border-grey-200 sushi-rounded-md sushi-shadow-md">
                💧
              </div>{" "}
              <div className="sushi-flex-1 sushi-w-0 sushi-ml-5">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Liquidity (USD)
                  </dt>
                  <dd className="sushi-flex sushi-items-baseline">
                    <div>
                      <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                        {tvl}
                        <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                          {tvlChange}
                        </div>
                      </div>{" "}
                      {/* <div className="sushi-mt-0.5 sushi-text-xs sushi-text-gray-500">
                        74.4% of Uniswap
                      </div> */}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          {/* <div className="sushi-w-full sushi-bg-white sushi-pointer-events-auto">
            <div className="sushi-flex sushi-items-center sushi-p-4">
              <div className="sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-16 sushi-h-16 sushi-text-3xl sushi-border sushi-border-grey-200 sushi-rounded-md sushi-shadow-md">
                ⛏️
              </div>{" "}
              <div className="sushi-flex-1 sushi-w-0 sushi-ml-5">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Total Value Staked (USD)
                  </dt>{" "}
                  <dd className="sushi-flex sushi-items-baseline">
                    <div>
                      <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                        $545.97m
                        <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                          &nbsp;+1.4%
                        </div>
                      </div>{" "}
                      <div className="sushi-mt-0.5 sushi-text-xs sushi-text-gray-500">
                        72.1% of Liquidity
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div> */}
          <div className="sushi-w-full sushi-bg-white sushi-pointer-events-auto">
            <div className="sushi-flex sushi-items-center sushi-p-4">
              <div className="sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-16 sushi-h-16 sushi-text-3xl sushi-border sushi-border-grey-200 sushi-rounded-md sushi-shadow-md">
                🎣
              </div>{" "}
              <div className="sushi-flex-1 sushi-w-0 sushi-ml-5">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Fees Collected (24H)
                  </dt>{" "}
                  <dd className="sushi-flex sushi-items-baseline">
                    <div>
                      <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                        {fee}
                        {/* <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                          {feeChange}
                        </div> */}
                      </div>
                      <div className="sushi-mt-0.5 sushi-text-xs sushi-text-gray-500">
                        0.05% of {volume} trading vol.
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
