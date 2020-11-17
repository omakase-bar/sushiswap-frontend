import React, { useState, useMemo } from "react";
import { useWallet } from "use-wallet";
//import {getBalanceNumber} from '../../../utils/formatBalance'
import { getContract } from "../../../services/frontend/utils/erc20";
import { contractAddresses } from "../../../services/frontend/sushi/lib/constants";
import useModal from "../../../services/frontend/hooks/useModal";
import useTokenBalance from "../../../services/frontend/hooks/useTokenBalance";
import WithdrawModal from "../../../services/frontend/views/StakeXSushi/components/WithdrawModal";
import useLeave from "../../../services/frontend/hooks/useLeave";

const StakeSushi = () => {
  const { account, ethereum } = useWallet();
  const { tokenAddress } = {
    tokenAddress: contractAddresses.xSushi[1],
  };

  const lpContract = useMemo(() => {
    if (account) {
      return getContract(ethereum, tokenAddress);
    }
  }, [ethereum, tokenAddress]);

  const xSushiBalance = useTokenBalance(lpContract.options.address);
  const [pendingTx, setPendingTx] = useState(false);
  const { onLeave } = useLeave();
  const tokenName = "xSUSHI";
  const [onPresentLeave] = useModal(<WithdrawModal max={xSushiBalance} onConfirm={onLeave} tokenName={tokenName} />);

  return (
    <>
      <button
        disabled={!xSushiBalance.toNumber() || pendingTx}
        onClick={async () => {
          setPendingTx(true);
          await onPresentLeave();
          setPendingTx(false);
        }}
        className="sushi-mr-4 sushi-w-16 sushi-h-24 sushi-text-3xl sushi-rounded-md sushi-shadow-md"
        style={{
          border: "1px solid rgb(238, 109, 72)",
          backgroundColor: "#feeddc",
        }}
      >
        🎣
        <br />
        <p className="text-xs font-medium">Unstake SUSHI</p>
      </button>
    </>
  );
};

export default StakeSushi;
