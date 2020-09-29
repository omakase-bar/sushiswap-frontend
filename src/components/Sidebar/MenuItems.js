import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ selected }) => {
  return (
    <>
      <div className="sushi-space-y-1">
        <Link
          to="/home"
          className={
            selected === "home"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Overview
        </Link>
        <Link
          to="/omakase-bar"
          className={
            selected === "omakase"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
        >
          <svg
            className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            ></path>
          </svg>
          Omakase Bar
        </Link>
        <Link
          to="/weekly"
          className={
            selected === "weekly"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Menu of the Week
          <span className="sushi-ml-auto sushi-inline-block sushi-py-0.5 sushi-px-3 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:sushi-bg-orange-200 group-focus:sushi-bg-orange-200">
            NEW
          </span>
        </Link>
        <Link
          to="/pools"
          className={
            selected === "pools"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
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
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Pools
          <span className="sushi-ml-auto sushi-inline-block sushi-py-0.5 sushi-px-3 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:sushi-bg-orange-200 group-focus:sushi-bg-orange-200">
            Earn SUSHI
          </span>
        </Link>
        <Link
          to="/tokens"
          className={
            selected === "tokens"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
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
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
            />
          </svg>
          Tokens
        </Link>
        <Link
          to="/pairs"
          className={
            selected === "pairs"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
        >
          <svg
            className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
          Pairs
          {/* <span className="sushi-ml-auto sushi-inline-block sushi-py-0.5 sushi-px-3 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:sushi-bg-orange-200 group-focus:sushi-bg-orange-200">
            3
          </span> */}
        </Link>
        {/* <Link
                to="/accounts"
                className={
                  selected === "accounts"
                    ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                    : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
                }
              >
                <svg
                  className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                Accounts
              </Link> */}
        <Link
          //href="https://snapshot.page/#/sushi"
          //target="_blank"
          to="/governance"
          className={
            selected === "governance"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
        >
          <svg
            className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            ></path>
          </svg>
          Governance
          {/* <span className="sushi-ml-auto sushi-inline-block sushi-py-0.5 sushi-px-3 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:sushi-bg-orange-200 group-focus:sushi-bg-orange-200">
            47
          </span> */}
        </Link>
        {/* <Link
                to="/grants"
                className={
                  selected === "grants"
                    ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
                    : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
                }
              >
                <svg
                  className="sushi-mr-3 sushi-h-6 sushi-w-6 sushi-text-gray-400 group-hover:sushi-text-gray-500 group-focus:sushi-text-gray-600 sushi-transition sushi-ease-in-out sushi-duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Grants
                <span className="sushi-ml-auto sushi-inline-block sushi-py-0.5 sushi-px-3 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:sushi-bg-orange-200 group-focus:sushi-bg-orange-200">
                  2
                </span>
              </Link> */}
        <Link
          to={"/about"}
          className={
            selected === "about"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
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
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          About
        </Link>
        {/* <a
          href="https://help.sushidocs.com/faqs/faqs"
          className={
            selected === "faqs"
              ? "sushi-neumorphic-drop-shadow sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-900 sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
              : "sushi-group sushi-flex sushi-items-center sushi-px-2 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 hover:sushi-text-gray-900 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150"
          }
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
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          FAQ
        </a> */}
      </div>
      <div className="sushi-mt-8">
        {/* Secondary navigation */}
        <div
          className="sushi-mt-1 sushi-space-y-1"
          role="group"
          aria-labelledby="teams-headline"
        >
          <a
            href="https://sushiswapclassic.org/"
            target="_blank"
            className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
          >
            <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-orange-400 sushi-rounded-full" />
            <span className="sushi-truncate">Sushiswapclassic.org</span>
          </a>
          <a
            href="https://help.sushidocs.com/"
            target="_blank"
            className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
          >
            <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-gray-400 sushi-rounded-full" />
            <span className="sushi-truncate">Docs</span>
          </a>
          <a
            href="https://discord.gg/hJ2p555"
            target="_blank"
            className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
          >
            <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-indigo-500 sushi-rounded-full" />
            <span className="sushi-truncate">Discord</span>
          </a>
          <a
            href="https://twitter.com/sushiswap"
            target="_blank"
            className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
          >
            <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-teal-400 sushi-rounded-full" />
            <span className="sushi-truncate">Twitter</span>
          </a>
          <a
            href="https://www.notion.so/Sushiswap-Shiny-Frontend-38629fec29bd41a3bbe0fa52d404c921"
            target="_blank"
            className="sushi-group sushi-flex sushi-items-center sushi-px-3 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 sushi-rounded-md hover:sushi-text-gray-900 hover:sushi-bg-orange-50 focus:sushi-outline-none focus:sushi-bg-orange-50 sushi-transition sushi-ease-in-out sushi-duration-150"
          >
            <span className="sushi-w-2.5 sushi-h-2.5 sushi-mr-4 sushi-bg-white sushi-rounded-full" />
            <span className="sushi-truncate">Changelog</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
