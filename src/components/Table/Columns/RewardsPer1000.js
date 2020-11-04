import React from "react";
import { formatNumber } from "./utils";

const ColumnRewardsPer1000 = ({ pool }) => {
  console.log("POOL COLUMN:", pool);
  return (
    <>
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div className="sushi-inline-flex sushi-flex-col">
          <div className="sushi-flex sushi-items-center">
            <div
              className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
              style={{ border: "solid 1px #ee6d48" }}
            >
              🍣
            </div>
            <div>
              <div>
                {formatNumber(
                  (1e3 / ((pool.balance / pool.uniswapPair.totalSupply) * pool.uniswapPair.reserveUSD)) *
                    ((3600 / 13.115837104072398) * pool.rewards.rewardPerBlock) *
                    24,
                  3
                )}
              </div>
              <div className="sushi-text-xs sushi-text-gray-500">SUSHI/day</div>
            </div>
          </div>
          {pool.rewards.multiplier && pool.rewards.multiplier > 1 ? (
            <div
              className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-md sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
              data-original-title="null"
            >
              <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                {formatNumber(pool.rewards.multiplier, 2)}x Reward
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ) : pool.rewards.multiplier && pool.rewards.multiplier !== 1 ? (
            <div
              className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-md sushi-select-none sushi-has-tooltip"
              data-original-title="null"
            >
              <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                {formatNumber(pool.rewards.multiplier, 2)}x Reward
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </td>
    </>
  );
};

export default ColumnRewardsPer1000;
