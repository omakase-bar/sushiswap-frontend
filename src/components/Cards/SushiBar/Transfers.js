import BigNumber from "bignumber.js";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import ExpandButton from "../../Buttons/ExpandButton";
import useSushi from "../../../services/frontend/hooks/useSushi";
import { useWallet } from "use-wallet";
import { getContract } from "../../../services/frontend/utils/erc20";
import { contractAddresses } from "../../../services/frontend/sushi/lib/constants";
import { getXSushiSupply, getTotalSushiStakedInBar } from "../../../services/frontend/sushi/utils";
import { getBalanceNumber } from "../../../services/frontend/utils/formatBalance";
import useTokenBalance from "../../../services/frontend/hooks/useTokenBalance";
import useEnter from "../../../services/frontend/hooks/useEnter";
import useLeave from "../../../services/frontend/hooks/useLeave";
import useModal from "../../../services/frontend/hooks/useModal";
import DepositModal from "../../../services/frontend/views/StakeXSushi/components/DepositModal";
import WithdrawModal from "../../../services/frontend/views/StakeXSushi/components/WithdrawModal";
import useAllowanceStaking from "../../../services/frontend/hooks/useAllowanceStaking";
import useApproveStaking from "../../../services/frontend/hooks/useApproveStaking";
const Balances = ({ title, showWallets }) => {
  const { tokenAddress } = {
    tokenAddress: contractAddresses.xSushi[1],
  };
  const [totalSupply, setTotalSupply] = useState();
  const [totalStaked, setTotalStaked] = useState();
  const sushi = useSushi();
  const { ethereum } = useWallet();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Get totalSupply of xSushi
  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXSushiSupply(sushi);
      setTotalSupply(supply);
    }
    if (sushi) {
      fetchTotalSupply();
    }
  }, [sushi, setTotalSupply]);
  // Gets overall totalStaked Sushi in SushiBar
  useEffect(() => {
    async function fetchTotalStaked() {
      const staked = await getTotalSushiStakedInBar(sushi);
      setTotalStaked(staked);
    }
    if (sushi) {
      fetchTotalStaked();
    }
  }, [sushi, setTotalStaked]);
  // Gets user's staked Sushi amount
  const lpContract = useMemo(() => {
    debugger;
    return getContract(ethereum, tokenAddress);
  }, [ethereum, tokenAddress]);
  const xSushiBalance = useTokenBalance(lpContract.options.address);
  // Get users # of Sushi not staked
  const totalNotStaked = useTokenBalance(contractAddresses.sushi[1]);
  // Calculate users poolShare and sushiStaked
  const poolShare = new BigNumber(xSushiBalance).div(new BigNumber(totalSupply));
  const poolStaked = new BigNumber(poolShare).times(new BigNumber(totalStaked));
  const sushiStaked = new BigNumber(poolStaked).div(new BigNumber(1000000000000000000));
  // (poolShare * totalStaked.toNumber()) / new BigNumber(1000000000000000000);
  // Stuff for Stake button
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = useAllowanceStaking();
  const { onApprove } = useApproveStaking();
  const { onEnter } = useEnter();
  const sushiTokenName = "SUSHI";
  const [onPresentDeposit] = useModal(
    <DepositModal max={totalNotStaked} onConfirm={onEnter} tokenName={sushiTokenName} />
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
  // Stuff for Unstake Sushi Button
  const [pendingTx, setPendingTx] = useState(false);
  const { onLeave } = useLeave();
  const xSushiTokenName = "xSUSHI";
  const [onPresentLeave] = useModal(
    <WithdrawModal max={xSushiBalance} onConfirm={onLeave} tokenName={xSushiTokenName} />
  );
  //console.log(xSushiBalance);
  //console.log(totalSupply);
  //console.log(totalStaked);
  return (
    <>
      <div className="bg-white border border-gray-200 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Your SushiBar Stats</h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">SUSHI and xSUSHI</p>
        </div>
        <div className="px-4 py-5 sm:p-0">
          <dl>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">
                SUSHI outside the bar
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {totalNotStaked ? `${getBalanceNumber(totalNotStaked)}` : ""}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">SUSHI in the bar</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">{sushiStaked ? `${sushiStaked}` : ""}</dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">xSUSHI Balance</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {xSushiBalance ? `${getBalanceNumber(xSushiBalance)}` : ""}
              </dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Total Gain</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
            </div>
            {/* <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">TWA balance staked</dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
          </div> */}
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Your APR</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Balances;
