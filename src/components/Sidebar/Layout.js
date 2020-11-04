import React from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
// import AccountDropdown from "./AccountDropdown"
// import SidebarSearch from "./Search"

import logo from "../../assets/img/logo.png";

const Sidebar = ({ selected }) => {
  return (
    <div className="sushi-hidden lg:sushi-flex lg:sushi-flex-shrink-0">
      <div className="sushi-shadow-inner sushi-shadow-lg sushi-flex sushi-flex-col sushi-w-64 sushi-border-r sushi-border-orange-100 sushi-pt-5 sushi-pb-4 sushi-bg-orange-100">
        <div className="sushi-flex sushi-items-center sushi-flex-shrink-0 sushi-px-5">
          <img className="sushi-h-8 sushi-w-auto" src={logo} alt="Sushiswap" />
          <p className="sushi-text-lg sushi-font-bold sushi-leading-6 sushi-text-gray-900 sm:sushi-truncate sushi-ml-2">
            SushiSwap
            <a href="https://www.notion.so/Sushiswap-Shiny-Frontend-38629fec29bd41a3bbe0fa52d404c921" target="_blank">
              <span className="sushi-inline-flex sushi-items-center sushi-ml-2 sushi-px-2.5 sushi-py-0.5 sushi-rounded-md sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-orange-200 sushi-text-orange-800">
                v1.2.0
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </p>
        </div>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="sushi-h-0 sushi-flex-1 sushi-flex sushi-flex-col sushi-overflow-y-auto">
          {/* <AccountDropdown /> */}
          {/* Sidebar Search */}
          {/* <SidebarSearch /> */}
          {/* Navigation */}
          <nav className="sushi-px-3 sushi-mt-6">
            <MenuItems selected={selected} />
          </nav>
        </div>
        {/* <div className="sushi-flex-shrink-0 sushi-flex sushi-p-4 sushi-pl-6">
          <a href="#" className="sushi-flex-shrink-0 sushi-w-full sushi-group sushi-block">
            <button
              ariaLabel="Activate Light Mode"
              title="Activate Light Mode"
              className="sushi-hidden sm:sushi-block hover:sushi-text-accent sushi-transition sushi-duration-150 sushi-rotate-180 focus:sushi-outline-none"
            >
              <svg
                ariaHidden="true"
                className="sushi-w-6 sushi-h-6 md:sushi-w-5 md:sushi-h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fcd9be"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
                />
              </svg>
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
