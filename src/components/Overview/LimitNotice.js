import React from "react";
import logoBackground from "../../assets/img/logo-background.png";

const LimitNoticeWrapper = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-200">
        <LimitNotice />
      </div>
    </>
  );
};

export const LimitNotice = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Limit Orders{" "}
          <span className="ml-auto inline-block items-center px-3 py-0.5 rounded-md text-sm font-medium leading-5 bg-orange-100 text-orange-800">
            BETA
          </span>
        </h2>
        <p className="mt-4 text-sm leading-5 text-gray-500">
          Want to place an order for the future? Try out limit orders on SushiSwap Lite.
        </p>
        <div className="mt-4 rounded-md bg-orange-100 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              {/* Heroicon name: exclamation */}
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm leading-5 font-medium text-yellow-800">Beta Feature</h3>
              <div className="mt-2 text-sm leading-5 text-yellow-700">
                <p>
                  Please note this feature is in beta and contracts are unaudited. Read{" "}
                  <a
                    href="https://github.com/sushiswap/sushiswap-settlement/blob/master/contracts/Settlement.sol"
                    target="_blank"
                    className="group space-x-2 inline-flex items-center font-medium text-orange-600 hover:text-orange-900 transition ease-in-out duration-150"
                  >
                    the contract
                  </a>{" "}
                  and use at your own risk.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="https://lite.sushiswap.fi/#/swap" target="_blank">
          <button className="mt-8 w-full bg-orange-600 border border-transparent rounded-md py-4 text-lg leading-5 font-semibold text-white hover:bg-orange-700 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition duration-150 ease-in-out">
            Place a Limit Order
          </button>
        </a>
      </div>
    </>
  );
};

export default LimitNoticeWrapper;
