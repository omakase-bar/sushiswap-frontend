import BigNumber from "bignumber.js";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import ExpandButton from "../ExpandButton";

import useSushi from "../../../classic/frontend/hooks/useSushi";
import { useWallet } from "use-wallet";
import { getContract } from "../../../classic/frontend/utils/erc20";
import { provider } from "web3-core";

import { contractAddresses } from "../../../classic/frontend/sushi/lib/constants";
import {
  getXSushiSupply,
  getTotalSushiStakedInBar,
} from "../../../classic/frontend/sushi/utils";
import { getBalanceNumber } from "../../../classic/frontend/utils/formatBalance";
import useTokenBalance from "../../../classic/frontend/hooks/useTokenBalance";

import useEnter from "../../../classic/frontend/hooks/useEnter";
import useLeave from "../../../classic/frontend/hooks/useLeave";
import useModal from "../../../classic/frontend/hooks/useModal";
import DepositModal from "../../../classic/frontend/views/StakeXSushi/components/DepositModal";
import WithdrawModal from "../../../classic/frontend/views/StakeXSushi/components/WithdrawModal";
import useAllowanceStaking from "../../../classic/frontend/hooks/useAllowanceStaking";
import useApproveStaking from "../../../classic/frontend/hooks/useApproveStaking";

const ServeUpSushiCard = ({ title, showWallets }) => {
  const { tokenAddress } = {
    tokenAddress: contractAddresses.xSushi[1],
  };

  const [totalSupply, setTotalSupply] = useState<BigNumber>();
  const [totalStaked, setTotalStaked] = useState<BigNumber>();

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
    return getContract(ethereum as provider, tokenAddress);
  }, [ethereum, tokenAddress]);

  const xSushiBalance = useTokenBalance(lpContract.options.address);

  // Get users # of Sushi not staked
  const totalNotStaked = useTokenBalance(contractAddresses.sushi[1]);

  // Calculate users poolShare and sushiStaked
  const poolShare = new BigNumber(xSushiBalance).div(
    new BigNumber(totalSupply)
  );
  const poolStaked = new BigNumber(poolShare).times(new BigNumber(totalStaked));
  const sushiStaked = new BigNumber(poolStaked).div(
    new BigNumber(1000000000000000000)
  );
  // (poolShare * totalStaked.toNumber()) / new BigNumber(1000000000000000000);

  // Stuff for Stake button
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = useAllowanceStaking();
  const { onApprove } = useApproveStaking();
  const { onEnter } = useEnter();

  const sushiTokenName = "SUSHI";
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={totalNotStaked}
      onConfirm={onEnter}
      tokenName={sushiTokenName}
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

  // Stuff for Unstake Sushi Button
  const [pendingTx, setPendingTx] = useState(false);
  const { onLeave } = useLeave();

  const xSushiTokenName = "xSUSHI";
  const [onPresentLeave] = useModal(
    <WithdrawModal
      max={xSushiBalance}
      onConfirm={onLeave}
      tokenName={xSushiTokenName}
    />
  );

  //console.log(xSushiBalance);
  //console.log(totalSupply);
  //console.log(totalStaked);

  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-pb-5 sushi-border-b sushi-border-gray-200 sushi-space-y-4 sm:sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              SushiBar Info
            </h3>
            <ExpandButton
              widgetPath={"/widgets/serveit"}
              dashboardPath={"/sushi-bar"}
            />
          </div>
        </div>
        <div className="sushi-mt-6 sushi-flex-1">
          <div>
            {totalSupply
              ? `There are currently ${getBalanceNumber(
                  totalSupply
                )} total xSUSHI.`
              : ""}
          </div>
          <div>
            {totalStaked
              ? `There are currently ${getBalanceNumber(
                  totalStaked
                )} SUSHI staked in the bar.`
              : ""}
          </div>
          <div>
            {xSushiBalance
              ? `You currently have ${getBalanceNumber(xSushiBalance)} xSushi.`
              : ""}
          </div>
          <div>
            {totalNotStaked
              ? `You currently have ${getBalanceNumber(
                  totalNotStaked
                )} Sushi not staked in the bar.`
              : ""}
          </div>
          <div>
            {poolShare ? `You currently have ${poolShare} of the pool.` : ""}
          </div>
          <div>
            {sushiStaked
              ? `You currently have ${sushiStaked} Sushi staked in the bar.`
              : ""}
          </div>
          <div>
            <button
              disabled={totalNotStaked.eq(new BigNumber(0))}
              onClick={onPresentDeposit}
              className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
            >
              Convert to xSushi
            </button>
          </div>
          <div>
            <button
              disabled={!xSushiBalance.toNumber() || pendingTx}
              onClick={async () => {
                setPendingTx(true);
                await onPresentLeave();
                setPendingTx(false);
              }}
              className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
            >
              {pendingTx ? "Converting to SUSHI" : "Convert to SUSHI"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeUpSushiCard;
