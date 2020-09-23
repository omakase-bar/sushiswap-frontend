import React from "react";
import BarChart from "../Charts/Area";

const LiquidityCard = ({ title }) => {
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-pb-5 sushi-border-b sushi-border-gray-200 sushi-space-y-4 sm:sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              {title}
            </h3>
          </div>
          <div>
            {/* Dropdown menu on small screens */}
            <div className="sm:sushi-hidden">
              <select
                aria-label="Selected tab"
                className="sushi-form-select sushi-block sushi-w-full sushi-pl-3 sushi-pr-10 sushi-py-2 sushi-text-base sushi-leading-6 sushi-border-gray-300 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sm:sushi-text-sm sm:sushi-leading-5 sushi-transition sushi-ease-in-out sushi-duration-150"
              >
                <option>Today</option>
                <option>Yesterday</option>
                <option selected>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            {/* Tabs at small breakpoint and up */}
            <div className="sushi-hidden sm:sushi-block">
              <nav className="sushi--mb-px sushi-flex sushi-space-x-8">
                <a
                  href="#"
                  className="sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                >
                  Today
                </a>
                <a
                  href="#"
                  className="sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                >
                  Yesterday
                </a>
                <a
                  href="#"
                  className="sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-orange-500 sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-orange-600 focus:sushi-outline-none focus:sushi-text-orange-800 focus:sushi-border-orange-700"
                  aria-current="page"
                >
                  This Week
                </a>
                <a
                  href="#"
                  className="sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                >
                  This Month
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="sushi-mt-6 sushi-flex-1">
          <BarChart />
          {/* <ChartSeries chartInterval={"month"} /> */}
        </div>
        <div className="sushi-mt-6 sushi-flex">
          <div className="sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
            <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
              <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                <div className="sushi-flex sushi-items-start">
                  <div className="sushi-flex-shrink-0 sushi-pt-0.5">
                    <img
                      className="sushi-h-10 sushi-w-10 sushi-rounded-full"
                      src="https://pbs.twimg.com/profile_images/1300826845785415682/Z2uwzyQq_400x400.jpg"
                      alt="Tip from ChefNomi"
                    />
                  </div>
                  <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                    <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                      Tip from ChefNomi
                    </p>
                    <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                      You can set a maximum threshold in settings
                    </p>
                  </div>
                </div>
              </div>
              <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                <button className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityCard;
