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

import { isAddress } from "../../classic/vision/utils/index.js";
import logoNotFound from "../../assets/logoNotFound.png";

const headers = [
  {
    name: "Pool",
    id: "name",
  },
  {
    name: "Staked",
    id: "balance",
  },
  {
    name: "Underlying Tokens",
    id: null,
  },
  {
    name: "Total Value Locked",
    id: "balanceUSD",
  },
  {
    name: "Yield per $1,000",
    id: null,
  },
  {
    name: "ROI",
    id: "rewards.hourlyROI",
  },
];

const formatNumber = (x, decimal) => {
  return Number(x)
    .toFixed(decimal)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const sum = (items, prop) => {
  return items.reduce(function(a, b) {
    return a + b[prop];
  }, 0);
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
        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">{tokenName}</div>
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
          tokenBalance.eq(new BigNumber(0)) &&
          !allowance.toNumber() ? (
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
                    <span className="sushi-text-xs sushi-text-gray-500">SUSHI</span>
                  </div>
                  <div className="sushi-text-xs sushi-text-gray-500">Click to harvest</div>
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
                    <span className="sushi-ml-2 sushi-text-xs sushi-text-gray-500">SUSHI</span>
                  </div>
                  <div className="sushi-text-xs sushi-text-gray-500">No rewards</div>
                </div>
              </>
            )}
          </div>
        </div>
      </td>
    </>
  );
};

const Pools = ({
  title,
  pools,
  sort,
  sortDirection,
  setSort,
  setSortDirection,
  showWallets,
}) => {
  // For regular pool display
  const { account } = useWallet();
  const total = pools ? sum(pools, "balanceUSD") : undefined;
  //console.log("TOTAL:", total);

  // For pool actions
  const [farms] = useFarms();
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

  console.log("POOLS:", farms);

  return (
    <>
      <div className="sushi-px-4 lg:sushi-flex lg:sushi-items-center lg:sushi-justify-between">
        <div className="sushi-flex-1 sushi-min-w-0">
          <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sushi-">
            {title}
          </h2>
          <Toggle showWallets={showWallets} />
        </div>
      </div>
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
                      onClick={() => {
                        if (header.id !== null) {
                          let newDirection;
                          if (header.id === sort && sortDirection === "desc") {
                            newDirection = "asc";
                          } else if (
                            header.id === sort &&
                            sortDirection === "asc"
                          ) {
                            newDirection = "desc";
                          } else if (header.id !== sort) {
                            newDirection = "desc";
                          }
                          setSort(header.id);
                          setSortDirection(newDirection);
                        }
                      }}
                    >
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>{header.name}</span>
                        {sort === header.id && sortDirection === "desc" ? (
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="sushi-self-start sushi-flex-shrink-0 sushi-w-5 sushi-h-5 sushi-ml-1 sushi--mb-1"
                          >
                            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path>
                          </svg>
                        ) : sort === header.id && sortDirection === "asc" ? (
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="sushi-self-start sushi-flex-shrink-0 sushi-w-5 sushi-h-5 sushi-ml-1 sushi--mb-1 sushi-transform sushi-rotate-180"
                          >
                            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path>
                          </svg>
                        ) : null}
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
              {pools && pools.length > 0
                ? pools.map((pool) => {
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
                                  to={"/pair/" + pool.uniswapPair.id}
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
                                Sushiswap {pool.uniswapPair.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          {formatNumber(pool.balance, 3)}
                          <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">
                            {pool.sushiswapId}
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-text-xs">
                            <div className="sushi-flex sushi-items-center">
                              <img
                                src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                                  pool.uniswapPair.token0.id
                                )}/logo.png`}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = logoNotFound;
                                }}
                                alt={pool.uniswapPair.token0.symbol + " Logo"}
                                className="sushi-mr-2"
                                style={{
                                  width: "1.125rem",
                                  height: "1.125rem",
                                }}
                              />
                              {formatNumber(
                                (pool.balance / pool.uniswapPair.totalSupply) *
                                  pool.uniswapPair.reserve0,
                                2
                              )}{" "}
                              {pool.uniswapPair.token0.symbol}
                            </div>
                            <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                              <img
                                src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${isAddress(
                                  pool.uniswapPair.token1.id
                                )}/logo.png`}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = logoNotFound;
                                }}
                                alt={pool.uniswapPair.token1.symbol + " Logo"}
                                className="sushi-mr-2"
                                style={{
                                  width: "1.125rem",
                                  height: "1.125rem",
                                }}
                              />
                              {formatNumber(
                                (pool.balance / pool.uniswapPair.totalSupply) *
                                  pool.uniswapPair.reserve1,
                                2
                              )}{" "}
                              {pool.uniswapPair.token1.symbol}
                            </div>
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-flex sushi-items-center">
                            <div>
                              <div className="sushi-flex sushi-items-center sushi-text-sm sushi-leading-5 sushi-text-gray-900">
                                ${formatNumber(pool.balanceUSD, 0)}
                                {"  "}
                                {pool.history.dayAgo ? (
                                  pool.history.dayAgo &&
                                  pool.balanceUSD >
                                    pool.history.dayAgo.balanceUSD ? (
                                    <div class="sushi-text-xs sushi-text-green-500">
                                      (+
                                      {formatNumber(
                                        (pool.balanceUSD /
                                          pool.history.dayAgo.balanceUSD -
                                          1) *
                                          100,
                                        1
                                      )}
                                      %)
                                    </div>
                                  ) : (
                                    <div class="sushi-text-xs sushi-text-red-500">
                                      (
                                      {formatNumber(
                                        (pool.balanceUSD /
                                          pool.history.dayAgo.balanceUSD -
                                          1) *
                                          100,
                                        1
                                      )}
                                      %)
                                    </div>
                                  )
                                ) : null}
                              </div>
                              {/* <div className="sushi-text-xs sushi-leading-5 sushi-text-gray-500">
                                {formatNumber(
                                  (pool.balanceUSD / total) * 100,
                                  1
                                )}
                                % of active pools
                              </div> */}
                            </div>
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-inline-flex sushi-flex-col">
                            <div className="sushi-flex sushi-items-center">
                              <div
                                className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                                style={{ border: "solid 1px #ee6d48" }}
                              >
                                🍣
                              </div>
                              <div>
                                <div>
                                  {formatNumber(
                                    (1e3 /
                                      ((pool.balance /
                                        pool.uniswapPair.totalSupply) *
                                        pool.uniswapPair.reserveUSD)) *
                                      ((3600 / 13.115837104072398) *
                                        pool.rewards.rewardPerBlock) *
                                      24,
                                    3
                                  )}
                                </div>
                                <div className="sushi-text-xs sushi-text-gray-500">
                                  SUSHI/day
                                </div>
                              </div>
                            </div>
                            {pool.rewards.multiplier &&
                            pool.rewards.multiplier > 1 ? (
                              <div
                                className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-text-green-800 sushi-bg-green-100 sushi-has-tooltip"
                                data-original-title="null"
                              >
                                <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                                  {formatNumber(pool.rewards.multiplier, 2)}x
                                  Reward
                                  <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            ) : pool.rewards.multiplier &&
                              pool.rewards.multiplier !== 1 ? (
                              <div
                                className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-full sushi-select-none sushi-has-tooltip"
                                data-original-title="null"
                              >
                                <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">
                                  {formatNumber(pool.rewards.multiplier, 2)}x
                                  Reward
                                  <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="sushi-w-4 sushi-h-4 sushi-ml-0.5 sushi--mr-1 sushi-question-mark-circle"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </td>
                        <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
                          <div className="sushi-flex sushi-items-center">
                            <span>
                              {formatNumber(
                                pool.rewards.hourlyROI * 24 * 100,
                                2
                              )}
                              %
                            </span>
                            <span className="sushi-pl-1 sushi-text-xs sushi-leading-3">
                              daily
                            </span>
                          </div>
                          <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                            <span>
                              {formatNumber(
                                pool.rewards.hourlyROI * 24 * 30 * 100,
                                2
                              )}
                              %
                            </span>
                            <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                              monthly
                            </span>
                          </div>
                          <div className="sushi-flex sushi-items-center sushi-text-xs sushi-text-gray-500">
                            <span>
                              {formatNumber(
                                pool.rewards.hourlyROI * 24 * 365 * 100,
                                2
                              )}
                              %
                            </span>
                            <span className="sushi-pl-1 sushi-text-xs sushi-leading-3 sushi-text-gray-500">
                              yearly
                            </span>
                          </div>
                        </td>
                        {account ? (
                          <StakeWrapper
                            key={pool.sushiswapId}
                            farmId={pool.sushiswapId}
                            pool={pool}
                          />
                        ) : null}
                        {/* {account ? (
                          <>
                            <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-orange-50">
                              <div className="sushi-text-xs">
                                <div className="sushi-flex sushi-items-center">
                                  <img
                                    src={
                                      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
                                      pool.token0 +
                                      "/logo.png"
                                    }
                                    className="sushi-mr-2"
                                    style={{
                                      width: "1.125rem",
                                      height: "1.125rem",
                                    }}
                                  />
                                  {decimal(
                                    pool.userStakedToken0,
                                    pool.token0decimals,
                                    2
                                  )}{" "}
                                  {pool.token0symbol}
                                </div>{" "}
                                <div className="sushi-flex sushi-items-center sushi-mt-1.5">
                                  <img
                                    src={
                                      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
                                      pool.token1 +
                                      "/logo.png"
                                    }
                                    className="sushi-mr-2"
                                    style={{
                                      width: "1.125rem",
                                      height: "1.125rem",
                                    }}
                                  />
                                  {decimal(
                                    pool.userStakedToken1,
                                    pool.token1decimals,
                                    2
                                  )}{" "}
                                  {pool.token1symbol}
                                </div>
                              </div>
                            </td>
                            <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-orange-50">
                              {pool.pending ? (
                                <div className="sushi-inline-flex sushi-flex-col">
                                  <div className="sushi-flex sushi-items-center">
                                    <div>
                                      {Number(pool.pending) > 0 ? (
                                        <>
                                          <div>
                                            {decimal(pool.pending, 18, 2)}
                                          </div>
                                          <div className="sushi-text-xs sushi-text-gray-500">
                                            SUSHI
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          <div>--</div>
                                          <div className="sushi-text-xs sushi-text-gray-500">
                                            SUSHI
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </td>
                            <td className="sushi-px-6 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-orange-50">
                              {pool.pending && Number(pool.pending) > 0 ? (
                                <button
                                  className="sushi-mr-4 sushi-w-16 sushi-h-20 sushi-text-3xl sushi-rounded-md sushi-shadow-md"
                                  style={{
                                    border: "1px solid rgb(238, 109, 72)",
                                    backgroundColor: "#feeddc",
                                  }}
                                >
                                  🎑
                                  <br />
                                  <p className="sushi-text-sm">Harvest</p>
                                </button>
                              ) : (
                                <button
                                  className="sushi-mr-4 sushi-w-16 sushi-h-20 sushi-text-xs sushi-rounded-md sushi-shadow-md"
                                  style={{
                                    border: "1px solid #fcd9be",
                                  }}
                                >
                                  $1.97
                                  <br />
                                  <p className="sushi-text-sm">Enable</p>
                                </button>
                              )}
                            </td>
                          </>
                        ) : null} */}
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pools;
