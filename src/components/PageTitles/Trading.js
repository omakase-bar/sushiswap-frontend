import React from "react";
import { useHistory, Link } from "react-router-dom";
import { isAddress } from "../../services/vision/utils";
import WalletButton from "../Buttons/Wallet";
import logoNotFound from "../../assets/img/logoNotFound.png";

const PageTitleBreadcrumb = ({ type, name, price, price2, priceChange, symbol, symbol2, id, id2, showWallets }) => {
  const history = useHistory();
  return (
    <>
      {
        {
          pair: (
            <div className="sushi-border-b sushi-border-gray-200 sushi-py-6 sushi-px-8">
              <div>
                <nav className="sm:sushi-hidden">
                  <button
                    onClick={() => {
                      history.goBack();
                    }}
                    className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-500 hover:sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out"
                  >
                    <svg
                      className="sushi-flex-shrink-0 sushi--ml-1 sushi-mr-1 sushi-h-5 sushi-w-5 sushi-text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back
                  </button>
                </nav>
                <nav className="sushi-hidden sm:sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-font-medium">
                  <Link
                    to="/pairs"
                    className="sushi-text-gray-500 hover:sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out"
                  >
                    Pairs
                  </Link>
                  <svg
                    className="sushi-flex-shrink-0 sushi-mx-2 sushi-h-5 sushi-w-5 sushi-text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {symbol + "-" + symbol2}
                </nav>
              </div>
              <div className="sushi-mt-2 md:sushi-flex md:sushi-items-center md:sushi-justify-between">
                <div className="sushi-flex-1 sushi-min-w-0">
                  <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                    <div className="sushi-mr-8 sushi-flex sushi-items-center sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-2xl">
                      <img
                        className="sushi-relative sushi-z-30 sushi-inline-block sushi-rounded-full sushi-text-white sushi-shadow-solid"
                        src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                          id
                        )}/logo.png`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = logoNotFound;
                        }}
                        alt={symbol + " Logo"}
                      />
                      <img
                        className="sushi-relative sushi-z-20 sushi--ml-4 sushi-inline-block sushi-rounded-full sushi-text-white sushi-shadow-solid"
                        src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                          id2
                        )}/logo.png`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = logoNotFound;
                        }}
                        alt={symbol2 + " Logo"}
                      />
                    </div>
                    {name}
                  </div>
                </div>
                <div className="sushi-mt-4 sushi-flex-shrink-0 sushi-flex md:sushi-mt-0 md:sushi-ml-4">
                  <span className="sushi-ml-3">
                    <WalletButton />
                  </span>
                </div>
              </div>
            </div>
          ),
          token: (
            <div className="sushi-border-b sushi-border-gray-200 sushi-py-6 sushi-px-8">
              <div>
                <nav className="sm:sushi-hidden">
                  <button
                    onClick={() => {
                      history.goBack();
                    }}
                    className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-500 hover:sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out"
                  >
                    <svg
                      className="sushi-flex-shrink-0 sushi--ml-1 sushi-mr-1 sushi-h-5 sushi-w-5 sushi-text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back
                  </button>
                </nav>
                <nav className="sushi-hidden sm:sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-font-medium">
                  <Link
                    to="/tokens"
                    className="sushi-text-gray-500 hover:sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out"
                  >
                    Tokens
                  </Link>
                  <svg
                    className="sushi-flex-shrink-0 sushi-mx-2 sushi-h-5 sushi-w-5 sushi-text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href={"https://etherscan.io/address/" + id}
                    target="_blank"
                    className="sushi-text-gray-500 hover:sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out"
                  >
                    {symbol} ({id})
                  </a>
                </nav>
              </div>
              <div className="sushi-mt-2 md:sushi-flex md:sushi-items-center md:sushi-justify-between">
                <div className="sushi-flex-1 sushi-min-w-0">
                  <div className="sushi-flex sushi-items-center sushi-text-2xl sushi-font-semibold sushi-leading-8 sushi-text-gray-900">
                    <div
                      className="sushi-mr-4 sushi-flex sushi-items-center sushi-justify-center sushi-flex-shrink-0 sushi-w-12 sushi-h-12 sushi-text-2xl sushi-rounded-full sushi-shadow-md"
                      //style={{ border: "solid 1px #ee6d48" }}
                    >
                      <img
                        class="sushi-rounded-full sushi-text-white sushi-shadow-solid"
                        src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                          id
                        )}/logo.png`}
                        alt={name + " Logo"}
                      />
                    </div>
                    {name}
                    <div className="sushi-ml-8 sushi-font-normal">{price}</div>
                    <div className="sushi-ml-1 sushi-font-normal sushi-text-sm sushi-text-green-500">{priceChange}</div>
                  </div>
                </div>
                <div className="sushi-mt-4 sushi-flex-shrink-0 sushi-flex md:sushi-mt-0 md:sushi-ml-4">
                  <span className="sushi-ml-3">
                    <WalletButton />
                  </span>
                </div>
              </div>
            </div>
          ),
        }[type]
      }
    </>
  );
};

export default PageTitleBreadcrumb;
