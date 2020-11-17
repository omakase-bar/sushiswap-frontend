import React from "react";

const MarketWidgets = ({
  type,
  liquidity,
  liquidityChange,
  volume,
  volumeChange,
  transactions,
  transactionsChange,
  fees,
  feesChange,
}) => {
  return (
    <div className="sushi-px-8 sushi-py-4">
      <div className="sushi-grid sushi-grid-cols-1 sushi-gap-5 sushi-mt-2 sm:sushi-grid-cols-2 lg:sushi-grid-cols-4">
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-rounded-lg">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Total Liquidity
                  </dt>
                  <dd className="sushi-flex sushi-items-baseline">
                    <div>
                      <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                        {liquidity}
                        <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                          {liquidityChange}
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-rounded-lg">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Volume (24hrs)
                  </dt>
                  <dd className="sushi-flex sushi-items-baseline">
                    <div>
                      <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                        {/* $118,121,122 */}
                        {volume}
                        <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                          {/* &nbsp;+1.4% */}
                          {volumeChange}
                        </div>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-rounded-lg">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                {
                  {
                    token: (
                      <dl>
                        <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                          Transactions (24hrs)
                        </dt>{" "}
                        <dd className="sushi-flex sushi-items-baseline">
                          <div>
                            <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                              {transactions}
                              <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                                {transactionsChange}
                              </div>
                            </div>
                          </div>
                        </dd>
                      </dl>
                    ),
                    pair: (
                      <dl>
                        <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                          Fees (24hrs)
                        </dt>{" "}
                        <dd className="sushi-flex sushi-items-baseline">
                          <div>
                            <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                              {fees}
                              <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                                {feesChange}
                              </div>
                            </div>
                          </div>
                        </dd>
                      </dl>
                    ),
                  }[type]
                }
              </div>
            </div>
          </div>
        </div>
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-rounded-lg">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                <dl>
                  <dt className="sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-500 sushi-truncate">
                    Volume (24hrs)
                  </dt>
                  <dd className="sushi-flex sushi-items-baseline">
                    <div>
                      <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                        {/* $118,121,122 */}
                        {volume}
                        <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">
                          {/* &nbsp;+1.4% */}
                          {volumeChange}
                        </div>
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

export default MarketWidgets;
