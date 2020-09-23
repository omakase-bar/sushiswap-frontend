import React from "react";

const PinnedProjects = () => {
  return (
    <div className="sushi-px-4 sushi-mt-6 sm:sushi-px-6 lg:sushi-px-8">
      <h2 className="sushi-text-gray-500 sushi-text-xs sushi-font-medium sushi-uppercase sushi-tracking-wide">
        Pinned Projects
      </h2>
      <ul className="sushi-grid sushi-grid-cols-1 sushi-gap-4 sm:sushi-gap-6 sm:sushi-grid-cols-2 xl:sushi-grid-cols-4 sushi-mt-3">
        <li className="sushi-relative sushi-col-span-1 sushi-flex sushi-shadow-sm sushi-rounded-md">
          <div className="sushi-flex-shrink-0 sushi-flex sushi-items-center sushi-justify-center sushi-w-16 sushi-bg-pink-600 sushi-text-white sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-l-md">
            GA
          </div>
          <div className="sushi-flex-1 sushi-flex sushi-items-center sushi-justify-between sushi-border-t sushi-border-r sushi-border-b sushi-border-gray-200 sushi-bg-white sushi-rounded-r-md sushi-truncate">
            <div className="sushi-flex-1 sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-truncate">
              <a
                href="#"
                className="sushi-text-gray-900 sushi-font-medium hover:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
              >
                GraphQL API
              </a>
              <p className="sushi-text-gray-500">12 Members</p>
            </div>
            <div className="sushi-flex-shrink-0 sushi-pr-2">
              <button
                id="pinned-project-options-menu-0"
                aria-has-popup="true"
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
              {/*
    Dropdown panel, show/hide based on dropdown state.
  
    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  */}
              <div className="sushi-z-10 sushi-mx-3 sushi-origin-top-right sushi-absolute sushi-right-10 sushi-top-3 sushi-w-48 sushi-mt-1 sushi-rounded-md sushi-shadow-lg">
                <div
                  className="sushi-rounded-md sushi-bg-white sushi-shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="pinned-project-options-menu-0"
                >
                  <div className="sushi-py-1">
                    <a
                      href="#"
                      className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                      role="menuitem"
                    >
                      View
                    </a>
                  </div>
                  <div className="sushi-border-t sushi-border-gray-100" />
                  <div className="sushi-py-1">
                    <a
                      href="#"
                      className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                      role="menuitem"
                    >
                      Removed from pinned
                    </a>
                    <a
                      href="#"
                      className="sushi-block sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
                      role="menuitem"
                    >
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* More project cards... */}
      </ul>
    </div>
  );
};

export default PinnedProjects;
