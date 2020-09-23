import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutCard = ({ title }) => {
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-h-16 sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-border-b sushi-border-gray-200 sushi-space-y-4 sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              About Sushiswap
            </h3>
            <Link
              to="/home"
              className="sushi-ml-2 sushi-pb-4 sushi-text-sm sushi-leading-5 sushi-text-gray-500 sushi-truncate"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="#b4bfd8"
                class="sushi-arrows-expand sushi-w-6 sushi-h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="sushi-bg-white sushi-px-2 sushi-py-6 sushi-">
          <h3 className="sushi-text-xl sushi-leading-8 sushi-font-extrabold sushi-text-gray-900">
            Everyone can be a chef
          </h3>
          <p className="sushi-mt-6 sushi-text-base sushi-leading-6 sushi-text-gray-500">
            The Sushiswap protocol realigns incentives for network participants
            by introducing revenue-sharing & community driven network effects to
            the popular AMM model.
          </p>
          <p className="sushi-mt-6 sushi-text-base sushi-leading-6 sushi-text-gray-500">
            This new site and interface is a testament to the network effects
            and new relationships formed as the result of ChefNomi's and
            0xMaki's dive into AMM. It also would not have been possible without
            the developer contributions from Discord community members:
          </p>

          <ul className="sushi-mt-6 sushi-space-y-4">
            {[
              "@OmakaseBar",
              "@Jiro_Ono",
              "@Zippo",
              "@Orange",
              "@BoringCrypto",
              "@Tomacf",
            ].map((contributor) => {
              return (
                <li className="sushi-flex sushi-items-start">
                  <div className="sushi-flex-shrink-0">
                    <svg
                      className="sushi-h-6 sushi-w-6 sushi-text-green-500"
                      x-description="Heroicon name: check"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="sushi-ml-3 sushi-text-base sushi-leading-6 sushi-text-gray-500">
                    {contributor}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="sushi-mt-8">
            <div className="sushi-flex sushi-items-center">
              <h4 className="sushi-flex-shrink-0 sushi-pr-4 sushi-bg-white sushi-text-sm sushi-leading-5 sushi-tracking-wider sushi-font-semibold sushi-uppercase sushi-text-orange-600">
                How we're different
              </h4>
              <div className="sushi-flex-1 sushi-border-t-2 sushi-border-gray-200" />
            </div>
            <ul className="sushi-mt-8 lg:sushi-grid lg:sushi-grid-cols-2 lg:sushi-gap-x-8 lg:sushi-gap-y-5">
              <li className="sushi-flex sushi-items-start lg:sushi-col-span-1">
                <div className="sushi-flex-shrink-0">
                  <svg
                    className="sushi-h-6 sushi-w-6 sushi-text-green-500"
                    x-description="Heroicon name: check"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">
                  No VC, no premine
                </p>
              </li>
              <li className="sushi-mt-5 sushi-flex sushi-items-start lg:sushi-col-span-1 lg:sushi-mt-0">
                <div className="sushi-flex-shrink-0">
                  <svg
                    className="sushi-h-6 sushi-w-6 sushi-text-green-500"
                    x-description="Heroicon name: check"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">
                  22,000 active community
                </p>
              </li>
              <li className="sushi-mt-5 sushi-flex sushi-items-start lg:sushi-col-span-1 lg:sushi-mt-0">
                <div className="sushi-flex-shrink-0">
                  <svg
                    className="sushi-h-6 sushi-w-6 sushi-text-green-500"
                    x-description="Heroicon name: check"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">
                  10% DevFund
                </p>
              </li>
              <li className="sushi-mt-5 sushi-flex sushi-items-start lg:sushi-col-span-1 lg:sushi-mt-0">
                <div className="sushi-flex-shrink-0">
                  <svg
                    className="sushi-h-6 sushi-w-6 sushi-text-green-500"
                    x-description="Heroicon name: check"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">
                  $400m TVL
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
