import React, { useState, useMemo } from "react";
import { useWallet } from "use-wallet";
import { contractAddresses } from "../../../services/frontend/sushi/lib/constants";
import { getContract } from "../../../services/frontend/utils/erc20";
import useTokenBalance from "../../../services/frontend/hooks/useTokenBalance";
import useModal from "../../../services/frontend/hooks/useModal";
import WithdrawModal from "../../../services/frontend/views/StakeXSushi/components/WithdrawModal";
import useLeave from "../../../services/frontend/hooks/useLeave";

const UnstakeXSushi = () => {
  const { tokenAddress } = {
    tokenAddress: contractAddresses.xSushi[1],
  };
  const { ethereum } = useWallet();
  const lpContract = useMemo(() => {
    debugger;
    return getContract(ethereum, tokenAddress);
  }, [ethereum, tokenAddress]);

  const xSushiBalance = useTokenBalance(lpContract.options.address);
  const [pendingTx, setPendingTx] = useState(false);
  const { onLeave } = useLeave();
  const tokenName = "xSUSHI";
  const [onPresentLeave] = useModal(<WithdrawModal max={xSushiBalance} onConfirm={onLeave} tokenName={tokenName} />);
  return (
    <button
      disabled={!xSushiBalance.toNumber() || pendingTx}
      onClick={async () => {
        setPendingTx(true);
        await onPresentLeave();
        setPendingTx(false);
      }}
      class="font-medium text-orange-600 hover:text-orange-700 transition duration-150 ease-in-out"
    >
      {pendingTx ? "Converting..." : "Unstake"}
    </button>
  );
};
export default UnstakeXSushi;
