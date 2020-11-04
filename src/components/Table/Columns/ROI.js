import React from "react";
import { formatNumber } from "./utils";

const ColumnROI = ({ pool }) => {
  return (
    <>
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div className="sushi-flex sushi-items-center">
          <span>{formatNumber(pool.rewards.hourlyROI * 24 * 100, 2)}%</span>
          <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">daily</span>
        </div>
        <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
          <span>{formatNumber(pool.rewards.hourlyROI * 24 * 30 * 100, 2)}%</span>
          <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">monthly</span>
        </div>
        <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
          <span>{formatNumber(pool.rewards.hourlyROI * 24 * 365 * 100, 2)}%</span>
          <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">yearly</span>
        </div>
      </td>
      {/* <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
  {formatNumber(pool.balance, 3)}
  <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
    {pool.sushiswapId}
  </div>
</td> */}
    </>
  );
};

export default ColumnROI;
