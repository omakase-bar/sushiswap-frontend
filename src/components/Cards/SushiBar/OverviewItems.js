import React from "react";

const OverviewItems = () => {
  return (
    <>
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
          <li className="relative col-span-1 flex shadow-sm rounded-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
              GA
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                >
                  GraphQL API
                </a>
                <p className="text-gray-500">12 Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  id="pinned-project-options-menu-0"
                  aria-has-popup="true"
                  className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
                >
                  {/* Heroicon name: dots-vertical */}
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          {/* More project cards... */}
        </ul>
      </div>
    </>
  );
};

export default OverviewItems;
