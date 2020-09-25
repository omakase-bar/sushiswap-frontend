import BigNumber from "bignumber.js";
import React, { useCallback, useState } from "react";
// Staking SushiX
import useModal from "../../../classic/frontend/hooks/useModal";
import useTokenBalance from "../../../classic/frontend/hooks/useTokenBalance";
import DepositModal from "../../../classic/frontend/views/StakeXSushi/components/DepositModal";
import { contractAddresses } from "../../../classic/frontend/sushi/lib/constants";
import useEnter from "../../../classic/frontend/hooks/useEnter";
import useLeave from "../../../classic/frontend/hooks/useLeave";
import useAllowanceStaking from "../../../classic/frontend/hooks/useAllowanceStaking";
import useApproveStaking from "../../../classic/frontend/hooks/useApproveStaking";

const StakeSushi = () => {
  //Staking SushiX Mechanism
  const tokenName = "SUSHI";
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = useAllowanceStaking();
  const { onApprove } = useApproveStaking();
  const tokenBalance = useTokenBalance(contractAddresses.sushi[1]);
  const { onEnter } = useEnter();
  const { onLeave } = useLeave();
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onEnter}
      tokenName={tokenName}
    />
  );
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
      <a href={"https://sushiswapclassic.org/staking"} target="_blank">
        <button
          className="sushi-mr-4 sushi-w-16 sushi-h-20 sushi-text-3xl sushi-rounded-md sushi-shadow-md"
          style={{
            border: "1px solid rgb(238, 109, 72)",
            backgroundColor: "#feeddc",
          }}
        >
          ⛏️
          <br />
          <p className="sushi-text-sm">Stake</p>
        </button>
      </a>
      {/* {!allowance.toNumber() ? (
        <button
          disabled={requestedApproval}
          onClick={handleApprove}
          className="sushi-mr-4 sushi-w-16 sushi-h-20 sushi-text-3xl sushi-rounded-md sushi-shadow-md"
          style={{
            border: "1px solid rgb(238, 109, 72)",
            backgroundColor: "#feeddc",
          }}
        >
          ⛏️
          <br />
          <p className="sushi-text-sm">Enable</p>
        </button>
      ) : (
        <>
          <button
            //disabled={tokenBalance.eq(new BigNumber(0))}
            onClick={onPresentDeposit}
            className="sushi-mr-4 sushi-w-16 sushi-h-20 sushi-text-3xl sushi-rounded-md sushi-shadow-md"
            style={{
              border: "1px solid rgb(238, 109, 72)",
              backgroundColor: "#feeddc",
            }}
          >
            ⛏️
            <br />
            <p className="sushi-text-sm">Stake</p>
          </button>
        </>
      )} */}
    </>
  );
};

export default StakeSushi;
