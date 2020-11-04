import React from "react";
import MobileSearch from "./Search/Mobile";
import MenuItems from "./Sidebar/MenuItems";
import logo from "../assets/img/logo.png";

const SearchHeader = ({ selected, changeMenu, isOpen }) => {
  return (
    <>
      {/* Navbar */}
      <nav className="sushi-block lg:sushi-hidden sushi-flex-shrink-0 sushi-bg-orange-100">
        <div className="sushi-max-w-7xl sushi-mx-auto sushi-px-2 sm:sushi-px-4 lg:sushi-px-8">
          <div className="sushi-relative sushi-flex sushi-items-center sushi-justify-between sushi-h-16">
            {/* Logo section */}
            <div className="sushi-flex sushi-items-center sushi-px-2 lg:sushi-px-0 xl:sushi-w-64">
              <div className="sushi-flex-shrink-0">
                <img className="sushi-h-8 sushi-w-auto" src={logo} alt="Sushiswap" />
              </div>
            </div>
            {/* Search section */}
            <MobileSearch />
            {/* <div className="sushi-flex-1 sushi-flex sushi-justify-center lg:sushi-justify-end">
              <div className="sushi-w-full sushi-px-2 lg:sushi-px-6">
                <label htmlFor="search" className="sushi-sr-only">
                  Search for anything in Sushiswap...
                </label>
                <div className="sushi-relative sushi-text-orange-600 focus-within:sushi-text-gray-400">
                  <div className="sushi-absolute sushi-inset-y-0 sushi-left-0 sushi-pl-3 sushi-flex sushi-items-center sushi-pointer-events-none">
                    <svg
                      className="sushi-h-5 sushi-w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    className="sushi-block sushi-w-full sushi-pl-10 sushi-pr-3 sushi-py-2 sushi-border sushi-border-transparent sushi-rounded-md sushi-leading-5 sushi-bg-orange-50 sushi-text-orange-600 sushi-placeholder-orange-600 focus:sushi-outline-none focus:sushi-bg-white focus:sushi-placeholder-gray-400 focus:sushi-text-gray-900 sm:sushi-text-sm sushi-transition sushi-duration-150 sushi-ease-in-out"
                    placeholder="Search for anything in Sushiswap..."
                    type="search"
                  />
                </div>
              </div>
            </div> */}
            <div className="sushi-flex lg:sushi-hidden">
              {/* Mobile menu button */}
              <button
                className="sushi-inline-flex sushi-items-center sushi-justify-center sushi-p-2 sushi-rounded-md sushi-text-orange-600 hover:sushi-text-white hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 focus:sushi-text-white sushi-transition sushi-duration-150 sushi-ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
                onClick={() => {
                  changeMenu();
                }}
              >
                {/* Icon when menu is closed. */}
                {/*
                    Heroicon name: menu-alt-1
                    Menu open: "hidden", Menu closed: "block"
                */}
                <svg
                  className={!isOpen ? "sushi-block sushi-h-6 sushi-w-6" : "sushi-hidden sushi-h-6 sushi-w-6"}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                {/* Icon when menu is open. */}
                {/*
                    Heroicon name: x
                    Menu open: "block", Menu closed: "hidden"
                */}
                <svg
                  className={isOpen ? "sushi-block sushi-h-6 sushi-w-6" : "sushi-hidden sushi-h-6 sushi-w-6"}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Links section */}
          </div>
        </div>
        {/*
            Mobile menu, toggle classes based on menu state.
            Menu open: "block", Menu closed: "hidden"
        */}
        <div className={isOpen ? "sushi-block lg:sushi-hidden" : "sushi-hidden lg:sushi-hidden"}>
          <nav className="sushi-px-3 sushi-py-4">
            <MenuItems selected={selected} />
          </nav>
        </div>
      </nav>
    </>
  );
};

export default SearchHeader;
