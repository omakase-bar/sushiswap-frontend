import React from "react";
import { useWallet } from "use-wallet";

const WalletButton = ({ showWallets }) => {
  const { account } = useWallet();
  return (
    <>
      {account ? (
        <button
          type="button"
          className="sushi-h-full sushi-w-full sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-transparent sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-orange-600 sushi-bg-orange-100 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-border-orange-400 focus:sushi-shadow-outline-orange active:sushi-bg-orange-200 sushi-transition sushi-duration-150 sushi-ease-in-out"
          //onClick={() => showWallets()}
        >
          Connected
          <svg
            viewBox="0 0 24 24"
            className="sushi-h-6 sushi-w-6 sushi-ml-2 sushi-flex-shrink-0"
          >
            <circle
              cx={12}
              cy={12}
              r={10}
              className="sushi-text-orange-200 sushi-fill-current"
            />
            <path
              d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
              className="sushi-text-orange-600 sushi-fill-current"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="sushi-h-full sushi-w-full sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-transparent sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-orange-600 sushi-bg-orange-100 hover:sushi-bg-orange-200 focus:sushi-outline-none focus:sushi-border-orange-400 focus:sushi-shadow-outline-orange active:sushi-bg-orange-200 sushi-transition sushi-duration-150 sushi-ease-in-out"
          onClick={() => showWallets()}
        >
          Connect Wallet
          <div className="sushi-flex sushi-ml-2">
            <span className="sushi-absolute sushi-inline-flex sushi-animate-ping">
              <span className="sushi-inline-flex sushi-rounded-full sushi-h-2 sushi-w-2 sushi-bg-orange-600 sushi-opacity-75" />
            </span>
            <span className="sushi-relative sushi-inline-flex sushi-rounded-full sushi-h-2 sushi-w-2 sushi-bg-orange-500" />
          </div>
        </button>
      )}
    </>
  );
};

export default WalletButton;
