import React, { useEffect } from "react";
import Transition from "../Transition";

const WalletModal = ({ isOpen, closeModal }) => {
  return (
    <Transition
      show={isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div className="sushi-fixed sushi-z-10 sushi-inset-0 sushi-flex sushi-items-center sushi-justify-center sushi-min-h-screen sushi-pt-4 sushi-px-4 sushi-pb-20 sushi-text-center sm:sushi-block sm:sushi-p-0">
        <div className="sushi-fixed sushi-inset-0 sushi-transition-opacity">
          <div className="sushi-absolute sushi-inset-0 sushi-bg-gray-500 sushi-opacity-75" />
        </div>
        <span className="sushi-hidden sm:sushi-inline-block sm:sushi-align-middle sm:sushi-h-screen" />
        <div
          className="sushi-inline-block sushi-align-bottom sushi-bg-white sushi-rounded-lg sushi-text-left sushi-overflow-hidden sushi-shadow-xl sushi-transform sushi-transition-all sm:sushi-my-8 sm:sushi-align-middle sm:sushi-max-w-lg sm:sushi-w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="sushi-bg-white sushi-px-4 sushi-pt-5 sushi-pb-4 sm:sushi-p-6 sm:sushi-pb-4">
            <div className="sm:sushi-flex sm:sushi-items-start">
              <div className="sushi-mx-auto sushi-flex-shrink-0 sushi-flex sushi-items-center sushi-justify-center sushi-h-12 sushi-w-12 sushi-rounded-full sushi-bg-red-100 sm:sushi-mx-0 sm:sushi-h-10 sm:sushi-w-10">
                <svg
                  className="sushi-h-6 sushi-w-6 sushi-text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="sushi-mt-3 sushi-text-center sm:sushi-mt-0 sm:sushi-ml-4 sm:sushi-text-left">
                <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900" id="modal-headline">
                  Infura is currently experiencing an service outage.
                </h3>
                <div className="sushi-mt-2">
                  <p className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                    As of Nov 11, 08:13 UTC Infura is experiencing a service outage on their Ethereum Mainnet API. This
                    affects mutliple DeFi sites and services as well as Metamask. Binance has also paused deposits and
                    withdrawals for the time being. Your funds are safe, but you will not be able to use current site
                    functionalities. If you are interested in viewing token analytics, please use
                    <a
                      href="https://sushiswapanalytics.com/"
                      className="sushi-group sushi-space-x-2 sushi-inline-flex sushi-items-center sushi-font-medium sushi-text-orange-600 hover:sushi-text-orange-900 sushi-transition sushi-ease-in-out sushi-duration-150"
                    >
                      <span> Sushiswap Analytics Backup</span>
                    </a>{" "}
                    until the issue is resolved.
                  </p>
                  <p className="pt-2 sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                    During this period you will be unable to connect to Metamask and perform trades. We are working with
                    the Infura team to assist them in bringing their services back online for the entire Ethereum
                    ecosystem. Stay tuned.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sushi-bg-gray-50 sushi-px-4 sushi-py-3 sm:sushi-px-6 sm:sushi-flex sm:sushi-flex-row-reverse">
            <span className="sushi-flex sushi-w-full sushi-rounded-md sushi-shadow-sm sm:sushi-ml-3 sm:sushi-w-auto">
              <a
                href="https://status.infura.io/"
                className="sushi-inline-flex sushi-justify-center sushi-w-full sushi-rounded-md sushi-border sushi-border-transparent sushi-px-4 sushi-py-2 sushi-bg-red-600 sushi-text-base sushi-leading-6 sushi-font-medium sushi-text-white sushi-shadow-sm hover:sushi-bg-red-500 focus:sushi-outline-none focus:sushi-border-red-700 focus:sushi-shadow-outline-red sushi-transition sushi-ease-in-out sushi-duration-150 sm:sushi-text-sm sm:sushi-leading-5"
              >
                Latest Infura Updates
              </a>
            </span>
            <span className="sushi-mt-3 sushi-flex sushi-w-full sushi-rounded-md sushi-shadow-sm sm:sushi-mt-0 sm:sushi-w-auto">
              <a
                href="https://sushiswapanalytics.com/"
                className="sushi-inline-flex sushi-justify-center sushi-w-full sushi-rounded-md sushi-border sushi-border-gray-300 sushi-px-4 sushi-py-2 sushi-bg-white sushi-text-base sushi-leading-6 sushi-font-medium sushi-text-gray-700 sushi-shadow-sm hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue sushi-transition sushi-ease-in-out sushi-duration-150 sm:sushi-text-sm sm:sushi-leading-5"
              >
                Sushiswap Analytics
              </a>
            </span>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default WalletModal;
