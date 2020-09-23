import React, { useState } from "react";
import { Link } from "react-router-dom";

import Tabs from "./Tabs";
import Support from "./Support";

const guides = [
  {
    title: "🍣 SushiSwap BUIDL Grants",
    description:
      "I don’t have much time these days. So I will try to keep this post short and concise...",
    url: "/",
    cta: "Read",
  },
  {
    title: "24 Hours Countdown for SUSHI distributions",
    description: "With 48-hour admin timelock enabled, we’re now 100%....",
    url: "/",
    cta: "Read",
  },
  {
    title: "The SushiSwap Project 🍣🍣🍣",
    description: "An evolution of Uniswap with SUSHI tokenomics.",
    url: "/",
    cta: "Read",
  },
];
const faqs = [
  {
    title: "🍣 SushiSwap BUIDL Grants",
    description:
      "I don’t have much time these days. So I will try to keep this post short and concise...",
    url: "/",
    cta: "Read",
  },
  {
    title: "24 Hours Countdown for SUSHI distributions",
    description: "With 48-hour admin timelock enabled, we’re now 100%....",
    url: "/",
    cta: "Read",
  },
  {
    title: "The SushiSwap Project 🍣🍣🍣",
    description: "An evolution of Uniswap with SUSHI tokenomics.",
    url: "/",
    cta: "Read",
  },
];

const ResourcesCard = ({ title }) => {
  const [section, setSection] = useState("support");
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-border-b sushi-border-gray-200 sushi-space-y-4 sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              {title}
            </h3>
            <Link
              to="/widgets/resources"
              className="sushi-ml-2 sushi-text-sm sushi-leading-5 sushi-text-gray-500 sushi-truncate"
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
          <Tabs selected={section} setSelected={setSection} />
        </div>
        {
          {
            support: (
              <div className="sushi-mt-6 sushi-flex-1 sushi-relative">
                <div
                  className="sushi-absolute sushi-w-full sushi-h-full sushi-z-20 sushi-text-center sushi-flex-shrink-0 sushi-flex sushi-flex-col sushi-justify-center sushi-p-10"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <div className="sushi-mx-auto sushi-text-base sushi-font-medium sushi-text-white">
                    🚧 Pardon us! This feature is under construction
                  </div>
                </div>

                <Support />
              </div>
            ),
            guides: (
              <div className="sushi-mt-6 sushi-flex-1">
                {guides.map((guide) => {
                  return (
                    <div className="sushi-mt-2 sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
                      <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
                        <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                          <div className="sushi-flex sushi-items-start">
                            <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                              <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                                {guide.title}
                              </p>
                              <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                {guide.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                          <button className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150">
                            {guide.cta}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
            faqs: (
              <div className="sushi-mt-6 sushi-flex-1">
                {faqs.map((faq) => {
                  return (
                    <div className="sushi-mt-2 sushi-w-full sushi-bg-white sushi-shadow-lg sushi-rounded-lg sushi-pointer-events-auto">
                      <div className="sushi-flex sushi-rounded-lg sushi-shadow-xs">
                        <div className="sushi-w-0 sushi-flex-1 sushi-p-4">
                          <div className="sushi-flex sushi-items-start">
                            <div className="sushi-ml-3 sushi-w-0 sushi-flex-1">
                              <p className="sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-900">
                                {faq.title}
                              </p>
                              <p className="sushi-mt-1 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                {faq.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sushi-flex sushi-border-l sushi-border-gray-200">
                          <button className="sushi--ml-px sushi-flex sushi-items-center sushi-justify-center sushi-w-full sushi-border sushi-border-transparent sushi-rounded-r-lg sushi-p-4 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-orange-700 active:sushi-bg-gray-50 sushi-transition sushi-ease-in-out sushi-duration-150">
                            {faq.cta}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
          }[section]
        }
      </div>
    </div>
  );
};

export default ResourcesCard;
