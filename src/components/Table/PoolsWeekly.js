import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import Toggle from "../Toggle";
import { useWallet } from "use-wallet";
// For actions
import BigNumber from "bignumber.js";
import useAllStakedValue from "../../classic/frontend/hooks/useAllStakedValue";
import useFarms from "../../classic/frontend/hooks/useFarms";
import useFarm from "../../classic/frontend/hooks/useFarm";
import { getContract } from "../../classic/frontend/utils/erc20";

import useAllowance from "../../classic/frontend/hooks/useAllowance";
import useApprove from "../../classic/frontend/hooks/useApprove";
import useModal from "../../classic/frontend/hooks/useModal";
import useStake from "../../classic/frontend/hooks/useStake";
import useStakedBalance from "../../classic/frontend/hooks/useStakedBalance";
import useTokenBalance from "../../classic/frontend/hooks/useTokenBalance";
import useUnstake from "../../classic/frontend/hooks/useUnstake";
import { getBalanceNumber } from "../../classic/frontend/utils/formatBalance";
import DepositModal from "../../classic/frontend/views/Farm/components/DepositModal";
import WithdrawModal from "../../classic/frontend/views/Farm/components/WithdrawModal";
import Loader from "../../classic/exchange/components/Loader";

import useEarnings from "../../classic/frontend/hooks/useEarnings";
import useReward from "../../classic/frontend/hooks/useReward";
import Value from "../Cards/Balance/Value";

import _ from "lodash";
import SushiChef from "../../assets/sushi-chef_bg-fill-light.jpg";
import "../../assets/shine.css";

//import { isAddress } from "../../classic/vision/utils/index.js";
//import logoNotFound from "../../assets/logoNotFound.png";

const UnlockWallet = ({ showWallets }) => {
  return (
    <div
      className="relative sushi-h-full sushi-inline-block sushi-min-w-full sushi-align-middle sushi-border-b sushi-border-gray-200 sushi-shadow sm:sushi-rounded-lg"
      style={{ backgroundColor: "#ffeddb", overflowX: "hidden" }}
    >
      <div
        className="relative sushi-mx-4 sushi-bg-cover sushi-bg-center sushi-border-b sushi-border-gray-200 sushi-shadow sm:sushi-rounded-lg"
        style={{
          height: "32rem",
          backgroundImage: `url(${SushiChef})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sushi-flex sushi-items-center sushi-justify-center sushi-h-full sushi-w-full">
          <div className="sushi-text-center">
            <div className="sushi-rounded-md sushi-shadow">
              <button
                onClick={() => {
                  showWallets();
                }}
                className="sushi-w-full sushi-flex sushi-items-center sushi-justify-center sushi-px-5 sushi-py-3 sushi-border sushi-border-transparent sushi-text-base sushi-leading-6 sushi-font-medium sushi-rounded-md sushi-text-white sushi-bg-orange-600 hover:sushi-bg-orange-700 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-duration-150 sushi-ease-in-out"
              >
                Connect wallet to begin
              </button>
            </div>
          </div>
        </div>
        <div className="sushi-shine" />
      </div>
    </div>
  );
};

const APYWrapper = ({ showWallets }) => {
  const [farms] = useFarms();
  const { account } = useWallet();
  const stakedValue = useAllStakedValue();
  const sushiIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === "SUSHI"
  );
  const sushiPrice =
    sushiIndex >= 0 && stakedValue[sushiIndex]
      ? stakedValue[sushiIndex].tokenPriceInWeth
      : new BigNumber(0);
  const BLOCKS_PER_YEAR = new BigNumber(2336000);
  const SUSHI_PER_BLOCK = new BigNumber(100);
  const rows = farms.reduce((farmRows, farm, i) => {
    const farmWithStakedValue = Object.assign(
      Object.assign(Object.assign({}, farm), stakedValue[i]),
      {
        apy: stakedValue[i]
          ? sushiPrice
              .times(SUSHI_PER_BLOCK)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[i].poolWeight)
              .div(stakedValue[i].totalWethValue)
          : null,
      }
    );
    const newFarmRows = [...farmRows];
    newFarmRows.push(farmWithStakedValue);
    return newFarmRows;
  }, []);

  return <Pools pools={rows} showWallets={showWallets} />;
};

const Pools = ({ pools, showWallets }) => {
  const { account } = useWallet();
  const headers = [
    {
      name: "Pool",
      id: "name",
    },
    {
      name: "ROI",
      id: "rewards.hourlyROI",
    },
  ];
  //console.log("WEEKLY POOLS:", pools);
  const filtered = _.filter(pools, function(pool) {
    return pool.pid > 18;
  });

  return (
    <>
      <div className="sushi-px-4 lg:sushi-flex lg:sushi-items-center lg:sushi-justify-between">
        <div className="sushi-flex-1 sushi-min-w-0">
          <h2 className="sushi-max-w-6xl sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sushi-">
            Menu of the Week
            <span class="sushi-ml-3 sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-0.5 sushi-rounded-full sushi-text-sm sushi-font-medium sushi-leading-5 sushi-bg-orange-100 sushi-text-orange-800">
              Up to 350% APY
            </span>
            <span> ✨</span>
          </h2>
          <Toggle showWallets={showWallets} />
        </div>
      </div>
      {!account ? (
        <UnlockWallet showWallets={showWallets} />
      ) : (
        <div
          style={{
            position: "relative",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <div className="sushi-mt-8 sushi-inline-block sushi-min-w-full sushi-align-middle sushi-border-b sushi-border-gray-200 sushi-shadow sm:sushi-rounded-lg">
            <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
              <thead>
                <tr>
                  {headers.map((header, index) => {
                    return (
                      <th
                        className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-t sushi-border-gray-200 sushi-bg-gray-50"
                        style={
                          index === 0
                            ? {
                                position: "-webkit-sticky",
                                position: "sticky",
                                width: "16rem",
                                minWidth: "16rem",
                                maxWidth: "16rem",
                                left: "0px",
                                boxShadow: "10px 0 5px -2px #f3f3f3",
                              }
                            : null
                        }
                      >
                        <a href="#" className="sushi-flex sushi-items-center">
                          <span>{header.name}</span>
                        </a>
                      </th>
                    );
                  })}
                  {account ? (
                    <>
                      <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100">
                        <a href="#" className="sushi-flex sushi-items-center">
                          <span>Available</span>
                        </a>
                      </th>
                      <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100">
                        <a href="#" className="sushi-flex sushi-items-center">
                          <span>Staked</span>
                        </a>
                      </th>
                      <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100"></th>
                      <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100">
                        <a href="#" className="sushi-flex sushi-items-center">
                          <span>Rewards</span>
                        </a>
                      </th>
                      {/* <th className="sushi-px-6 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-800 sushi-uppercase sushi-border-b sushi-border-t sushi-border-orange-200 sushi-bg-orange-100"></th> */}
                    </>
                  ) : null}
                </tr>
              </thead>
              <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
                {filtered && filtered.length > 0
                  ? filtered.map((pool) => {
                      return (
                        <tr>
                          <td
                            className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-white"
                            style={{
                              position: "-webkit-sticky",
                              position: "sticky",
                              width: "16rem",
                              minWidth: "16rem",
                              maxWidth: "16rem",
                              left: "0px",
                              boxShadow: "10px 0 5px -2px #f3f3f3",
                              borderColor: "transparent",
                            }}
                          >
                            <div className="sushi-flex sushi-items-center">
                              <div className="sushi-flex-shrink-0 sushi-w-10 sushi-h-10 sushi-text-3xl">
                                {pool.icon}
                              </div>
                              <div className="sushi-ml-4">
                                <div className="sushi-flex sushi-items-center">
                                  <Link
                                    to={
                                      "/pair/" +
                                      pool.lpTokenAddress.toLowerCase()
                                    }
                                    className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
                                  >
                                    {pool.name}
                                    <svg
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="sushi-w-4 sushi-h-4 sushi-ml-1"
                                    >
                                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                  </Link>{" "}
                                  {pool.new ? (
                                    <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                                      New
                                    </span>
                                  ) : null}
                                </div>{" "}
                                <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                                  {pool.lpToken}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                            <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                              {pool.apy ? (
                                <>
                                  <span>
                                    {pool.apy
                                      .times(new BigNumber(100))
                                      .div(new BigNumber(365))
                                      .toNumber()
                                      .toLocaleString("en-US")
                                      .slice(0, -1)}
                                    %
                                  </span>
                                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                                    daily
                                  </span>
                                </>
                              ) : (
                                <Loader />
                              )}
                            </div>
                            <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                              {pool.apy ? (
                                <>
                                  <span>
                                    {pool.apy
                                      .times(new BigNumber(100))
                                      .div(new BigNumber(12))
                                      .toNumber()
                                      .toLocaleString("en-US")
                                      .slice(0, -1)}
                                    %
                                  </span>
                                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                                    monthly
                                  </span>
                                </>
                              ) : (
                                <Loader />
                              )}
                            </div>
                            <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                              {pool.apy ? (
                                <>
                                  <span>
                                    {pool.apy
                                      .times(new BigNumber(100))
                                      .toNumber()
                                      .toLocaleString("en-US")
                                      .slice(0, -1)}
                                    %
                                  </span>
                                  <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                                    yearly
                                  </span>
                                </>
                              ) : (
                                <Loader />
                              )}
                            </div>
                          </td>
                          {account ? (
                            <StakeWrapper
                              key={pool.id}
                              farmId={pool.id}
                              pool={pool}
                            />
                          ) : null}
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

const StakeWrapper = ({ farmId, pool }) => {
  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    earnToken,
    name,
    icon,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: "",
    lpTokenAddress: "",
    tokenAddress: "",
    earnToken: "",
    name: "",
    icon: "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ethereum } = useWallet();
  const lpContract = useMemo(() => {
    return getContract(ethereum, lpTokenAddress);
  }, [ethereum, lpTokenAddress]);

  return (
    <Stake
      lpContract={lpContract}
      pid={pid}
      tokenName={lpToken.toUpperCase()}
      lpTokenAddress={lpTokenAddress}
      pool={pool}
    />
  );
};

const Stake = ({ pool, lpContract, pid, tokenName, lpTokenAddress }) => {
  const history = useHistory();
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = useAllowance(lpContract);
  const { onApprove } = useApprove(lpContract);
  const tokenBalance = useTokenBalance(lpContract.options.address);
  const stakedBalance = useStakedBalance(pid);
  const { onStake } = useStake(pid);
  const { onUnstake } = useUnstake(pid);
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />
  );
  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />
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

  const earnings = useEarnings(pid);
  const [pendingTx, setPendingTx] = useState(false);
  const { onReward } = useReward(pid);
  const { account } = useWallet();

  //   console.log(tokenName);
  //   console.log(stakedBalance.eq(new BigNumber(0)));
  //   console.log(tokenBalance.eq(new BigNumber(0)));
  return (
    <>
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div>{Number(getBalanceNumber(tokenBalance)).toFixed(4)}</div>{" "}
        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
          {tokenName}
          {/* <span className="sushi-text-gray-900">{tokenName}</span> */}
        </div>
      </td>
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div>{Number(getBalanceNumber(stakedBalance)).toFixed(4)}</div>{" "}
        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
          {tokenName}
        </div>
      </td>
      <td className="sushi-pl-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
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
        ) : stakedBalance.eq(new BigNumber(0)) &&
          tokenBalance.eq(new BigNumber(0)) ? (
          <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
            <button
              onClick={() => {
                history.push("/pair/" + pool.lpTokenAddress.toLowerCase());
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
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div className="sushi-inline-flex sushi-flex-col">
          <div className="sushi-flex sushi-items-center">
            {getBalanceNumber(earnings) > 0 ? (
              <>
                <button
                  disabled={!earnings.toNumber() || pendingTx}
                  onClick={async () => {
                    setPendingTx(true);
                    await onReward();
                    setPendingTx(false);
                  }}
                  className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                  style={{ border: "1px solid rgb(238, 109, 72)" }}
                >
                  🍣
                </button>
                <div>
                  <div>
                    <Value
                      value={!!account ? getBalanceNumber(earnings) : "Locked"}
                    />{" "}
                    <span className="sushi-text-xs sushi-text-gray-500">
                      SUSHI
                    </span>
                  </div>
                  <div className="sushi-text-xs sushi-text-gray-500">
                    Click to harvest
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50">
                  🤷‍♀️
                </div>
                <div>
                  <div>
                    <Value
                      value={!!account ? getBalanceNumber(earnings) : "Locked"}
                    />
                    <span className="sushi-ml-2 sushi-text-xs sushi-text-gray-500">
                      SUSHI
                    </span>
                  </div>
                  <div className="sushi-text-xs sushi-text-gray-500">
                    No rewards
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </td>
    </>
  );
};

export default APYWrapper;
