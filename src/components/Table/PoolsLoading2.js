import React from "react";

const headers = [
  {
    name: "Pool",
    id: "name",
  },
  {
    name: "Staked",
    id: "balance",
  },
  {
    name: "Underlying Tokens",
    id: null,
  },
  {
    name: "Total Value Locked",
    id: "balanceUSD",
  },
  {
    name: "Yield per $1,000",
    id: null,
  },
  {
    name: "ROI",
    id: "rewards.hourlyROI",
  },
];

const PoolsLoading = ({}) => {
  return (
    <>
      <div className="sushi-px-4 lg:sushi-flex lg:sushi-items-center lg:sushi-justify-between">
        <div className="sushi-flex-1 sushi-min-w-0">
          <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sushi-">
            Active Pools on Sushiswap
          </h2>
          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
        </div>
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
                    <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-t sushi-border-gray-200 sushi-bg-gray-50">
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>{header.name}</span>
                      </a>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pool) => {
                return (
                  <tr>
                    <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-white">
                      <div className="sushi-flex sushi-items-center">
                        <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </div>
                        <div className="sushi-ml-4">
                          <div className="sushi-flex sushi-items-center">
                            <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                          </div>{" "}
                          <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                            <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                      <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                      <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                        <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                      </div>
                    </td>
                    <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                      <div className="sushi-text-xs">
                        <div className="sushi-flex sushi-items-center">
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </div>
                        <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </div>
                      </div>
                    </td>
                    <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                      <div className="sushi-flex sushi-items-center">
                        <div>
                          <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                            <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
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
                            <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                          </div>
                          <div>
                            <div>
                              <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                            </div>
                            <div className="sushi-text-xs sushi-text-gray-500">
                              SUSHI/day
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                      <div className="sushi-flex sushi-items-center">
                        <span>
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </span>
                        <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">daily</span>
                      </div>
                      <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                        <span>
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </span>
                        <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </span>
                      </div>
                      <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                        <span>
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </span>
                        <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                          <div className="animate-fade h-4 bg-gray-300 rounded w-3/4" />
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PoolsLoading;
