import React from "react";

const Widgets = () => {
  return (
    <div className="sushi-px-3">
      <div className="sushi-grid sushi-grid-cols-1 sushi-gap-5 sushi-mt-5 sm:sushi-grid-cols-2 lg:sushi-grid-cols-3">
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-rounded-lg">
          <div className="sushi-flex-grow sushi-px-4 sushi-py-5 sm:sushi-p-6">
            <div className="sushi-flex sushi-items-center">
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
                      <span className="sushi-pr-1">$6.04</span>{" "}
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="sushi-w-6 sushi-h-6 sushi-external-link"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>{" "}
                    <div className="sushi-mt-0.5 sushi-text-xs sushi-text-gray-500">
                      Market Cap / $262.41M
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-rounded-lg">
          <div className="sushi-flex-grow sushi-px-4 sushi-py-5 sm:sushi-p-6">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-16 sushi-h-16 sushi-text-3xl sushi-border sushi-border-grey-200 sushi-rounded-md sushi-shadow-md">
                💰
              </div>{" "}
              <div className="sushi-flex-1 sushi-w-0 sushi-ml-5">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Total Value Locked (USD)
                  </dt>{" "}
                  <dd className="sushi-flex sushi-items-baseline">
                    <div>
                      <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                        $1,414,905,664
                        <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                          &nbsp;+1.4%
                        </div>
                      </div>{" "}
                      <div className="sushi-mt-0.5 sushi-text-xs sushi-text-gray-500">
                        74.4% of Uniswap
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-rounded-lg">
          <div className="sushi-flex-grow sushi-px-4 sushi-py-5 sm:sushi-p-6">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-16 sushi-h-16 sushi-text-3xl sushi-border sushi-border-grey-200 sushi-rounded-md sushi-shadow-md">
                🏆
              </div>{" "}
              <div className="sushi-flex-1 sushi-w-0 sushi-ml-5">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Time Since Rewards Begun
                  </dt>{" "}
                  <dd>
                    <div>
                      <a
                        href="https://etherscan.io/block/10750000"
                        target="_blank"
                        className="sushi-inline-flex sushi-items-center hover:sushi-underline"
                      >
                        <div className="sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                          145 hours
                        </div>{" "}
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="sushi-w-6 sushi-h-6 sushi-ml-1 sushi-external-link"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>{" "}
                      <div className="sushi-mt-0.5 sushi-text-xs sushi-text-gray-500">—</div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Widgets;
