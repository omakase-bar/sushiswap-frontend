import React from "react";

const AccountDropdown = () => {
  return (
    <div className="sushi-px-3 sushi-mt-6 sushi-relative sushi-inline-block sushi-text-left">
      {/* Dropdown menu toggle, controlling the show/hide state of dropdown menu. */}
      <div>
        <button
          type="button"
          className="sushi-group sushi-w-full sushi-rounded-md sushi-px-3.5 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 hover:sushi-bg-orange-50 hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-bg-orange-200 focus:sushi-border-blue-300 active:sushi-bg-orange-50 active:sushi-text-gray-800 sushi-transition sushi-ease-in-out sushi-duration-150"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <div className="sushi-flex sushi-w-full sushi-justify-between sushi-items-center">
            <div className="sushi-flex sushi-items-center sushi-justify-between sushi-space-x-3">
              <img
                className="sushi-w-10 sushi-h-10 sushi-bg-orange-300 sushi-rounded-full sushi-flex-shrink-0"
                src=""
                alt=""
              />
              <div className="sushi-flex-1">
                <h2 className="sushi-text-gray-900 sushi-text-sm sushi-leading-5 sushi-font-medium">Account 2</h2>
                <p className="sushi-text-gray-500 sushi-text-sm sushi-leading-5 sushi-truncate">0x0000002..</p>
              </div>
            </div>
            <svg
              className="sushi-h-5 sushi-w-5 sushi-text-gray-400 group-hover:sushi-text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
      {/*
  Dropdown panel, show/hide based on dropdown state.
  
  Entering: "transition ease-out duration-100"
  From: "transform opacity-0 scale-95"
  To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
  From: "transform opacity-100 scale-100"
  To: "transform opacity-0 scale-95"
  */}
      <div className="sushi-z-10 sushi-mx-3 sushi-origin-top sushi-absolute sushi-right-0 sushi-left-0 sushi-mt-1 sushi-rounded-md sushi-shadow-lg">
        <div
          className="sushi-rounded-md sushi-bg-white sushi-shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
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
  );
};

export default AccountDropdown;
