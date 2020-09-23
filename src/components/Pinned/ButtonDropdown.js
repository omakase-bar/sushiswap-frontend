import React from "react";

const ButtonDropdown = () => {
  return (
    <>
      {/*
      Dropdown panel, show/hide based on dropdown state.
  
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
      <div className="sushi-mx-3 sushi-origin-top-right sushi-absolute sushi-right-7 sushi-top-0 sushi-w-48 sushi-mt-1 sushi-rounded-md sushi-shadow-lg">
        <div
          className="sushi-z-10 sushi-rounded-md sushi-bg-white sushi-shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="project-options-menu-0"
        >
          <div className="sushi-py-1">
            <a
              href="#"
              className="sushi-group sushi-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
              role="menuitem"
            >
              <svg
                className="sushi-mr-3 sushi-h-5 sushi-w-5 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
              Edit
            </a>
            <a
              href="#"
              className="sushi-group sushi-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
              role="menuitem"
            >
              <svg
                className="sushi-mr-3 sushi-h-5 sushi-w-5 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
              </svg>
              Duplicate
            </a>
            <a
              href="#"
              className="sushi-group sushi-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
              role="menuitem"
            >
              <svg
                className="sushi-mr-3 sushi-h-5 sushi-w-5 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Share
            </a>
          </div>
          <div className="sushi-border-t sushi-border-gray-100" />
          <div className="sushi-py-1">
            <a
              href="#"
              className="sushi-group sushi-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-text-gray-700 hover:sushi-bg-orange-100 hover:sushi-text-gray-900 focus:sushi-outline-none focus:sushi-bg-orange-100 focus:sushi-text-gray-900"
              role="menuitem"
            >
              <svg
                className="sushi-mr-3 sushi-h-5 sushi-w-5 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonDropdown;
