import React from "react";
import { useWallet } from "use-wallet";
import WalletsModal from "../Modals/Wallets";
import useModal from "../../shared/hooks/useModal";

const Toggle = () => {
  const { account } = useWallet();
  const [onPresentWallets] = useModal(<WalletsModal />, null, null);
  return (
    <>
      <div className="sushi-flex sushi-items-center">
        {!account ? (
          <>
            <span
              onClick={onPresentWallets}
              role="checkbox"
              tabIndex={0}
              aria-checked="false"
              className="sushi-bg-gray-200 sushi-relative sushi-inline-flex sushi-flex-shrink-0 sushi-h-6 sushi-w-11 sushi-border-2 sushi-border-transparent sushi-rounded-full sushi-cursor-pointer sushi-transition-colors sushi-ease-in-out sushi-duration-200 focus:sushi-outline-none focus:sushi-shadow-outline"
            >
              <span
                aria-hidden="true"
                className="sushi-translate-x-0 sushi-relative sushi-inline-block sushi-h-5 sushi-w-5 sushi-rounded-full sushi-bg-white sushi-shadow sushi-transform sushi-transition sushi-ease-in-out sushi-duration-200"
              >
                <span className="sushi-opacity-100 sushi-ease-in sushi-duration-200 sushi-absolute sushi-inset-0 sushi-h-full sushi-w-full sushi-flex sushi-items-center sushi-justify-center sushi-transition-opacity">
                  <svg className="sushi-h-3 sushi-w-3 sushi-text-gray-400" fill="none" viewBox="0 0 12 12">
                    <path
                      d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="sushi-opacity-0 sushi-ease-out sushi-duration-100 sushi-absolute sushi-inset-0 sushi-h-full sushi-w-full sushi-flex sushi-items-center sushi-justify-center sushi-transition-opacity">
                  <svg className="sushi-h-3 sushi-w-3 sushi-text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                  </svg>
                </span>
              </span>
            </span>
          </>
        ) : (
          <>
            <span
              role="checkbox"
              tabIndex={0}
              aria-checked="false"
              className="sushi-bg-green-400 sushi-relative sushi-inline-flex sushi-flex-shrink-0 sushi-h-6 sushi-w-11 sushi-border-2 sushi-border-transparent sushi-rounded-full sushi-cursor-pointer sushi-transition-colors sushi-ease-in-out sushi-duration-200 focus:sushi-outline-none focus:sushi-shadow-outline"
            >
              <span
                aria-hidden="true"
                className="sushi-translate-x-5 sushi-relative sushi-inline-block sushi-h-5 sushi-w-5 sushi-rounded-full sushi-bg-white sushi-shadow sushi-transform sushi-transition sushi-ease-in-out sushi-duration-200"
              >
                <span className="sushi-opacity-0 sushi-ease-out sushi-duration-100 sushi-absolute sushi-inset-0 sushi-h-full sushi-w-full sushi-flex sushi-items-center sushi-justify-center sushi-transition-opacity">
                  <svg className="sushi-h-3 sushi-w-3 sushi-text-gray-400" fill="none" viewBox="0 0 12 12">
                    <path
                      d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="sushi-opacity-100 sushi-ease-in sushi-duration-200 sushi-absolute sushi-inset-0 sushi-h-full sushi-w-full sushi-flex sushi-items-center sushi-justify-center sushi-transition-opacity">
                  <svg className="sushi-h-3 sushi-w-3 sushi-text-green-400" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                  </svg>
                </span>
              </span>
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default Toggle;
