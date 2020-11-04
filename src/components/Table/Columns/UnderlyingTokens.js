import React from "react";
import { formatNumber } from "./utils";
import { isAddress } from "../../../services/vision/utils/";
import logoNotFound from "../../../assets/img/logoNotFound.png";

const ColumnUnderlyingTokens = ({ pool }) => {
  return (
    <>
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div className="sushi-text-xs">
          <div className="sushi-flex sushi-items-center">
            <img
              src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                pool.uniswapPair.token0.id
              )}/logo.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = logoNotFound;
              }}
              alt={pool.uniswapPair.token0.symbol + " Logo"}
              className="sushi-mr-2"
              style={{
                width: "1.125rem",
                height: "1.125rem",
              }}
            />
            {formatNumber((pool.balance / pool.uniswapPair.totalSupply) * pool.uniswapPair.reserve0, 2)}{" "}
            {pool.uniswapPair.token0.symbol}
          </div>
          <div className="sushi-flex sushi-items-center sushi-mt-1.5">
            <img
              src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                pool.uniswapPair.token1.id
              )}/logo.png`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = logoNotFound;
              }}
              alt={pool.uniswapPair.token1.symbol + " Logo"}
              className="sushi-mr-2"
              style={{
                width: "1.125rem",
                height: "1.125rem",
              }}
            />
            {formatNumber((pool.balance / pool.uniswapPair.totalSupply) * pool.uniswapPair.reserve1, 2)}{" "}
            {pool.uniswapPair.token1.symbol}
          </div>
          <div className="sushi-flex sushi-items-center sushi-mt-1.5">
            <svg viewBox="0 0 20 20" fill="currentColor" className="sushi-w-4 sushi-h-4 sushi-mr-2">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            ${formatNumber(pool.balanceUSD, 0)} TVL{" "}
            {/* {pool.history.dayAgo ? (
          pool.history.dayAgo &&
          pool.balanceUSD >
            pool.history.dayAgo.balanceUSD ? (
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="sushi-w-4 sushi-h-4 sushi-mr-2 sushi-text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="sushi-w-4 sushi-h-4 sushi-mr-2 sushi-text-red-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
          )
        ) : null} */}
          </div>
        </div>
      </td>
    </>
  );
};

export default ColumnUnderlyingTokens;
