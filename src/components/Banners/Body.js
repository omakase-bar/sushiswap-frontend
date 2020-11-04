import React from "react";

const Banner = ({ icon, announcement }) => {
  return (
    <div className="sushi-mt-4 sushi-max-w-screen-xl sushi-mx-auto sushi-px-0 sm:sushi-px-6 lg:sushi-px-8">
      <div className="sushi-p-2 sushi-rounded-lg sushi-border sushi-border-orange-500 sushi-shadow-lg sm:sushi-p-3">
        <div className="sushi-flex sushi-items-center sushi-justify-between sushi-flex-wrap">
          <div className="sushi-w-0 sushi-flex-1 sushi-flex sushi-items-center">
            <span
              className="sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-2xl sushi-rounded-md sushi-shadow-md"
              style={{ border: "solid 1px #ee6d48" }}
            >
              {icon}
            </span>
            <p className="sushi-ml-3 sushi-font-medium sushi-truncate">
              <span className="md:sushi-hidden">{announcement}</span>
              <span className="sushi-hidden md:sushi-inline">{announcement}</span>
            </p>
          </div>
          <div className="sushi-order-3 sushi-mt-2 sushi-flex-shrink-0 sushi-w-full sm:sushi-order-2 sm:sushi-mt-0 sm:sushi-w-auto">
            <div className="sushi-rounded-md sushi-shadow-sm">
              <a
                href="#"
                className="sushi-flex sushi-items-center sushi-justify-center sushi-px-4 sushi-py-2 sushi-border sushi-border-orange-500 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-orange-600 sushi-bg-white hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-ease-in-out sushi-duration-150"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="sushi-order-2 sushi-flex-shrink-0 sm:sushi-order-3 sm:sushi-ml-2">
            <button
              type="button"
              className="sushi--mr-1 sushi-flex sushi-p-2 sushi-rounded-md sushi-bg-orange-500 hover:sushi-bg-orange-400 focus:sushi-outline-none focus:sushi-bg-orange-400 sushi-transition sushi-ease-in-out sushi-duration-150"
              aria-label="Dismiss"
            >
              <svg
                className="sushi-h-6 sushi-w-6 sushi-text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
