import React, { useState, useEffect, useMemo, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useWallet } from "use-wallet";
import BigNumber from "bignumber.js";
import Web3 from "web3";
import ERC20ABI from "../../services/frontend/constants/abi/ERC20.json";
import { Sushi } from "../../services/frontend/sushi";
import { getMasterChefContract } from "../../services/frontend/sushi/utils";
import { getBalanceNumber } from "../../services/frontend/utils/formatBalance";

import _ from "lodash";
import Toggle from "../Buttons/ExpandWidget";
import Loading from "./Loading";
import Error from "./Error";
import useSortableData from "../../shared/hooks/useSortableData";
import SushiChef from "../../assets/img/sushi-chef_bg-fill-light.jpg";
import "../../assets/css/shine.css";

import { getPoolData } from "./PoolsWeeklyApolloQuery";

import WalletsModal from "../Modals/Wallets";
import useModal from "../../shared/hooks/useModal";
import ExpandButton from "../Buttons/ExpandButton";
import useFuse from "../../shared/hooks/useFuse";
import Transition from "../Transition";
import useOutsideClick from "../../shared/hooks/useOutsideClick";
import ToggleWallet from "../Toggles/WalletStandalone";

import { formatNumber, sum } from "./Columns/utils";
import Header from "./Header";
import ColumnName from "./Columns/Name";
import ColumnRewardsPer1000 from "./Columns/RewardsPer1000";
import ColumnROI from "./Columns/ROI";
import ColumnUnderlyingTokens from "./Columns/UnderlyingTokens";
import ColumnBalance from "./Columns/Balance";
import ColumnEarnings from "./Columns/Earnings";
import ColumnActions from "./Columns/Actions";

import "../../assets/css/freeze-panes.css";
// type options: "active", "main", "current", "previous"
const Layout = ({ title, type }) => {
  const [highestAPY, setAPY] = useState();
  return (
    <>
      <Title highestAPY={highestAPY} title={title} />
      <PoolsQuery setAPY={setAPY} type={type} />
    </>
  );
};

const Title = ({ highestAPY, title }) => {
  return (
    <>
      <div className="sushi-px-4 lg:sushi-flex lg:sushi-items-center lg:sushi-justify-between">
        <div className="sushi-flex-1 sushi-min-w-0">
          <h2 className="sushi-max-w-6xl sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sushi-">
            {title ? title : "Current Menu"}
            {highestAPY ? (
              <>
                <span class="sushi-ml-3 sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-0.5 sushi-rounded-md sushi-text-sm sushi-font-medium sushi-leading-5 sushi-bg-orange-100 sushi-text-orange-800">
                  Up to {formatNumber(highestAPY, 0)}% APR
                </span>
                <span> ✨</span>
              </>
            ) : null}
          </h2>
          {/* <Toggle widgetPath={"/widgets/weekly/current"} dashboardPath={"/weekly"} /> */}
        </div>
      </div>
    </>
  );
};

const initialColumns = [
  {
    name: "Pool",
    account: false,
    sortId: "uniswapPair.name",
    selected: true,
    component: <ColumnName />,
  },
  {
    name: "Yield per $1,000",
    account: false,
    sortId: "rewards.hourlyROI",
    selected: true,
    component: <ColumnRewardsPer1000 />,
  },
  {
    name: "ROI",
    account: false,
    sortId: "rewards.hourlyROI",
    selected: true,
    component: <ColumnROI />,
  },
  {
    name: "Underlying Tokens",
    account: false,
    sortId: "balanceUSD",
    selected: true,
    component: <ColumnUnderlyingTokens />,
  },
  {
    name: "Balance",
    account: true,
    sortId: "tokenBalance",
    selected: true,
    component: <ColumnBalance />,
  },
  {
    name: "Earnings",
    account: true,
    sortId: "earnings",
    selected: true,
    component: <ColumnEarnings />,
  },
];

const PoolsQuery = ({ setAPY, type }) => {
  const [columns, setColumns] = useState(initialColumns);
  const [pools, setPools] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Fetch Data
  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        let data = await getPoolData(type ? type : "active");
        setPools(data.pools);
        setAPY(data.highestAPY);
        console.log("APY:", data.highestAPY);
      } catch (e) {
        console.log("apollo error:", e);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);
  //console.log("APOLLO POOLS:", pools);

  // For Table Search
  const options = {
    keys: ["sushiswapId", "name", "id"],
  };
  const { result, search, term, reset } = useFuse({
    data: pools ? pools : [],
    options,
  });
  const flatResult = result.map((a) => (a.item ? a.item : a));
  //console.log("SEARCH RESULTS:", flatResult);

  return (
    <>
      {isError && (
        <>
          <TableFilter search={search} term={term} columns={columns} setColumns={setColumns} />
          <TableAccount>
            <Loading />
          </TableAccount>
        </>
      )}
      {isLoading ? (
        <>
          <TableFilter search={search} term={term} columns={columns} setColumns={setColumns} />
          <TableAccount>
            <Loading />
          </TableAccount>
        </>
      ) : (
        <>
          <TableFilter search={search} term={term} columns={columns} setColumns={setColumns} />
          <TableAccount>
            <TablePools title={"Active Pools on Sushiswap"} pools={flatResult} columns={columns} />
          </TableAccount>
        </>
      )}
    </>
  );
};

const TableAccount = ({ children }) => {
  const { account } = useWallet();
  return (
    <>
      {!account ? (
        <div className="md:sushi-flex">
          <div className="sushi-relative sushi-w-full sushi-mx-auto">
            <div className="sushi-grid sushi-gap-4 sushi-mx-auto sushi-grid-cols-1 md:sushi-grid-cols-3 lg:sushi-grid-cols-3 lg:sushi-max-w-none">
              <div className="sushi-col-span-1 md:sushi-col-span-2">{children}</div>
              <div className="">
                <UnlockWallet />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

const UnlockWallet = () => {
  const [onPresentWallets] = useModal(<WalletsModal />);
  return (
    <div
      className="relative sushi-h-full sushi-inline-block sushi-min-w-full sushi-align-middle sushi-border-b sushi-border-gray-200 sushi-shadow sm:sushi-rounded-lg"
      style={{ backgroundColor: "#ffeddb", overflowX: "hidden" }}
    >
      <div
        className="sushi-bg-cover sushi-bg-center"
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
                onClick={onPresentWallets}
                className="sushi-w-full sushi-flex sushi-items-center sushi-justify-center sushi-px-5 sushi-py-3 sushi-border sushi-border-transparent sushi-text-base sushi-leading-6 sushi-font-medium sushi-rounded-md sushi-text-white sushi-bg-orange-600 hover:sushi-bg-orange-700 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-duration-150 sushi-ease-in-out"
              >
                Connect wallet to begin
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sushi-shine" />
    </div>
  );
};

const TableFilter = ({ search, term, columns, setColumns }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpen(false);
  });
  const [onPresentWallets] = useModal(<WalletsModal />);
  return (
    <>
      <div className="border-t border-gray-200 mt-4 px-4 pt-4 pb-3">
        <div>
          <div className="flex rounded-md shadow-sm">
            <button className="relative flex items-center px-3 py-1.5 rounded-md border border-gray-300 text-sm leading-5 bg-white text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150">
              <ToggleWallet />
              <span className="hidden sm:block ml-2">Connect</span>
            </button>
            <Search search={search} term={term} />
            <div className="relative inline-block text-left">
              <div>
                <span className="rounded-md shadow-sm">
                  <button
                    onClick={() => setOpen(true)}
                    className="-ml-px relative flex items-center px-3 py-2 rounded-r-md border border-gray-300 text-sm leading-5 bg-white text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="hidden sm:block ml-2">Filter</span>
                  </button>
                </span>
              </div>
              <div ref={ref}>
                <FilterDropdown isOpen={isOpen} columns={columns} setColumns={setColumns} />
              </div>
            </div>
            {/* <button
              onClick={onPresentWallets}
              className="ml-2 relative flex items-center px-3 py-2 rounded-md border border-gray-300 text-sm leading-5 bg-white text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="hidden sm:block ml-2">Harvest</span>
            </button>
            <button
              onClick={onPresentWallets}
              className="ml-2 relative flex items-center px-3 py-2 rounded-md border border-gray-300 text-sm leading-5 bg-white text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="hidden sm:block ml-2">Migrate</span>
            </button> */}
            <button
              onClick={onPresentWallets}
              className="ml-2 relative flex items-center px-3 py-2 rounded-md border border-gray-300 text-sm leading-5 bg-white text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              <ExpandButton widgetPath={"/widgets/weekly/current"} dashboardPath={"/weekly"} />
              <span className="hidden sm:block ml-2">Expand</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Search = ({ search, term }) => {
  return (
    <>
      <div className="ml-2 relative flex-grow focus-within:z-10">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          className="appearance-none rounded-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md text-gray-900 placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
          placeholder="Filter pairs"
          value={term}
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
    </>
  );
};

const FilterDropdown = ({ isOpen, columns, setColumns }) => {
  const { account } = useWallet();

  const handleCheckboxChange = (name) => (e) => {
    let newColumns = [...columns];
    newColumns = newColumns.map((column) =>
      column.name === name ? { ...column, selected: e.target.checked } : column
    );
    setColumns(newColumns);
  };
  return (
    <>
      <Transition
        show={isOpen}
        enter="ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div
            className="rounded-md bg-white shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1">
              {columns.map((column) => {
                if (column.account === false) {
                  return (
                    <div className="block px-4 py-2">
                      <label className="inline-flex items-center">
                        <input
                          defaultChecked={column.selected}
                          onChange={handleCheckboxChange(column.name)}
                          type="checkbox"
                          className="form-checkbox h-4 w-4 border-gray-300 text-orange-600 focus:shadow-outline-orange focus:border-orange-300 transition duration-150 ease-in-out"
                        />
                        <span className="ml-2">{column.name}</span>
                      </label>
                    </div>
                  );
                }
                if (account && column.account) {
                  return (
                    <div className="block px-4 py-2">
                      <label className="inline-flex items-center">
                        <input
                          defaultChecked={column.selected}
                          onChange={handleCheckboxChange(column.name)}
                          type="checkbox"
                          className="form-checkbox h-4 w-4 border-gray-300 text-orange-600 focus:shadow-outline-orange focus:border-orange-300 transition duration-150 ease-in-out"
                        />
                        <span className="ml-2">{column.name}</span>
                      </label>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

// const useMergedStats = (poolStats) => {
//   const { account } = useWallet();
//   const [mergedStats, setMergedStats] = useState(poolStats);

//   useEffect(() => {
//     let accountStats = [];
//     if (account && poolStats && poolStats.length > 0) {
//       poolStats.map((pool) => {
//         // Account
//         const { pid, lpTokenAddress } = useFarm(pool.sushiswapId);
//         const { ethereum } = useWallet();
//         const lpContract = getContract(ethereum, lpTokenAddress);
//         // Balances
//         const tokenBalance = useTokenBalance(lpContract.options.address);
//         const stakedBalance = useStakedBalance(pid);
//         // Earnings
//         const earnings = useEarnings(pid);
//         //
//         return {
//           sushiswapId: pool.sushiswapId,
//           tokenBalance: Number(getBalanceNumber(tokenBalance)),
//           stakedBalance: Number(getBalanceNumber(stakedBalance)),
//           earnings: Number(getBalanceNumber(earnings)),
//         };
//       });
//     }
//     const merged = _.unionBy(poolStats, accountStats, "sushiswapId");
//     console.log("MERGED STATS:", merged);
//     setMergedStats(merged);
//   }, [poolStats]);

//   return mergedStats;
// };

const TablePools = ({ title, pools, columns }) => {
  // For regular pool display
  const { account, ethereum } = useWallet();

  // use to update account stats on every block
  // const [block, setBlock] = useState(0);
  // useEffect(() => {
  //   if (ethereum) {
  //     const web3 = new Web3(ethereum);
  //     const interval = setInterval(async () => {
  //       const latestBlockNumber = await web3.eth.getBlockNumber();
  //       if (block !== latestBlockNumber) {
  //         setBlock(latestBlockNumber);
  //       }
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [ethereum]);

  const [mergedStats, setMergedStats] = useState();
  useEffect(() => {
    if (pools && account) {
      const getAccountStat = async (pool, web3, account, masterChefContract) => {
        const lpContract = new web3.eth.Contract(ERC20ABI.abi, pool.id);
        const tokenBalance = getBalanceNumber(new BigNumber(await lpContract.methods.balanceOf(account).call()));
        const stakedBalance = getBalanceNumber(
          new BigNumber((await masterChefContract.methods.userInfo(pool.pid, account).call())["amount"])
        );
        const earnings = getBalanceNumber(
          new BigNumber(await masterChefContract.methods.pendingSushi(pool.pid, account).call())
        );
        const stats = {
          sushiswapId: pool.sushiswapId,
          tokenBalance: tokenBalance,
          stakedBalance: stakedBalance,
          earnings: earnings,
        };
        return stats;
      };

      const fetchAccountStats = async () => {
        const web3 = new Web3(ethereum);
        const chainId = Number(ethereum.chainId);
        const sushi = new Sushi(ethereum, chainId, false, {
          defaultAccount: ethereum.selectedAddress,
          defaultConfirmations: 1,
          autoGasMultiplier: 1.5,
          testing: false,
          defaultGas: "6000000",
          defaultGasPrice: "1000000000000",
          accounts: [],
          ethereumNodeTimeout: 10000,
        });
        const masterChefContract = getMasterChefContract(sushi);
        // Run in parallel
        const promises = pools.map((pool) => getAccountStat(pool, web3, account, masterChefContract));
        const accountStats = await Promise.all(promises);

        // Run in sequence
        // let accountStats = [];
        // for (const pool of pools) {
        //   const stat = await getAccountStat(pool, web3, account, masterChefContract);
        //   accountStats.push(stat);
        // }
        // console.log("ACCOUNT STATS:", accountStats);
        const merged = _.merge(pools, accountStats);
        //console.log("MERGED STATS:", merged);
        setMergedStats(merged);
      };
      fetchAccountStats();
    }
  }, [pools]);

  // Table Sorting
  console.log("MERGED STATS:", mergedStats);
  const { items, requestSort, sortConfig } = useSortableData(mergedStats ? mergedStats : pools);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  console.log("ITEMS:", items);

  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div className="sushi-inline-block sushi-min-w-full sushi-align-middle sushi-shadow sm:sushi-rounded-lg">
          <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
            <thead>
              <tr>
                {columns.map((header, index) => {
                  // If no wallet connected and column does not depend on wallet
                  if (header.account === false && header.selected === true) {
                    return (
                      <Header
                        header={header}
                        index={index}
                        requestSort={requestSort}
                        getClassNamesFor={getClassNamesFor}
                      />
                    );
                  }
                  if (account && header.account && header.selected === true) {
                    return (
                      <Header
                        header={header}
                        index={index}
                        requestSort={requestSort}
                        getClassNamesFor={getClassNamesFor}
                      />
                    );
                  }
                })}
              </tr>
            </thead>
            <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
              {pools && items && items.length > 0
                ? items.map((pool) => {
                    return (
                      <tr>
                        {/* <ColumnName pool={pool} />
                        <ColumnRewardsPer1000 pool={pool} />
                        <ColumnROI pool={pool} />
                        <ColumnUnderlyingTokens pool={pool} />
                        {account ? (
                          <>
                            <ColumnBalance pool={pool} />
                            <ColumnEarnings pool={pool} />
                            <ColumnActions farmId={pool.sushiswapId} pool={pool} />
                          </>
                        ) : null} */}
                        {columns.map((column) => {
                          if (column.account === false && column.selected === true) {
                            return React.cloneElement(column.component, { pool });
                          }
                          if (account && column.account && column.selected === true) {
                            return React.cloneElement(column.component, { pool });
                          }
                        })}
                        {account ? (
                          <>
                            <ColumnActions farmId={pool.sushiswapId} pool={pool} />
                          </>
                        ) : null}
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
      {!items || (items && items.length === 0) ? <NoResults /> : null}
    </>
  );
};

const NoResults = () => {
  return (
    <>
      <section className="min-h-full py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-8">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>No results. すごく ごめんね!</p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  {/* <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src=""
                      alt=""
                    />
                  </div> */}
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <Link to="/pairs" className="text-base leading-6 font-medium text-gray-900">
                      View all pairs
                    </Link>
                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-orange-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>
                    <a
                      href="https://forum.sushiswapclassic.org"
                      target="_blank"
                      className="text-base leading-6 font-medium text-gray-500"
                    >
                      Vote for a menu
                    </a>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
