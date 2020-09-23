import React from "react";

const MobileMenu = () => {
  return (
    <div className="lg:sushi-hidden">
      <div className="sushi-fixed sushi-inset-0 sushi-flex sushi-z-40">
        {/*
  Off-canvas menu overlay, show/hide based on off-canvas menu state.
  
  Entering: "transition-opacity ease-linear duration-300"
    From: "opacity-0"
    To: "opacity-100"
  Leaving: "transition-opacity ease-linear duration-300"
    From: "opacity-100"
    To: "opacity-0"
  */}
        <div className="sushi-fixed sushi-inset-0">
          <div className="sushi-absolute sushi-inset-0 sushi-bg-orange-600 sushi-opacity-75" />
        </div>
        {/*
  Off-canvas menu, show/hide based on off-canvas menu state.
  
  Entering: "transition ease-in-out duration-300 transform"
    From: "-translate-x-full"
    To: "translate-x-0"
  Leaving: "transition ease-in-out duration-300 transform"
    From: "translate-x-0"
    To: "-translate-x-full"
  */}
        <div className="sushi-relative sushi-flex-1 sushi-flex sushi-flex-col sushi-max-w-xs sushi-w-full sushi-pt-5 sushi-pb-4 sushi-bg-white">
          <div className="sushi-absolute sushi-top-0 sushi-right-0 sushi--mr-14 sushi-p-1">
            <button
              className="sushi-flex sushi-items-center sushi-justify-center sushi-h-12 sushi-w-12 sushi-rounded-full focus:sushi-outline-none focus:sushi-bg-orange-600"
              aria-label="Close sidebar"
            >
              <svg
                className="sushi-h-6 sushi-w-6 sushi-text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="sushi-flex-shrink-0 sushi-flex sushi-items-center sushi-px-4">
            <img
              className="sushi-h-8 sushi-w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-purple-on-white.svg"
              alt="Workflow"
            />
          </div>
          <div className="sushi-mt-5 sushi-flex-1 sushi-h-0 sushi-overflow-y-auto">
            <nav className="sushi-px-2">
              <div className="sushi-space-y-1">
                <a
                  href="#"
                  className="sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-base sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-100 hover:sushi-text-gray-900 hover:sushi-bg-orange-100 focus:sushi-bg-orange-200 focus:sushi-outline-none sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  <svg
                    className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-500 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Home
                </a>
                <a
                  href="#"
                  className="sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-base sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-600 hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-bg-orange-50 focus:sushi-outline-none sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  <svg
                    className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  My tasks
                </a>
                <a
                  href="#"
                  className="sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-base sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-600 hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-bg-orange-50 focus:sushi-outline-none sushi-transition sushi-ease-in-out sushi-duration-150"
                >
                  <svg
                    className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Recent
                </a>
              </div>
              <div className="sushi-mt-8">
                <h3
                  className="sushi-px-3 sushi-text-xs sushi-leading-4 sushi-font-semibold sushi-text-gray-500 sushi-uppercase sushi-tracking-wider"
                  id="teams-headline"
                >
                  Teams
                </h3>
                <div
                  className="sushi-mt-1 sushi-space-y-1"
                  role="group"
                  aria-labelledby="teams-headline"
                >
                  <a
                    href="#"
                    className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-base sushi-leading-5 sushi-font-medium sushi-text-gray-600 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-indigo-500 sushi-rounded-full" />
                    <span className="sushi-truncate">Engineering</span>
                  </a>
                  <a
                    href="#"
                    className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-base sushi-leading-5 sushi-font-medium sushi-text-gray-600 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-teal-400 sushi-rounded-full" />
                    <span className="sushi-truncate">Human Resources</span>
                  </a>
                  <a
                    href="#"
                    className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-base sushi-leading-5 sushi-font-medium sushi-text-gray-600 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                  >
                    <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-orange-500 sushi-rounded-full" />
                    <span className="sushi-truncate">Customer Success</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="sushi-flex-shrink-0 sushi-w-14">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
