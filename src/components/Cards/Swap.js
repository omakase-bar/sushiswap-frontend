import React from "react";
import { Link } from "react-router-dom";
import ClassicSwap from "../../classic/exchange/pages/Swap/secondary";

const Swap = ({ title }) => {
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
          <ClassicSwap />
        </div>
      </div>
    </div>
  );
};

export default Swap;
