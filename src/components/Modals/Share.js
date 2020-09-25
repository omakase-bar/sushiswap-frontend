import React, { useEffect } from "react";
import Transition from "../Transition";
import { useWallet } from "use-wallet";

import twitterLogo from "../../assets/social-logos/twitter.svg";

const ShareModal = ({ isOpen, closeModal }) => {
  const medias = [
    {
      title: "Twitter",
      img: twitterLogo,
    },
  ];
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
          className="sushi-bg-white sushi-inline-block sushi-align-bottom sushi-bg-white sushi-rounded-lg sushi-px-4 sushi-pt-5 sushi-pb-4 sushi-text-left sushi-overflow-hidden sushi-shadow-xl sushi-transform sushi-transition-all sm:sushi-my-8 sm:sushi-align-middle sm:sushi-max-w-lg sm:sushi-w-full sm:sushi-p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="sushi-hidden sm:sushi-block sushi-absolute sushi-top-0 sushi-right-0 sushi-pt-4 sushi-pr-4">
            <button
              onClick={() => {
                closeModal();
              }}
              type="button"
              className="sushi-text-gray-400 hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-text-gray-500 sushi-transition sushi-ease-in-out sushi-duration-150"
              aria-label="Close"
            >
              <svg
                className="sushi-h-6 sushi-w-6"
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
          <div className="sm:sushi-flex sm:sushi-items-start">
            <div className="sushi-mt-3 sushi-text-center sm:sushi-mt-0 sm:sushi-ml-4 sm:sushi-text-left">
              <div className="sushi-float-left sushi-flex sushi-items-center sushi-justify-center sushi-h-12 sushi-w-12 sushi-rounded-full sushi-bg-green-100 sm:sushi-mx-0 sm:sushi-h-10 sm:sushi-w-10">
                <svg
                  className="sushi-h-6 sushi-w-6 sushi-text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3
                className="sushi-ml-12 sushi-p-2 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900"
                id="modal-headline"
              >
                Share
              </h3>
              <ul className="sushi-mt-8 sushi-grid sushi-grid-cols-1 sushi-gap-6 sm:sushi-grid-cols-2 lg:sushi-grid-cols-2">
                {medias.map((media) => {
                  return (
                    <li className="sushi-col-span-1 sushi-bg-white sushi-rounded-lg sushi-shadow">
                      <div className="sushi-w-full sushi-flex sushi-items-center sushi-justify-between sushi-p-6 sushi-space-x-6">
                        <img
                          className="sushi-w-10 sushi-h-10 sushi-rounded-sm sushi-flex-shrink-0"
                          src={media.img}
                          alt=""
                        />
                        <div className="sushi-flex-1 sushi-truncate">
                          <div className="sushi-flex sushi-items-center sushi-space-x-3">
                            <h3 className="sushi-text-gray-900 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-truncate">
                              {media.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="sushi-border-t sushi-border-gray-200">
                        <div className="sushi--mt-px sushi-flex">
                          <div className="sushi-w-0 sushi-flex-1 sushi-flex sushi-border-r sushi-border-gray-200">
                            <a
                              href="https://twitter.com/intent/tweet?text=🍣Sushiswap%20to%2020"
                              target="_blank"
                              className="sushi-relative sushi--mr-px sushi-w-0 sushi-flex-1 sushi-inline-flex sushi-items-center sushi-justify-center sushi-py-4 sushi-text-sm sushi-leading-5 sushi-text-gray-700 sushi-font-medium sushi-border sushi-border-transparent sushi-rounded-bl-lg hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 focus:sushi-z-10 sushi-transition sushi-ease-in-out sushi-duration-150"
                            >
                              <span>Share</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ShareModal;
