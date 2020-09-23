import React from "react";
import WalletButton from "./WalletButton";

const PageTitle = ({ title, showWallets, showShare }) => {
  return (
    <div className="sushi-border-b sushi-border-gray-200 sushi-px-4 sushi-py-4 sm:sushi-flex sm:sushi-items-center sm:sushi-justify-between sm:sushi-px-6 lg:sushi-px-8">
      <div className="sushi-flex-1 sushi-min-w-0">
        <h1 className="sushi-text-lg sushi-font-medium sushi-leading-6 sushi-text-gray-900 sm:sushi-truncate">
          {title}
        </h1>
      </div>
      <div className="sushi-mt-4 sushi-flex sm:sushi-mt-0 sm:sushi-ml-4">
        <span className="sushi-order-1 sushi-ml-3 sushi-shadow-sm sushi-rounded-md sm:sushi-order-0 sm:sushi-ml-0">
          <button
            type="button"
            onClick={() => {
              showShare();
            }}
            className="sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-gray-300 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 sushi-bg-white hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-gray-800 active:sushi-bg-orange-50 sushi-transition sushi-duration-150 sushi-ease-in-out"
          >
            Share
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="#b4bfd8"
              class="sushi-share sushi-w-6 sushi-h-6 sushi-ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
          </button>
        </span>
        <span className="sushi-order-0 sm:sushi-order-1 sm:sushi-ml-3 sushi-shadow-sm sushi-rounded-md">
          <WalletButton showWallets={showWallets} />
        </span>
      </div>
    </div>
  );
};

export default PageTitle;
