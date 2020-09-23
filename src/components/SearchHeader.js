import React from "react";

const SearchHeader = () => {
  return (
    <div className="sushi-relative sushi-z-10 sushi-flex-shrink-0 sushi-flex sushi-h-16 sushi-bg-white sushi-border-b sushi-border-gray-200 lg:sushi-hidden">
      {/* Sidebar toggle, controls the 'sidebarOpen' sidebar state. */}
      <button
        className="sushi-px-4 sushi-border-r sushi-border-gray-200 sushi-text-gray-500 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-600 lg:sushi-hidden"
        aria-label="Open sidebar"
      >
        <svg
          className="sushi-h-6 sushi-w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
      <div className="sushi-flex-1 sushi-flex sushi-justify-between sushi-px-4 sm:sushi-px-6 lg:sushi-px-8">
        <div className="sushi-flex-1 sushi-flex">
          <form className="sushi-w-full sushi-flex md:sushi-ml-0" action="#" method="GET">
            <label htmlFor="search_field" className="sushi-sr-only">
              Search
            </label>
            <div className="sushi-relative sushi-w-full sushi-text-gray-400 focus-within:sushi-text-gray-600">
              <div className="sushi-absolute sushi-inset-y-0 sushi-left-0 sushi-flex sushi-items-center sushi-pointer-events-none">
                <svg
                  className="sushi-h-5 sushi-w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  />
                </svg>
              </div>
              <input
                id="search_field"
                className="sushi-block sushi-w-full sushi-h-full sushi-pl-8 sushi-pr-3 sushi-py-2 sushi-rounded-md sushi-text-gray-900 sushi-placeholder-gray-500 focus:sushi-outline-none focus:sushi-placeholder-gray-400 sm:sushi-text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="sushi-flex sushi-items-center">
          {/* Profile dropdown */}
          <div className="sushi-ml-3 sushi-relative">
            <div>
              <button
                className="sushi-max-w-xs sushi-flex sushi-items-center sushi-text-sm sushi-rounded-full focus:sushi-outline-none focus:sushi-shadow-outline"
                id="user-menu"
                aria-label="User menu"
                aria-haspopup="true"
              >
                <img
                  className="sushi-h-8 sushi-w-8 sushi-rounded-full"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            {/*
  Profile dropdown panel, show/hide based on dropdown state.
  
  Entering: "transition ease-out duration-100"
    From: "transform opacity-0 scale-95"
    To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
    From: "transform opacity-100 scale-100"
    To: "transform opacity-0 scale-95"
  */}
            <div className="sushi-origin-top-right sushi-absolute sushi-right-0 sushi-mt-2 sushi-w-48 sushi-rounded-md sushi-shadow-lg">
              <div
                className="sushi-rounded-md sushi-bg-white sushi-shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div className="sushi-py-1">
                  <a
                    href="#"
                    className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                    role="menuitem"
                  >
                    View profile
                  </a>
                  <a
                    href="#"
                    className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                    role="menuitem"
                  >
                    Notifications
                  </a>
                </div>
                <div className="sushi-border-t sushi-border-gray-100" />
                <div className="sushi-py-1">
                  <a
                    href="#"
                    className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                    role="menuitem"
                  >
                    Get desktop app
                  </a>
                  <a
                    href="#"
                    className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                    role="menuitem"
                  >
                    Support
                  </a>
                </div>
                <div className="sushi-border-t sushi-border-gray-100" />
                <div className="sushi-py-1">
                  <a
                    href="#"
                    className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                    role="menuitem"
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
