import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandButton from "../Buttons/ExpandButton";

const AboutCard = ({ title }) => {
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-border-b sushi-border-gray-200 sushi-space-y-4 sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">About Sushiswap</h3>
            <ExpandButton widgetPath={"/widgets/about"} dashboardPath={"/about"} />
          </div>
        </div>
        <div className="sushi-bg-white sushi-px-2 sushi-py-6">
          <h3 className="sushi-text-xl sushi-leading-8 sushi-font-extrabold sushi-text-gray-900">
            Everyone can be a chef
          </h3>
          <p className="sushi-mt-6 sushi-text-base sushi-leading-6 sushi-text-gray-500">
            The Sushiswap protocol realigns incentives for network participants by introducing revenue-sharing &
            community driven network effects to the popular AMM model.
          </p>
          <p className="sushi-mt-6 sushi-text-base sushi-leading-6 sushi-text-gray-500">
            This new site and interface is a testament to the network effects and new relationships formed as the result
            of ChefNomi's and 0xMaki's dive into AMM. It also would not have been possible without the developer
            contributions from Discord community members:
          </p>
          {/* "@OmakaseBar (sushiswap.fi)",
          "@Jiro_Ono (sushiswapclassic.org, exchange.sushiswap.fi)",
          "@BoringCrypto (app.boring.finance, BentoBox)",
          "@Levx (lite.sushiswap.fi)",
          "@Zippo (sushiswap.vision)",
          "@I'm Software (sushiswapanalytics.com)",
          "@Orange (sushiview.vercel.app)",
          "@Tomacf", */}
          <ul className="sushi-mt-6 sushi-space-y-4">
            {[
              "@OmakaseBar",
              "@Jiro_Ono",
              "@BoringCrypto",
              "@Levx",
              "@Zippo",
              "@I'm Software",
              "@Orange",
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="sushi-ml-3 sushi-text-base sushi-leading-6 sushi-text-gray-500">{contributor}</p>
                </li>
              );
            })}
          </ul>
          <p className="sushi-mt-6 sushi-text-base sushi-leading-6 sushi-text-gray-500">
            Additionally progress in cryptocurrency would not have been possible without many open source projects that
            have led the way. This site currently derives certain components from:
          </p>
          <ul className="sushi-mt-6 sushi-space-y-4">
            {[
              {
                name: "YAM WWW",
                icon: "🍠",
                url: "https://github.com/yam-finance/yam-protocol/tree/master/yam-www",
              },
              {
                name: "Uniswap Interface",
                icon: "🦄",
                url: "https://github.com/Uniswap/uniswap-interface",
              },
              {
                name: "Uniswap Info",
                icon: "🦄",
                url: "https://github.com/Uniswap/uniswap-info",
              },
            ].map((source) => {
              return (
                <li className="sushi-flex sushi-items-start">
                  <div className="sushi-flex-shrink-0 sushi-text-base">{source.icon}</div>
                  <div className="sushi-flex sushi-items-center">
                    <a
                      className="ml-3 sushi-flex sushi-items-center sushi-text-base sushi-leading-6 sushi-text-gray-500 hover:sushi-underline"
                      href={source.url}
                      target="_blank"
                    >
                      {source.name}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="sushi-w-4 sushi-h-4 sushi-ml-1">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>{" "}
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="sushi-mt-6 sushi-text-base sushi-leading-6 sushi-text-gray-500">
            You can find an open source GPL-3.0 project starter that we have created{" "}
            <a
              href="https://github.com/omakase-bar/sushi-starter"
              target="_blank"
              className="sushi-group sushi-space-x-2 sushi-inline-flex sushi-items-center sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-900 sushi-transition sushi-ease-in-out sushi-duration-150"
            >
              here
            </a>{" "}
            and utilize for this site. Additionally you can find an open source build package for this site at the{" "}
            <a
              href="https://github.com/omakase-bar/sushiswap-frontend-build"
              target="_blank"
              className="sushi-group sushi-space-x-2 sushi-inline-flex sushi-items-center sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-900 sushi-transition sushi-ease-in-out sushi-duration-150"
            >
              following
            </a>
            . In order to promote innovation and reflect the open foundation set before us most components for this site
            will be released under GPL-3.0 License. We will announce, after we prepare, refactor, and publish the
            repository for accesible and reliable consumption of such components. For security purposes, the Sushiswap
            community reserves the right to protect certain operationally sensitive offchain widgets such as support
            features, branding, and design assets. We will always strive to allow the most permissible licensing
            possible to balance these constraints.
          </p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">No VC, no premine</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">22,000 active community</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">10% DevFund</p>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="sushi-ml-3 sushi-text-sm sushi-leading-5 sushi-text-gray-700">3rd Largest DEX</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
