import React, { useMemo, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useWallet } from "use-wallet";

import BigNumber from "bignumber.js";
import useFarm from "../../../services/frontend/hooks/useFarm";
import { getContract } from "../../../services/frontend/utils/erc20";
import useAllowance from "../../../services/frontend/hooks/useAllowance";
import useApprove from "../../../services/frontend/hooks/useApprove";
import useClassicModal from "../../../services/frontend/hooks/useModal";
import useStake from "../../../services/frontend/hooks/useStake";
import useStakedBalance from "../../../services/frontend/hooks/useStakedBalance";
import useTokenBalance from "../../../services/frontend/hooks/useTokenBalance";
import useUnstake from "../../../services/frontend/hooks/useUnstake";
import DepositModal from "../../../services/frontend/views/Farm/components/DepositModal";
import WithdrawModal from "../../../services/frontend/views/Farm/components/WithdrawModal";

const ColumnActions = ({ farmId, pool }) => {
  const { pid, lpToken, lpTokenAddress, tokenAddress, earnToken, name, icon } = useFarm(farmId) || {
    pid: 0,
    lpToken: "",
    lpTokenAddress: "",
    tokenAddress: "",
    earnToken: "",
    name: "",
    icon: "",
  };
  const { ethereum, account } = useWallet();
  const lpContract = useMemo(() => {
    return getContract(ethereum, lpTokenAddress);
  }, [ethereum, lpTokenAddress]);
  const tokenName = lpToken.toUpperCase();

  const history = useHistory();
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = useAllowance(lpContract);
  const { onApprove } = useApprove(lpContract);
  const tokenBalance = useTokenBalance(lpContract.options.address);
  const stakedBalance = useStakedBalance(pid);
  const { onStake } = useStake(pid);
  const { onUnstake } = useUnstake(pid);
  const [onPresentDeposit] = useClassicModal(
    <DepositModal max={tokenBalance} onConfirm={onStake} tokenName={tokenName} />
  );
  const [onPresentWithdraw] = useClassicModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} />
  );
  const handleApprove = useCallback(async () => {
    //console.log("SEEKING APPROVAL");
    try {
      setRequestedApproval(true);
      const txHash = await onApprove();
      console.log(txHash);
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false);
      }
    } catch (e) {
      console.log(e);
    }
  }, [onApprove, setRequestedApproval]);

  return (
    <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
      {!allowance.toNumber() ? (
        <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
          {/* <button
                  onClick={() => {
                    history.push("/pair/" + pool.uniswapPair.id);
                  }}
                  className="sushi-inline-flex sushi-items-center sushi-px-10 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
                >
                  + Liquidity
                </button> */}
          <button
            //disabled={requestedApproval}
            onClick={handleApprove}
            className="sushi-inline-flex sushi-items-center sushi-px-2 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
          >
            🔒 Approve Staking
          </button>
        </span>
      ) : stakedBalance.eq(new BigNumber(0)) && tokenBalance.eq(new BigNumber(0)) && !allowance.toNumber() ? (
        <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
          <button
            onClick={() => {
              history.push("/pair/" + pool.uniswapPair.id);
            }}
            className="sushi-inline-flex sushi-items-center sushi-px-10 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
          >
            + Liquidity
          </button>
        </span>
      ) : (
        <>
          <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
            <button
              onClick={onPresentDeposit}
              className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
            >
              Stake
            </button>
          </span>
          <span className="sushi-ml-2 sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
            <button
              onClick={onPresentWithdraw}
              //disabled={stakedBalance.eq(new BigNumber(0))}
              className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
            >
              Unstake
            </button>
          </span>
        </>
      )}
    </td>
  );
};

export default ColumnActions;
