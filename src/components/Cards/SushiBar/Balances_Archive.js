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
import formatNumber from "./utils";

const Layout = () => {
  const { account } = useWallet();
  return <>{account ? <Balances /> : <Loading />}</>;
};

const Loading = () => {
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
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Total SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Locked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Unlocked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Unstaked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Staked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">xSUSHI Balance</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

const Balances = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { account, ethereum } = useWallet();
  const { tokenAddress } = {
    tokenAddress: contractAddresses.xSushi[1],
  };
  const [totalSupply, setTotalSupply] = useState();
  const [totalStaked, setTotalStaked] = useState();
  const sushi = useSushi();
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
    if (account) {
      return getContract(ethereum, tokenAddress);
    }
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
  return (
    <>
      <div className="bg-white border border-gray-200 shadow overflow-hidden sm:rounded-lg">
        {/* Title */}
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
            <div className="ml-4 mt-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">SUSHI Balance</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">View historical earnings</p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$100</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">9887 SUSHI</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="px-4 py-5 sm:p-0">
          <dl>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1">
                <span class="flex-shrink-0">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Harvest
                  </button>
                </span>
              </dd>
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Harvestable</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1">
                <span class="flex-grow">
                  <div className="text-right">
                    {totalNotStaked ? `${Number(getBalanceNumber(totalNotStaked)).toFixed(4)}` : ""}
                  </div>
                  <div className="text-right">$100</div>
                </span>
              </dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Locked</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <span class="flex-grow">
                  {totalNotStaked ? `${Number(getBalanceNumber(totalNotStaked)).toFixed(4)}` : ""}
                </span>
                <span class="flex-shrink-0">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Learn more
                  </button>
                </span>
              </dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Unstaked</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <span class="flex-grow">
                  {totalNotStaked ? `${Number(getBalanceNumber(totalNotStaked)).toFixed(4)}` : ""}
                </span>
                <span class="flex-shrink-0">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Stake
                  </button>
                </span>
              </dd>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Staked</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <span class="flex-grow">{sushiStaked ? `${Number(sushiStaked).toFixed(4)}` : ""}</span>
                <span class="flex-shrink-0">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Unstake
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-white px-4 py-5 border-b border-t border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
            <div className="ml-4 mt-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">xSUSHI Balance</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">Est. 15% APR</p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$100</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                {" "}
                {xSushiBalance ? `${Number(getBalanceNumber(xSushiBalance)).toFixed(4)}` : ""} xSUSHI
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-0">
          <dl>
            {/* <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">xSUSHI Balance</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">
                {xSushiBalance ? `${getBalanceNumber(xSushiBalance)}` : ""}
              </dd>
            </div> */}
            {/* <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Total Gain</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
            </div> */}
            {/* <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">TWA balance staked</dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
          </div> */}
            {/* <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Your APR</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
            </div> */}
          </dl>
        </div>
      </div>
    </>
  );
};

export default Layout;

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
// SUSHI Price
import { useTokenData } from "../../../services/vision/contexts/TokenData";
import { formattedNum } from "../../../services/vision/utils";
// Pending SUSHI rewards
import CountUp from "react-countup";
import useAllEarnings from "../../../services/frontend/hooks/useAllEarnings";
import useAllStakedValue from "../../../services/frontend/hooks/useAllStakedValue";
import useFarms from "../../../services/frontend/hooks/useFarms";

const Layout = () => {
  const { account } = useWallet();
  return <>{account ? <Balances /> : <Loading />}</>;
};

const Loading = () => {
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
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Total SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Locked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Unlocked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Unstaked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Staked SUSHI</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">xSUSHI Balance</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900"></dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

const Balances = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { account, ethereum } = useWallet();
  const { tokenAddress } = {
    tokenAddress: contractAddresses.xSushi[1],
  };
  const sushi = useSushi();

  // Get Sushi Price in USD
  const { priceUSD } = useTokenData("0x6b3595068778dd592e39a122f4f5a5cf09c90fe2");
  const price = priceUSD ? formattedNum(priceUSD, true) : "";

  // Get Pending Sushi
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [scale, setScale] = useState(1);
  const allEarnings = useAllEarnings();
  let sumEarning = 0;
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber();
  }
  const [farms] = useFarms();
  const allStakedValue = useAllStakedValue();
  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce((c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0), 0);
  }
  useEffect(() => {
    setStart(end);
    setEnd(sumEarning);
  }, [sumEarning]);

  // Get totalSupply of xSushi
  const [totalSupply, setTotalSupply] = useState();
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
  const [totalStaked, setTotalStaked] = useState();
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
    if (account) {
      return getContract(ethereum, tokenAddress);
    }
  }, [ethereum, tokenAddress]);
  const xSushiBalance = useTokenBalance(lpContract.options.address);
  // Get users # of Sushi not staked
  const totalNotStaked = useTokenBalance(contractAddresses.sushi[1]);
  // Calculate users poolShare and sushiStaked
  const poolShare = new BigNumber(xSushiBalance).div(new BigNumber(totalSupply));
  const poolStaked = new BigNumber(poolShare).times(new BigNumber(totalStaked));
  const sushiStaked = new BigNumber(poolStaked).div(new BigNumber(1000000000000000000));
  // (poolShare * totalStaked.toNumber()) / new BigNumber(1000000000000000000);
  // Total SUSHI Balance
  const totalSushiBalance = Number(getBalanceNumber(totalNotStaked)) + Number(sushiStaked) + Number(end);
  const totalSushiBalanceUSD = priceUSD ? formattedNum(totalSushiBalance * priceUSD, true) : "";
  // USD formatting
  const totalNotStakedUSD = priceUSD ? formattedNum(getBalanceNumber(totalNotStaked) * priceUSD, true) : "";
  const sushiStakedUSD = priceUSD ? formattedNum(sushiStaked * priceUSD, true) : "";
  return (
    <>
      <div className="bg-white border border-gray-200 shadow overflow-hidden sm:rounded-lg">
        {/* Title */}
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
            <div className="ml-4 mt-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">SUSHI Balance</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">1 SUSHI = {price}</p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <h3 className="text-lg text-right leading-6 font-medium text-gray-900">{`${Number(
                totalSushiBalance
              ).toFixed(4)}`}</h3>
              <p className="mt-1 text-sm text-left leading-5 text-gray-500">{totalSushiBalanceUSD}</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="px-4 py-5 sm:p-0">
          <dl>
            <div className="border-b border-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Harvestable</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <span class="flex-grow">
                  <div>
                    <CountUp
                      start={start}
                      end={end}
                      decimals={end < 0 ? 4 : end > 1e5 ? 0 : 4}
                      duration={1}
                      separator=","
                    />{" "}
                    SUSHI
                  </div>
                  $
                  <CountUp
                    start={start * priceUSD}
                    end={end * priceUSD}
                    decimals={end < 0 ? 2 : end > 1e5 ? 0 : 2}
                    duration={1}
                    separator=","
                  />{" "}
                </span>
                <span class="flex-shrink-0">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Harvest
                  </button>
                </span>
              </dd>
            </div>
            <div className="border-b border-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Locked</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1">
                <span class="flex-grow">{totalNotStaked ? `0.0000 SUSHI` : ""}</span>
              </dd>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1">
                <span class="flex-grow">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Learn more
                  </button>
                </span>
              </dd>
            </div>
            <div className="border-b border-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Unstaked</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <span class="flex-grow">
                  <div>{totalNotStaked ? `${Number(getBalanceNumber(totalNotStaked)).toFixed(4)} SUSHI` : ""}</div>
                  <div className="text-right text-gray-500">{totalNotStakedUSD}</div>
                </span>
                <span class="flex-shrink-0">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Stake
                  </button>
                </span>
              </dd>
            </div>
            <div className="border-b border-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Staked</dt>
              <dd class="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <span class="flex-grow">
                  <div className="text-right">{sushiStaked ? `${Number(sushiStaked).toFixed(4)} SUSHI` : ""}</div>
                  <div className="text-right">
                    {xSushiBalance ? `${Number(getBalanceNumber(xSushiBalance)).toFixed(4)} xSUSHI` : ""}
                  </div>
                  <div className="text-right text-gray-500">{sushiStakedUSD}</div>
                </span>
                <span class="flex-shrink-0">
                  <button
                    type="button"
                    class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                  >
                    Unstake
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </div>
        {/* <div className="bg-white px-4 py-5 border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
            <div className="ml-4 mt-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">xSUSHI Balance</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">Est. 15% APR</p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$100</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">
                {" "}
                {xSushiBalance ? `${Number(getBalanceNumber(xSushiBalance)).toFixed(4)}` : ""} xSUSHI
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="px-4 py-5 sm:p-0">
          <dl>
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
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
            <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">TWA balance staked</dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
          </div>
            <div className="mt-8 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5">
              <dt className="text-sm leading-5 font-medium text-gray-500 sm:mt-0 sm:col-span-1">Your APR</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
            </div>
          </dl>
        </div> */}
      </div>
    </>
  );
};

export default Layout;
