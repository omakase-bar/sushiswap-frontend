import React from "react";
import { useHistory } from "react-router-dom";
import { isAddress } from "../../classic/vision/utils";
import logoNotFound from "../../assets/logoNotFound.png";

// const Stacked = ({price, price2, id, id2, symbol, symbol2}) => {
//   return (
//     <div className="sushi-ml-8 sushi-font-normal sushi-text-sm">
//       <div className="sushi-flex sushi-items-center">
//         <button
//           type="button"
//           className="sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-gray-300 sushi-text-xs sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 sushi-bg-white hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-gray-800 active:sushi-bg-gray-50 sushi-transition sushi-duration-150 sushi-ease-in-out"
//         >
//           <img
//             src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
//               id
//             )}/logo.png`}
//             className="sushi-mr-2"
//             style={{ width: "1.125rem", height: "1.125rem" }}
//             alt={symbol + " Logo"}
//           />
//           1 USDC = 0.0027 ETH
//         </button>
//       </div>
//       <div className="sushi-flex sushi-items-center sushi-mt-1.5">
//         <button
//           type="button"
//           className="sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-gray-300 sushi-text-xs sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 sushi-bg-white hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-gray-800 active:sushi-bg-gray-50 sushi-transition sushi-duration-150 sushi-ease-in-out"
//         >
//           <img
//             src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
//               id2
//             )}/logo.png`}
//             className="sushi-mr-2"
//             style={{ width: "1.125rem", height: "1.125rem" }}
//             alt={symbol2 + " Logo"}
//           />
//           1 USDC = 0.0027 ETH
//         </button>
//       </div>
//     </div>
//   );
// };

const PairWidget = ({
  token0,
  token1,
  token0Rate,
  token1Rate,
  formattedSymbol0,
  formattedSymbol1,
  token0USD,
  token1USD,
  reserve0,
  reserve1,
}) => {
  const history = useHistory();
  return (
    <div className="sushi-px-8 sushi-py-2">
      <div className="sushi-grid sushi-grid-cols-2 sushi-gap-2 sushi-mt-2 sm:sushi-grid-cols-2 lg:sushi-grid-cols-4">
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                <button
                  type="button"
                  onClick={() => {
                    history.push("/token/" + token0.id);
                  }}
                  className="sushi-w-full sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-gray-300 sushi-text-xs sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 sushi-bg-white hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-gray-800 active:sushi-bg-gray-50 sushi-transition sushi-duration-150 sushi-ease-in-out"
                >
                  <img
                    src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                      token0.id
                    )}/logo.png`}
                    className="sushi-mr-2"
                    style={{ width: "1.125rem", height: "1.125rem" }}
                    alt={formattedSymbol0 + " Logo"}
                  />
                  {token0 && token1
                    ? `1 ${formattedSymbol0} = ${token0Rate} ${formattedSymbol1} ${
                        parseFloat(token0?.derivedETH)
                          ? "(" + token0USD + ")"
                          : ""
                      }`
                    : "-"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                <button
                  type="button"
                  onClick={() => {
                    history.push("/token/" + token1.id);
                  }}
                  className="sushi-w-full sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-gray-300 sushi-text-xs sushi-leading-5 sushi-font-medium sushi-rounded-md sushi-text-gray-700 sushi-bg-white hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-text-gray-800 active:sushi-bg-gray-50 sushi-transition sushi-duration-150 sushi-ease-in-out"
                >
                  <img
                    src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                      token1.id
                    )}/logo.png`}
                    className="sushi-mr-2"
                    style={{ width: "1.125rem", height: "1.125rem" }}
                    alt={formattedSymbol1 + " Logo"}
                  />
                  {token0 && token1
                    ? `1 ${formattedSymbol1} = ${token1Rate} ${formattedSymbol0}  ${
                        parseFloat(token1?.derivedETH)
                          ? "(" + token1USD + ")"
                          : ""
                      }`
                    : "-"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                <div className="sushi-w-full sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 sushi-bg-white">
                  <img
                    src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                      token0.id
                    )}/logo.png`}
                    className="sushi-mr-2"
                    style={{ width: "1.125rem", height: "1.125rem" }}
                    alt={formattedSymbol0 + " Logo"}
                  />
                  {reserve0} {formattedSymbol0}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sushi-flex sushi-items-center sushi-overflow-hidden sushi-bg-white sushi-">
          <div className="sushi-flex-grow">
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-flex-1 sushi-w-0">
                <div className="sushi-w-full sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-text-gray-700 sushi-bg-white">
                  <img
                    src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                      token1.id
                    )}/logo.png`}
                    className="sushi-mr-2"
                    style={{ width: "1.125rem", height: "1.125rem" }}
                    alt={formattedSymbol1 + " Logo"}
                  />
                  {reserve1} {formattedSymbol1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PairWidget;
