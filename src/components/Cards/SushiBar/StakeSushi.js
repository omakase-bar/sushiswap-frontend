import BigNumber from "bignumber.js";
import React, { useCallback, useState } from "react";
import useModal from "../../../services/frontend/hooks/useModal";
import useTokenBalance from "../../../services/frontend/hooks/useTokenBalance";
import DepositModal from "../../../services/frontend/views/StakeXSushi/components/DepositModal";
import { contractAddresses } from "../../../services/frontend/sushi/lib/constants";
import useEnter from "../../../services/frontend/hooks/useEnter";
import useLeave from "../../../services/frontend/hooks/useLeave";
import useAllowanceStaking from "../../../services/frontend/hooks/useAllowanceStaking";
import useApproveStaking from "../../../services/frontend/hooks/useApproveStaking";

const StakeSushi = () => {
  const tokenName = "SUSHI";
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = useAllowanceStaking();
  const { onApprove } = useApproveStaking();
  const tokenBalance = useTokenBalance(contractAddresses.sushi[1]);
  const { onEnter } = useEnter();
  const { onLeave } = useLeave();
  const [onPresentDeposit] = useModal(<DepositModal max={tokenBalance} onConfirm={onEnter} tokenName={tokenName} />);
  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true);
      const txHash = await onApprove();
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false);
      }
    } catch (e) {
      console.log(e);
    }
  }, [onApprove, setRequestedApproval]);
  return (
    <>
      {!allowance.toNumber() ? (
        <button
          disabled={requestedApproval}
          onClick={handleApprove}
          class="font-medium text-orange-600 hover:text-orange-700 transition duration-150 ease-in-out"
        >
          Approve Staking
        </button>
      ) : (
        <button
          disabled={tokenBalance.eq(new BigNumber(0))}
          onClick={onPresentDeposit}
          class="font-medium text-orange-600 hover:text-orange-700 transition duration-150 ease-in-out"
        >
          Stake
        </button>
      )}
    </>
  );
};
export default StakeSushi;
