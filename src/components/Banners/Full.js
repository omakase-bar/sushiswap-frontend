import React, { useState } from "react";
import { Link } from "react-router-dom";

const FullBanner = () => {
  const [banner, showBanner] = useState(true);
  return (
    <>
      {banner ? (
        <div className="sushi-bg-orange-600">
          <div className="sushi-max-w-screen-xl sushi-mx-auto sushi-py-2 sushi-px-3 sm:sushi-px-6 lg:sushi-px-8">
            <div className="sushi-flex sushi-items-center sushi-justify-between sushi-flex-wrap">
              <Link to="/about" className="sushi-w-0 sushi-flex-1 sushi-flex sushi-items-center">
                <span className="sushi-flex sushi-text-3xl">🎉</span>
                <p className="sushi-ml-4 sushi-font-medium sushi-text-white sushi-truncate">
                  <span className="md:sushi-hidden">
                    Welcome to Sushiswap! A delicious community driven AMM. Tap to learn more.
                  </span>
                  <span className="sushi-hidden md:sushi-inline">
                    Welcome to Sushiswap! The first, delicious community driven AMM. Tap to learn more.
                  </span>
                </p>
              </Link>
              <div className="z-20 sushi-order-2 sushi-flex-shrink-0 sm:sushi-order-3 sm:sushi-ml-3">
                <button
                  onClick={() => {
                    showBanner(false);
                  }}
                  type="button"
                  className="sushi--mr-1 sushi-flex sushi-p-2 sushi-rounded-md hover:sushi-bg-orange-500 focus:sushi-outline-none focus:sushi-bg-orange-500 sm:sushi--mr-2 sushi-transition sushi-ease-in-out sushi-duration-150"
                  aria-label="Dismiss"
                >
                  {/* Heroicon name: x */}
                  <svg
                    className="sushi-h-6 sushi-w-6 sushi-text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FullBanner;
