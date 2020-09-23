import React from "react";
import Toggle from "../Toggle";
import JSBI from "jsbi";
import { useWallet } from "use-wallet";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const decimal = (value, divisor, decimalPlaces, sep) => {
  return numberWithCommas(
    (value / Number(10n) ** JSBI.BigInt(divisor)).toFixed(decimalPlaces)
  );
  //   let quotient = value / Number(10n) ** JSBI.BigInt(divisor);
  //   let remainder = (value % Number(10n) ** JSBI.BigInt(divisor)).toString();
  //   //remainder = "0".repeat(Number(divisor) - remainder.length) + remainder;
  //   return quotient + (sep || ".") + remainder.substr(0, Number(decimalPlaces));
};

const sum = (items, prop) => {
  return items.reduce(function(a, b) {
    return a + b[prop];
  }, 0);
};

const headers = [
  {
    name: "Pool",
    id: "name",
  },
  {
    name: "Underlying Tokens",
    id: null,
  },
  {
    name: "Total Value Locked",
    id: "valueInCurrency",
  },
  {
    name: "Yield per $1,000",
    id: null,
  },
  {
    name: "ROI",
    id: "dailyROI",
  },
];

const Pools = ({
  title,
  pools,
  sort,
  sortDirection,
  setSort,
  setSortDirection,
}) => {
  const { account } = useWallet();
  const total = pools ? sum(pools, "valueInCurrency") : undefined;
  console.log("Total:", total);
  return (
    <>
      <div className="sushi-px-4 lg:sushi-flex lg:sushi-items-center lg:sushi-justify-between">
        <div className="sushi-flex-1 sushi-min-w-0">
          <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sushi-">
            {title}
          </h2>
          <Toggle />
          {/* <h3 className="sushi-px-4 sushi-mt-6 sushi-text-sm sushi-text-gray-500">
            <span className="sushi-p-1 sushi-text-xs sushi-font-medium sushi-bg-gray-200 sushi-rounded">
              YIELD PER $1,000
            </span>{" "}
            is amount of SUSHI rewarded per hour for a $1,000 investment.
          </h3>
          <h3 class="sushi-px-4 sushi-mt-2 sushi-text-sm sushi-text-gray-500">
            <span class="sushi-p-1 sushi-text-xs sushi-font-medium sushi-bg-gray-200 sushi-rounded">ROI</span>{" "}
            is calculated using the current two-week x10 reward bonus.
          </h3> */}
        </div>
        {/* <div className="sushi-flex-1 lg:sushi-ml-4">
          <div className="sushi-mt-8 sushi-px-6 sushi-bg-orange-100 sushi-border sushi-border-2 sushi-border-orange-200 sushi-overflow-hidden sushi-shadow sushi-rounded-lg">
            <div className="sushi-px-4 sushi-py-5">
              <div className="sushi-flex sushi-items-center">
                <div className="sushi-ml-5 sushi-w-0 sushi-flex-1">
                  <dl>
                    <dt className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-500 sushi-truncate">
                      Connect your wallet to see your summary stats in each pool
                    </dt>
                    <dd className="sushi-flex sushi-items-baseline">
                      <div className="sushi-text-2xl sushi-leading-8 sushi-font-semibold sushi-text-gray-900">
                        71,897
                      </div>
                      <div className="sushi-ml-2 sushi-flex sushi-items-baseline sushi-text-sm sushi-leading-5 sushi-font-semibold sushi-text-green-600">
                        <svg
                          className="sushi-self-center sushi-flex-shrink-0 sushi-h-5 sushi-w-5 sushi-text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sushi-sr-only">Increased by</span>
                        122
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="sushi-bg-gray-50 sushi-px-4 sushi-py-4 sm:sushi-px-6">
              <div className="sushi-text-sm sushi-leading-5">
                <a
                  href="#"
                  className="sushi-font-medium sushi-text-indigo-600 hover:sushi-text-indigo-500 sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div
        style={{
          position: "relative",
          overflow: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div className="sushi-mt-8 sushi-inline-block sushi-min-w-full sushi-align-middle sushi-border-b sushi-border-gray-200 sushi-shadow sm:sushi-rounded-lg">
          <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
            <thead>
              <tr>
                {headers.map((header, index) => {
                  return (
                    <th
                      className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-t sushi-border-gray-200 sushi-bg-gray-50"
                      style={
                        index === 0
                          ? {
                              position: "-webkit-sticky",
                              position: "sticky",
                              width: "16rem",
                              minWidth: "16rem",
                              maxWidth: "16rem",
                              left: "0px",
                              boxShadow: "10px 0 5px -2px #f3f3f3",
                            }
                          : null
                      }
                      onClick={() => {
                        if (header.id !== null) {
                          let newDirection;
                          if (header.id === sort && sortDirection === "desc") {
                            newDirection = "asc";
                          } else if (
                            header.id === sort &&
                            sortDirection === "asc"
                          ) {
                            newDirection = "desc";
                          } else if (header.id !== sort) {
                            newDirection = "desc";
                          }
                          setSort(header.id);
                          setSortDirection(newDirection);
                        }
                      }}
                    >
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>{header.name}</span>
                        {sort === header.id && sortDirection === "desc" ? (
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="sushi-self-start sushi-flex-shrink-0 sushi-w-5 sushi-h-5 sushi-ml-1 sushi--mb-1"
                          >
                            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path>
                          </svg>
                        ) : sort === header.id && sortDirection === "asc" ? (
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="sushi-self-start sushi-flex-shrink-0 sushi-w-5 sushi-h-5 sushi-ml-1 sushi--mb-1 sushi-transform sushi-rotate-180"
                          >
                            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path>
                          </svg>
                        ) : null}
                      </a>
                    </th>
                  );
                })}
                {account ? (
                  <>
                    <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100">
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>Staked</span>
                      </a>
                    </th>
                    <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100">
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>Pending</span>
                      </a>
                    </th>
                    <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100"></th>
                  </>
                ) : null}
              </tr>
            </thead>{" "}
            <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
              {pools
                ? pools.map((pool) => {
                    return (
                      <tr>
                        <td
                          className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-white"
                          style={{
                            position: "-webkit-sticky",
                            position: "sticky",
                            width: "16rem",
                            minWidth: "16rem",
                            maxWidth: "16rem",
                            left: "0px",
                            boxShadow: "10px 0 5px -2px #f3f3f3",
                            borderColor: "transparent",
                          }}
                        >
                          <div className="sushi-flex sushi-items-center">
                            <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">
                              {pool.logo}
                            </div>
                            <div className="sushi-ml-4">
                              <div className="sushi-flex sushi-items-center">
                                <a
                                  href="https://sushiswap.org/farms/SUSHI-ETH UNI-V2 LP"
                                  target="_blank"
                                  className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                                >
                                  {pool.name}
                                  <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="sushi-w-4 sushi-h-4 sushi-ml-1"
                                  >
                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                  </svg>
                                </a>{" "}
                                {pool.new ? (
                                  <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                                    New
                                  </span>
                                ) : null}
                              </div>{" "}
                              <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                Uniswap {pool.token0symbol}/{pool.token1symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        {/* <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                            2,056,452.3593 LP
                            <div className="sushi-text-xs sushi-text-gray-500">
                            {decimal(pool.shareOfUniswapPool, 16, 2)}% of Uniswap
                            </div>
                        </td> */}
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-text-xs">
                            <div className="sushi-flex sushi-items-center">
                              <img
                                src={
                                  "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
                                  pool.token0 +
                                  "/logo.png"
                                }
                                className="sushi-mr-2"
                                style={{
                                  width: "1.125rem",
                                  height: "1.125rem",
                                }}
                              />
                              {decimal(
                                pool.totalStakedToken0,
                                pool.token0decimals,
                                2
                              )}{" "}
                              {pool.token0symbol}
                            </div>{" "}
                            <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                              <img
                                src={
                                  "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
                                  pool.token1 +
                                  "/logo.png"
                                }
                                className="sushi-mr-2"
                                style={{
                                  width: "1.125rem",
                                  height: "1.125rem",
                                }}
                              />
                              {decimal(
                                pool.totalStakedToken1,
                                pool.token1decimals,
                                2
                              )}{" "}
                              {pool.token1symbol}
                            </div>
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-flex sushi-items-center">
                            <div>
                              <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                                ${decimal(pool.valueInCurrency, 6, 0)}
                                {/* <div className="sushi-text-xs sushi-text-green-500">
                                    &nbsp;(+1.1%)
                                </div> */}
                              </div>{" "}
                              <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                                {total
                                  ? decimal(
                                      (pool.valueInCurrency / total) * 100,
                                      0,
                                      2
                                    )
                                  : null}
                                % of Sushiswap
                              </div>
                              <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                                {decimal(pool.shareOfUniswapPool, 16, 2)}% of
                                Uniswap
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-inline-flex sushi-flex-col">
                            <div className="sushi-flex sushi-items-center">
                              <div
                                className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                                style={{ border: "solid 1px #ee6d48" }}
                              >
                                🍣
                              </div>{" "}
                              <div>
                                <div>0.3172</div>{" "}
                                <div className="sushi-text-xs sushi-text-gray-500">
                                  SUSHI/hour
                                </div>
                              </div>
                            </div>{" "}
                            {pool.bonus ? (
                              <div
                                className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
                                data-original-title="null"
                              >
                                <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                                  {pool.bonus}x Reward
                                  <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-flex sushi-items-center">
                            <span>{decimal(pool.hourlyROI, 4, 2)}%</span>{" "}
                            <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">
                              hourly
                            </span>
                          </div>{" "}
                          <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                            <span>{decimal(pool.dailyROI, 4, 2)}%</span>{" "}
                            <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                              daily
                            </span>
                          </div>{" "}
                          <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                            <span>{decimal(pool.monthlyROI, 4, 2)}%</span>{" "}
                            <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                              monthly
                            </span>
                          </div>
                          <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                            <span>{decimal(pool.yearlyROI, 4, 2)}%</span>{" "}
                            <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                              yearly
                            </span>
                          </div>
                        </td>
                        {account ? (
                          <>
                            <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-orange-50">
                              <div className="sushi-text-xs">
                                <div className="sushi-flex sushi-items-center">
                                  <img
                                    src={
                                      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
                                      pool.token0 +
                                      "/logo.png"
                                    }
                                    className="sushi-mr-2"
                                    style={{
                                      width: "1.125rem",
                                      height: "1.125rem",
                                    }}
                                  />
                                  {decimal(
                                    pool.userStakedToken0,
                                    pool.token0decimals,
                                    2
                                  )}{" "}
                                  {pool.token0symbol}
                                </div>{" "}
                                <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                                  <img
                                    src={
                                      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
                                      pool.token1 +
                                      "/logo.png"
                                    }
                                    className="sushi-mr-2"
                                    style={{
                                      width: "1.125rem",
                                      height: "1.125rem",
                                    }}
                                  />
                                  {decimal(
                                    pool.userStakedToken1,
                                    pool.token1decimals,
                                    2
                                  )}{" "}
                                  {pool.token1symbol}
                                </div>
                              </div>
                            </td>
                            <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-orange-50">
                              {pool.pending ? (
                                <div className="sushi-inline-flex sushi-flex-col">
                                  <div className="sushi-flex sushi-items-center">
                                    <div>
                                      {Number(pool.pending) > 0 ? (
                                        <>
                                          <div>
                                            {decimal(pool.pending, 18, 2)}
                                          </div>
                                          <div className="sushi-text-xs sushi-text-gray-500">
                                            SUSHI
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <div>--</div>
                                          <div className="sushi-text-xs sushi-text-gray-500">
                                            SUSHI
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </td>
                            <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-orange-50">
                              {pool.pending && Number(pool.pending) > 0 ? (
                                <button
                                  className="sushi-mr-4 sushi-w-16 sushi-h-20 sushi-text-3xl sushi-rounded-md sushi-shadow-md"
                                  style={{
                                    border: "1px solid rgb(238, 109, 72)",
                                    backgroundColor: "#feeddc",
                                  }}
                                >
                                  🎑
                                  <br />
                                  <p className="sushi-text-sm">Harvest</p>
                                </button>
                              ) : (
                                <button
                                  className="sushi-mr-4 sushi-w-16 sushi-h-20 sushi-text-xs sushi-rounded-md sushi-shadow-md"
                                  style={{
                                    border: "1px solid #fcd9be",
                                  }}
                                >
                                  $1.97
                                  <br />
                                  <p className="sushi-text-sm">Enable</p>
                                </button>
                              )}
                            </td>
                          </>
                        ) : null}
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pools;
