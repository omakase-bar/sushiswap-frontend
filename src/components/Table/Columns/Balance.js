import React from "react";

const ColumnBalance = ({ pool }) => {
  console.log("POOL:", pool);
  console.log(pool.tokenBalance, pool.stakedBalance);
  return (
    <td className="sushi-pl-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
      <div className="sushi-text-xs">
        <div className="sushi-flex sushi-items-center">
          Available: {pool.tokenBalance && Number(pool.tokenBalance).toFixed(4)}
        </div>
        <div className="sushi-flex sushi-items-center sushi-mt-1.5">
          Staked: {pool.stakedBalance && Number(pool.stakedBalance).toFixed(4)}
        </div>
        <div className="sushi-flex sushi-items-center sushi-mt-1.5">{pool.sushiswapId}</div>
      </div>
    </td>
  );
};

export default ColumnBalance;
