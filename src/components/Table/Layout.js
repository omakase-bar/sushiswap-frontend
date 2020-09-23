import React from "react";

const ProjectsTable = ({ title }) => {
  return (
    <>
      {/* Projects table (small breakpoint and up) */}
      <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sm:sushi-px-6 lg:sushi-px-8">
        {title}
      </h2>
      <div className="sushi-hidden sushi-mt-4 sm:sushi-block">
        <div className="sushi-align-middle sushi-inline-block sushi-min-w-full sushi-border-b sushi-border-gray-200">
          <table className="sushi-min-w-full sushi-divide-y">
            <thead>
              <tr className="sushi-border-t sushi-border-gray-200">
                <th className="sushi-px-6 sushi-py-3 sushi-border-b sushi-border-gray-200 sushi-bg-orange-50 sushi-text-left sushi-text-xs sushi-leading-4 sushi-font-medium sushi-text-gray-500 sushi-uppercase sushi-tracking-wider">
                  <span className="lg:sushi-pl-2">Name</span>
                </th>
                <th className="sushi-px-6 sushi-py-3 sushi-border-b sushi-border-gray-200 sushi-bg-orange-50 sushi-text-left sushi-text-xs sushi-leading-4 sushi-font-medium sushi-text-gray-500 sushi-uppercase sushi-tracking-wider">
                  Symbol
                </th>
                <th className="sushi-hidden md:sushi-table-cell sushi-px-6 sushi-py-3 sushi-border-b sushi-border-gray-200 sushi-bg-orange-50 sushi-text-right sushi-text-xs sushi-leading-4 sushi-font-medium sushi-text-gray-500 sushi-uppercase sushi-tracking-wider">
                  Liquidity
                </th>
                <th className="sushi-hidden md:sushi-table-cell sushi-px-6 sushi-py-3 sushi-border-b sushi-border-gray-200 sushi-bg-orange-50 sushi-text-right sushi-text-xs sushi-leading-4 sushi-font-medium sushi-text-gray-500 sushi-uppercase sushi-tracking-wider">
                  Volume (24hrs)
                </th>
                <th className="sushi-hidden md:sushi-table-cell sushi-px-6 sushi-py-3 sushi-border-b sushi-border-gray-200 sushi-bg-orange-50 sushi-text-right sushi-text-xs sushi-leading-4 sushi-font-medium sushi-text-gray-500 sushi-uppercase sushi-tracking-wider">
                  Fees (Price)
                </th>
                <th className="sushi-hidden md:sushi-table-cell sushi-px-6 sushi-py-3 sushi-border-b sushi-border-gray-200 sushi-bg-orange-50 sushi-text-right sushi-text-xs sushi-leading-4 sushi-font-medium sushi-text-gray-500 sushi-uppercase sushi-tracking-wider">
                  Price Change (24hrs)
                </th>
                <th className="sushi-pr-6 sushi-py-3 sushi-border-b sushi-border-gray-200 sushi-bg-orange-50 sushi-text-right sushi-text-xs sushi-leading-4 sushi-font-medium sushi-text-gray-500 sushi-uppercase sushi-tracking-wider" />
              </tr>
            </thead>
            <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-100">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((object, i) => (
                <tr>
                  <td className="sushi-px-6 sushi-py-3 sushi-max-w-0 sushi-w-full sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                    <div className="sushi-flex sushi-items-center sushi-space-x-3 lg:sushi-pl-2">
                      <span>{i + 1}</span>
                      <img
                        className="sushi-max-w-none sushi-h-6 sushi-w-6 sushi-rounded-full sushi-text-white sushi-shadow-solid"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <a href="#" className="sushi-truncate hover:sushi-text-gray-600">
                        <span>Ether (Wrapped)</span>
                      </a>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-3 sushi-max-w-0 sushi-w-full sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                    <div className="sushi-flex sushi-items-center sushi-space-x-3 lg:sushi-pl-2">
                      <a href="#" className="sushi-truncate hover:sushi-text-gray-600">
                        <span>ETH</span>
                      </a>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-3 sushi-max-w-0 sushi-w-full sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                    <div className="sushi-flex sushi-items-center sushi-space-x-3 lg:sushi-pl-2">
                      <span className="sushi-truncate hover:sushi-text-gray-600">
                        $900.20m
                      </span>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-3 sushi-max-w-0 sushi-w-full sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                    <div className="sushi-flex sushi-items-center sushi-space-x-3 lg:sushi-pl-2">
                      <span className="sushi-truncate hover:sushi-text-gray-600">
                        $859.11m
                      </span>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-3 sushi-max-w-0 sushi-w-full sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                    <div className="sushi-flex sushi-items-center sushi-space-x-3 lg:sushi-pl-2">
                      <span className="sushi-truncate hover:sushi-text-gray-600">
                        $455.22
                      </span>
                    </div>
                  </td>
                  <td className="sushi-px-6 sushi-py-3 sushi-max-w-0 sushi-w-full sushi-whitespace-no-wrap sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                    <div className="sushi-flex sushi-items-center sushi-space-x-3 lg:sushi-pl-2">
                      <span className="sushi-truncate hover:sushi-text-gray-600">
                        -4.97%
                      </span>
                    </div>
                  </td>
                  <td className="sushi-pr-6">
                    <div className="sushi-relative sushi-flex sushi-justify-end sushi-items-center">
                      <button
                        id="project-options-menu-0"
                        aria-has-popup="true"
                        type="button"
                        className="sushi-w-8 sushi-h-8 sushi-inline-flex sushi-items-center sushi-justify-center sushi-text-gray-400 sushi-rounded-full sushi-bg-transparent hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-text-gray-500 focus:sushi-bg-orange-100 sushi-transition sushi-ease-in-out sushi-duration-150"
                      >
                        <svg
                          className="sushi-w-5 sushi-h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                      {/* <ButtonDropdown /> */}
                    </div>
                  </td>
                </tr>
              ))}
              {/* More project rows... */}
            </tbody>
          </table>
          <nav className="sushi-bg-white sushi-px-4 sushi-py-3 sushi-flex sushi-items-center sushi-justify-between sushi-border-t sushi-border-cool-gray-200 sm:sushi-px-6">
            <div className="sushi-hidden sm:sushi-block">
              <p className="sushi-text-sm sushi-leading-5 sushi-text-cool-gray-700">
                Showing <span className="sushi-font-medium">1 </span>
                to <span className="sushi-font-medium">10 </span>
                of <span className="sushi-font-medium">20 </span>
                results
              </p>
            </div>
            <div className="sushi-flex-1 sushi-flex sushi-justify-between sm:sushi-justify-end">
              <a
                href="#"
                className="sushi-relative sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-cool-gray-300 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-cool-gray-700 sushi-bg-white hover:sushi-text-cool-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-bg-cool-gray-100 active:sushi-text-cool-gray-700 sushi-transition sushi-ease-in-out sushi-duration-150"
              >
                Previous
              </a>
              <a
                href="#"
                className="sushi-ml-3 sushi-relative sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-cool-gray-300 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-cool-gray-700 sushi-bg-white hover:sushi-text-cool-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-bg-cool-gray-100 active:sushi-text-cool-gray-700 sushi-transition sushi-ease-in-out sushi-duration-150"
              >
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProjectsTable;
