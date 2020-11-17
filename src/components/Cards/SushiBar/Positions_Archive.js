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

//import AccountPage from "../../../services/vision/pages/AccountPage";
import { useUserTransactions, useUserPositions } from "../../../services/vision/contexts/User";
import { client } from "../../../services/vision/apollo/client";
import {
  USER_TRANSACTIONS,
  USER_POSITIONS,
  USER_HISTORY,
  PAIR_DAY_DATA_BULK,
} from "../../../services/vision/apollo/queries";
import { getLPReturnsOnPair } from "../../../services/vision/utils/returns";
import { useEthPrice } from "../../../services/vision/contexts/GlobalData";

import PositionList from "../../../services/vision/components/PositionList/secondary";

const Layout = () => {
  const { account } = useWallet();
  return <>{account ? <Account account={account} /> : <Loading />}</>;
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

const Account = ({ account }) => {
  console.log("ACCOUNT:", account);

  const [snapshots, setSnapshots] = useState();
  // GET USER SNAPSHOTS
  useEffect(() => {
    async function fetchData() {
      try {
        let skip = 0;
        let allResults = [];
        let found = false;
        while (!found) {
          let result = await client.query({
            query: USER_HISTORY,
            variables: {
              skip: skip,
              user: account.toLowerCase(),
            },
            fetchPolicy: "cache-first",
          });

          console.log("LP SNAPSHOT:", result.data.liquidityPositionSnapshots);

          allResults = allResults.concat(result.data.liquidityPositionSnapshots);
          if (result.data.liquidityPositionSnapshots.length < 1000) {
            found = true;
          } else {
            skip += 1000;
          }
        }
        if (allResults) {
          setSnapshots(allResults);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [account]);

  //GET USER POSITIONS
  const [ethPrice] = useEthPrice();
  const [positions, setPositions] = useState();
  useEffect(() => {
    async function fetchData(account) {
      try {
        let result = await client.query({
          query: USER_POSITIONS,
          variables: {
            user: account.toLowerCase(),
          },
          fetchPolicy: "no-cache",
        });
        if (result?.data?.liquidityPositions) {
          let formattedPositions = await Promise.all(
            result?.data?.liquidityPositions.map(async (positionData) => {
              const returnData = await getLPReturnsOnPair(account, positionData.pair, ethPrice, snapshots);
              return {
                ...positionData,
                ...returnData,
              };
            })
          );
          setPositions(formattedPositions);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData(account);
  }, [account, snapshots]);

  console.log("SNAPSHOTS", snapshots);
  console.log("POSITIONS", positions);

  const transactions = useUserTransactions(account);

  return (
    <>
      {positions ? <Content positions={positions} /> : null}

      {/* <div className="bg-white border border-gray-200 shadow overflow-hidden sm:rounded-lg">
        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
            <div className="ml-4 mt-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Sushiswap Positions</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">Total</p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$100</h3>
              <p className="mt-1 text-sm leading-5 text-gray-500">9887 SUSHI</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <PositionList positions={positions} />
        </div>
      </div> */}
    </>
  );
};

const Projects = () => {
  return (
    <>
      <div className="px-4 mt-6 sm:px-6 lg:px-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">Pinned Projects</h2>
        <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
          <li className="relative col-span-1 flex shadow-sm rounded-md">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
              GA
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm leading-5 truncate">
                <a
                  href="#"
                  className="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                >
                  GraphQL API
                </a>
                <p className="text-gray-500">12 Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  id="pinned-project-options-menu-0"
                  aria-has-popup="true"
                  className="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150"
                >
                  {/* Heroicon name: dots-vertical */}
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
          {/* More project cards... */}
        </ul>
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
          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Liquidity
          </th>
          <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Total Fees Earned
          </th>
          <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" />
        </tr>
      </thead>
    </>
  );
};

const TableRow = ({ position }) => {
  return (
    <>
      <tr>
        <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
          <div className="flex items-center space-x-2">
            <div className="flex flex-shrink-0 -space-x-1">
              <img
                className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <span className="flex-shrink-0 text-xs leading-5 font-medium">+8</span>
          </div>
        </td>
        <td className="px-6 py-3 max-w-0 w-full whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
          <div className="flex items-center space-x-3 lg:pl-2">
            <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" />
            <a href="#" className="truncate hover:text-gray-600">
              <span>
                GraphQL API <span className="text-gray-500 font-normal">in Engineering</span>{" "}
              </span>
            </a>
          </div>
        </td>
        <td className="hidden md:table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
          March 17, 2020
        </td>
        <td className="pr-6">
          <div className="relative flex justify-end items-center">
            <button
              type="button"
              class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
            >
              Add
            </button>
          </div>
        </td>
        <td className="pr-6">
          <div className="relative flex justify-end items-center">
            <button
              type="button"
              class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
            >
              Remove
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

const Content = ({ positions }) => {
  return (
    <>
      {/*
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  */}
      <div className="h-screen flex overflow-hidden bg-white">
        {/* Main column */}
        {/* Title */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
              <div className="ml-4 mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Sushiswap Positions</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">Total</p>
              </div>
              <div className="ml-4 mt-4 flex-shrink-0">
                <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$100</h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">9887 SUSHI</p>
              </div>
            </div>
          </div>
          {/* Main content */}
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
            {/* Pinned projects */}
            {/* Projects table (small breakpoint and up) */}
            <div className="block">
              <div className="align-middle inline-block min-w-full border-b border-gray-200">
                <table className="min-w-full">
                  <TableHead />
                  <tbody className="bg-white divide-y divide-gray-100">
                    {/* More project rows... */}
                    {positions.map((position) => {
                      return <TableRow position={position} />;
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

export default Account;
