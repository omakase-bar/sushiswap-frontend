import React, { useEffect, useMemo } from "react";
import { useWallet } from "use-wallet";
import useFarm from "../../../services/frontend/hooks/useFarm";
import { getContract } from "../../../services/frontend/utils/erc20";
import { getBalanceNumber } from "../../../services/frontend/utils/formatBalance";
import useStakedBalance from "../../../services/frontend/hooks/useStakedBalance";
import useTokenBalance from "../../../services/frontend/hooks/useTokenBalance";

const ColumnBalance = ({ farmId, poolStats, setPoolStats }) => {
  const { pid, lpToken, lpTokenAddress, tokenAddress, earnToken, name, icon } = useFarm(farmId) || {
    pid: 0,
    lpToken: "",
    lpTokenAddress: "",
    tokenAddress: "",
    earnToken: "",
    name: "",
    icon: "",
  };
  const { ethereum } = useWallet();
  // const lpContract = useMemo(() => {
  //   return getContract(ethereum, lpTokenAddress);
  // }, [ethereum, lpTokenAddress]);
  const lpContract = useMemo(() => {
    return getContract(ethereum, lpTokenAddress);
  }, [ethereum, lpTokenAddress]);
  const tokenName = lpToken.toUpperCase();
  const tokenBalance = useTokenBalance(lpContract.options.address);
  const stakedBalance = useStakedBalance(pid);

  // console.log("POOLS:", poolStats);
  // Updated poolStats in order to allow sorting
  // Todo: Find a more scalable method to prevent too many rerenders
  // useEffect(() => {
  //   let newPoolStats = [...poolStats];
  //   //console.log(farmId, Number(getBalanceNumber(stakedBalance)));
  //   newPoolStats.find((obj) => obj.sushiswapId === farmId).tokenBalance = Number(getBalanceNumber(stakedBalance));
  //   setPoolStats(newPoolStats);
  // }, [stakedBalance]);
  // console.log("POOLS:", farmId, newPoolStats);

  return (
    <td className="sushi-pl-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
      <div className="sushi-text-xs">
        <div className="sushi-flex sushi-items-center">
          Available: {Number(getBalanceNumber(tokenBalance)).toFixed(4)}
        </div>
        <div className="sushi-flex sushi-items-center sushi-mt-1.5">
          Staked: {Number(getBalanceNumber(stakedBalance)).toFixed(4)}
        </div>
        <div className="sushi-flex sushi-items-center sushi-mt-1.5">{tokenName}</div>
      </div>
    </td>
  );
};

export default ColumnBalance;
