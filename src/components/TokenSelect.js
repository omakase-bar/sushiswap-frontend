import React from "react";

const Popover = () => {
  return (
    <>
      {/* Select popover, show/hide based on select state. */}
      <div className="sushi-absolute sushi-mt-1 sushi-w-full sushi-rounded-md sushi-bg-white sushi-shadow-lg">
        <ul
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="sushi-max-h-56 sushi-rounded-md sushi-py-1 sushi-text-base sushi-leading-6 sushi-shadow-xs sushi-overflow-auto focus:sushi-outline-none sm:sushi-text-sm sm:sushi-leading-5"
        >
          {/*
Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
*/}
          <li
            id="listbox-item-0"
            role="option"
            className="sushi-text-gray-900 sushi-cursor-default sushi-select-none sushi-relative sushi-py-2 sushi-pl-3 sushi-pr-9"
          >
            <div className="sushi-flex sushi-items-center sushi-space-x-3">
              <img
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="sushi-flex-shrink-0 sushi-h-6 sushi-w-6 sushi-rounded-full"
              />
              {/* Selected: "font-semibold", Not Selected: "font-normal" */}
              <span className="sushi-font-normal sushi-block sushi-truncate">Wade Cooper</span>
            </div>
            {/*
Checkmark, only display for selected option.

Highlighted: "text-white", Not Highlighted: "text-indigo-600"
*/}
            <span className="sushi-absolute sushi-inset-y-0 sushi-right-0 sushi-flex sushi-items-center sushi-pr-4">
              <svg className="sushi-h-5 sushi-w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </li>
          {/* More options... */}
        </ul>
      </div>
    </>
  );
};

const TokenSelect = () => {
  return (
    <>
      {/*
  Custom select controls like this require a considerable amount of JS to implement from scratch. We're planning
  to build some low-level libraries to make this easier with popular frameworks like React, Vue, and even Alpine.js
  in the near future, but in the mean time we recommend these reference guides when building your implementation:

  https://www.w3.org/TR/wai-aria-practices/#Listbox
  https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
*/}
      <div className="sushi-space-y-1">
        <div className="sushi-relative">
          <span className="sushi-inline-block sushi-w-full sushi-float-right sushi-rounded-md sushi-shadow-sm">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
              className="sushi-cursor-default sushi-relative sushi-w-full sushi-rounded-md sushi-border sushi-border-gray-300 sushi-bg-white sushi-pl-3 sushi-pr-10 sushi-py-2 sushi-text-left focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sushi-transition sushi-ease-in-out sushi-duration-150 sm:sushi-text-sm sm:sushi-leading-5"
            >
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
          </span>
          {/* <Popover /> */}
        </div>
      </div>
    </>
  );
};

export default TokenSelect;
