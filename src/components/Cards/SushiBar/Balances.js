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

import SushiLogo from "../../../assets/img/logo.png";

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
  const totalSushiBalance = Number(
    Number(getBalanceNumber(totalNotStaked)) + Number(sushiStaked) + Number(end)
  ).toFixed(4);
  const totalSushiBalanceUSD = priceUSD ? formattedNum(totalSushiBalance * priceUSD, true) : "";
  // USD formatting
  const totalNotStakedUSD = priceUSD ? formattedNum(getBalanceNumber(totalNotStaked) * priceUSD, true) : "";
  const sushiStakedUSD = priceUSD ? formattedNum(sushiStaked * priceUSD, true) : "";

  const balances = [
    {
      title: "Harvestable",
      sushi: (
        <div className="text-right">
          <CountUp start={start} end={end} decimals={end < 0 ? 4 : end > 1e5 ? 0 : 4} duration={1} separator="," />{" "}
          SUSHI
        </div>
      ),
      usd: (
        <div className="text-right text-gray-500">
          $
          <CountUp
            start={start * priceUSD}
            end={end * priceUSD}
            decimals={end < 0 ? 2 : end > 1e5 ? 0 : 2}
            duration={1}
            separator=","
          />
        </div>
      ),
      cta: (
        <button
          type="button"
          class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
        >
          Harvest
        </button>
      ),
    },
    {
      title: "Locked",
      sushi: totalNotStaked ? `${Number(getBalanceNumber(totalNotStaked)).toFixed(4)} SUSHI` : "",
      usd: totalNotStakedUSD,
      cta: (
        <button
          type="button"
          class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
        >
          Learn more
        </button>
      ),
    },
    {
      title: "Unstaked",
      sushi: totalNotStaked ? `${Number(getBalanceNumber(totalNotStaked)).toFixed(4)} SUSHI` : "",
      usd: totalNotStakedUSD,
      cta: (
        <button
          type="button"
          class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
        >
          Stake
        </button>
      ),
    },
    {
      title: "Staked",
      sushi: sushiStaked ? `${Number(sushiStaked).toFixed(4)} SUSHI` : "",
      xsushi: xSushiBalance ? `${Number(getBalanceNumber(xSushiBalance)).toFixed(4)} xSUSHI` : "",
      usd: sushiStakedUSD,
      cta: (
        <button
          type="button"
          class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
        >
          Unstake
        </button>
      ),
    },
  ];
  return (
    <>
      <Table
        balances={balances}
        price={price}
        totalSushiBalance={totalSushiBalance}
        totalSushiBalanceUSD={totalSushiBalanceUSD}
      />
    </>
  );
};

const Table = ({ balances, price, totalSushiBalance, totalSushiBalanceUSD }) => {
  return (
    <>
      <div className="flex overflow-hidden bg-white">
        {/* Main column */}
        {/* Title */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
              <div className="ml-4 mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">SUSHI balance</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">1 SUSHI = {price}</p>
              </div>
              <div className="ml-4 mt-4 flex-shrink-0">
                <h3 className="text-lg text-right leading-6 font-medium text-gray-900">{totalSushiBalanceUSD}</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">{totalSushiBalance} SUSHI</p>
              </div>
            </div>
          </div>
          {/* Main content */}
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
            {/* Pinned projects can go here */}
            {/* Projects table (small breakpoint and up) */}
            <div className="block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <table className="min-w-full">
                  {/* <TableHead /> */}
                  <tbody className="bg-white divide-y divide-gray-100">
                    {/* More project rows... */}
                    {balances &&
                      balances.map((balance) => {
                        return <TableRow balance={balance} />;
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

const TableHead = () => {
  return (
    <>
      <thead>
        <tr className="border-t border-gray-200">
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <span className="lg:pl-2">Name</span>
          </th>
          <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Liquidity
          </th>
          <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Total Fees Earned
          </th>
          <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" />
          <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" />
        </tr>
      </thead>
    </>
  );
};

const TableRow = ({ balance }) => {
  return (
    <>
      <tr>
        <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
          <div className="flex items-center space-x-2">
            <div className="flex flex-shrink-0 -space-x-1">
              <img className="max-w-none h-6 w-6 rounded-full text-white shadow-solid" src={SushiLogo} alt="SUSHI" />
            </div>
            <div className="flex items-center space-x-3 lg:pl-2">
              {/* <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" /> */}
              <a href="#" className="truncate hover:text-gray-600">
                <span>
                  {balance.title}
                  {/* <span className="text-gray-500 font-normal">{balance.description}</span> */}
                </span>
              </a>
            </div>
          </div>
        </td>
        <td className="hidden md:table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-900 text-right">
          <div>{balance.sushi}</div>
          {balance.xsushi ? <div>({balance.xsushi})</div> : null}
        </td>
        <td className="hidden md:table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
          {balance.usd}
        </td>
        <td className="pr-6">
          <div className="relative flex justify-end items-center">{balance.cta}</div>
        </td>
      </tr>
    </>
  );
};

export default Layout;
