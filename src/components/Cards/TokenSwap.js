import React from "react";
import { Link } from "react-router-dom";
import TokenSelect from "../TokenSelect";

const TokenSwap = ({ title }) => {
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-pb-5 sushi-border-b sushi-border-gray-200 sushi-space-y-4 sm:sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              {title}
            </h3>
            <Link
              to="/"
              className="sushi-ml-2 sushi-text-sm sushi-leading-5 sushi-text-gray-500 sushi-truncate"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="#b4bfd8"
                class="sushi-arrows-expand sushi-w-6 sushi-h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                ></path>
              </svg>
            </Link>
          </div>
          <div>
            {/* Dropdown menu on small screens */}
            <div className="sm:sushi-hidden">
              <select
                aria-label="Selected tab"
                className="sushi-form-select sushi-block sushi-w-full sushi-pl-3 sushi-pr-10 sushi-py-2 sushi-text-base sushi-leading-6 sushi-border-gray-300 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sm:sushi-text-sm sm:sushi-leading-5 sushi-transition sushi-ease-in-out sushi-duration-150"
              >
                <option>Applied</option>
                <option selected>In Progress</option>
              </select>
            </div>
            {/* Tabs at small breakpoint and up */}
            <div className="sushi-hidden sm:sushi-block">
              <nav className="sushi--mb-px sushi-flex sushi-space-x-8">
                <a
                  href="#"
                  className="sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                >
                  Buy
                </a>
                <a
                  href="#"
                  className="sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-orange-500 sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-orange-600 focus:sushi-outline-none focus:sushi-text-orange-800 focus:sushi-border-orange-700"
                >
                  Swap
                </a>
                <a
                  href="#"
                  className="sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                  aria-current="page"
                >
                  Pool
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="sushi-mt-6 sushi-flex-1">
          <div className="sushi-w-full sushi-bg-white sushi-border sushi-border-gray-200 sushi-rounded-lg sushi-pointer-events-auto">
            <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
              <div className="sushi-w-0 sushi-flex-1 sushi-flex sushi-items-center sushi-p-4">
                <div className="sushi-w-full">
                  <p className="sushi-leading-5 sushi-font-medium sushi-text-gray-900">From</p>
                  <div>
                    <div className="sushi-mt-4 sushi-flex sushi-rounded-md sushi-shadow-sm">
                      <div className="sushi-relative sushi-flex-grow focus-within:sushi-z-10">
                        <input
                          id="email"
                          className="sushi-form-input sushi-block sushi-w-full sushi-rounded-none sushi-rounded-l-md sushi-transition sushi-ease-in-out sushi-duration-150 sushi-text-2xl sm:sushi-leading-5"
                          placeholder="0.0"
                        />
                      </div>
                      <button className="sushi--ml-px sushi-relative sushi-inline-flex sushi-items-center sushi-cursor-default sushi-rounded-r-md sushi-border sushi-border-gray-300 sushi-bg-white sushi-pl-3 sushi-pr-10 sushi-py-2 sushi-text-left focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sushi-transition sushi-ease-in-out sushi-duration-150 sm:sushi-text-sm sm:sushi-leading-5">
                        <div className="sushi-flex sushi-items-center sushi-space-x-3">
                          <img
                            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png"
                            alt=""
                            className="sushi-flex-shrink-0 sushi-h-6 sushi-w-6 sushi-rounded-full"
                          />
                          <span className="sushi-block sushi-truncate">SUSHI</span>
                        </div>
                        <span className="sushi-absolute sushi-inset-y-0 sushi-right-0 sushi-flex sushi-items-center sushi-pr-2 sushi-pointer-events-none">
                          <svg
                            className="sushi-h-5 sushi-w-5 sushi-text-gray-400"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sushi-flex sushi-items-center sushi-w-full sushi-justify-center sushi-mt-2">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="#d03800"
              className="sushi-arrow-down sushi-w-6 sushi-h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <div className="sushi-mt-2 sushi-w-full sushi-bg-white sushi-border sushi-border-gray-200 sushi-rounded-lg sushi-pointer-events-auto">
            <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
              <div className="sushi-w-0 sushi-flex-1 sushi-flex sushi-items-center sushi-p-4">
                <div className="sushi-w-full">
                  <p className="sushi-leading-5 sushi-font-medium sushi-text-gray-900">To</p>
                  <div>
                    <div className="sushi-mt-4 sushi-flex sushi-rounded-md sushi-shadow-sm">
                      <div className="sushi-relative sushi-flex-grow focus-within:sushi-z-10">
                        <input
                          id="email"
                          className="sushi-form-input sushi-block sushi-w-full sushi-rounded-none sushi-rounded-l-md sushi-transition sushi-ease-in-out sushi-duration-150 sushi-text-2xl sm:sushi-leading-5"
                          placeholder="0.0"
                        />
                      </div>
                      <button className="sushi--ml-px sushi-relative sushi-inline-flex sushi-items-center sushi-cursor-default sushi-rounded-r-md sushi-border sushi-border-gray-300 sushi-bg-white sushi-pl-3 sushi-pr-10 sushi-py-2 sushi-text-left focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sushi-transition sushi-ease-in-out sushi-duration-150 sm:sushi-text-sm sm:sushi-leading-5">
                        <div className="sushi-flex sushi-items-center sushi-space-x-3">
                          <img
                            src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                            alt=""
                            className="sushi-flex-shrink-0 sushi-h-6 sushi-w-6 sushi-rounded-full"
                          />
                          <span className="sushi-block sushi-truncate">ETH</span>
                        </div>
                        <span className="sushi-absolute sushi-inset-y-0 sushi-right-0 sushi-flex sushi-items-center sushi-pr-2 sushi-pointer-events-none">
                          <svg
                            className="sushi-h-5 sushi-w-5 sushi-text-gray-400"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sushi-mt-6">
            <span className="sushi-block sushi-w-full sushi-rounded-md sushi-shadow-sm">
              <button
                type="submit"
                className="sushi-w-full sushi-flex sushi-justify-center sushi-py-4 sushi-px-4 sushi-border sushi-border-transparent sushi-font-medium sushi-rounded-md sushi-text-orange-600 sushi-bg-orange-100 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-border-orange-400 focus:sushi-shadow-outline-orange active:sushi-bg-orange-200 sushi-transition sushi-duration-150 sushi-ease-in-out"
              >
                Connect Wallet
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSwap;
