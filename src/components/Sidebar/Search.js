import React from "react";

const SidebarSearch = () => {
  return (
    <div className="sushi-px-3 sushi-mt-5">
      <label htmlFor="search" className="sushi-sr-only">
        Search
      </label>
      <div className="sushi-mt-1 sushi-relative sushi-rounded-md sushi-shadow-sm">
        <div className="sushi-absolute sushi-inset-y-0 sushi-left-0 sushi-pl-3 sushi-flex sushi-items-center sushi-pointer-events-none">
          <svg
            className="sushi-mr-3 sushi-h-4 sushi-w-4 sushi-text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
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
          className="sushi-form-input sushi-block sushi-w-full sushi-pl-9 sm:sushi-text-sm sm:sushi-leading-5"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SidebarSearch;
