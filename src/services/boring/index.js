import React from "react";
import logo from "../../assets/img/logo.png";
import SushiLogo from "../../assets/img/logo.png";

const BoringApp = () => {
  return (
    <>
      {/* PageTitle */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center flex-shrink-0">
          <img className="h-8 w-auto" src={logo} alt="logo" />
          <h1 className="text-lg font-bold leading-6 text-gray-900 sm:truncate ml-2">SushiSwap</h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <span className="w-full md:w-auto order-1 ml-3 shadow-sm rounded-md sm:order-0 sm:ml-0">
            <button
              type="button"
              className="w-full h-full inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-orange-50 transition duration-150 ease-in-out"
            >
              0.4832 ETH
            </button>
          </span>
          <span className="w-full md:w-auto order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
            <button
              type="button"
              className="w-full h-full inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-orange-50 transition duration-150 ease-in-out"
            >
              Wallet
            </button>
          </span>
        </div>
      </div>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              ACCOUNT
            </a>
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              BENTO
              <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Alpha
              </span>
            </a>
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              BAR
            </a>
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              TIMELOCK
            </a>
          </nav>
        </div>
      </header>
      {/* Body */}
      <div className="min-h-full bg-gray-100 shadow-inner py-6 px-4 space-y-6 sm:p-6">
        {/* Total Balances */}
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white">
            <div className="flex overflow-hidden bg-white">
              {/* Title */}
              <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                  <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                    <div className="ml-4 mt-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Total Assets</h3>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                      <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$10,000</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wallet Balances */}
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white">
            <div className="flex overflow-hidden bg-white">
              {/* Main column */}
              {/* Title */}
              <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                  <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                    <div className="ml-4 mt-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Wallet balance</h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500">1 ETH = $100</p>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                      <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$1000</h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500">1000 SUSHI</p>
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
                          <tr>
                            <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                              <div className="flex items-center space-x-2">
                                <div className="flex flex-shrink-0 -space-x-1">
                                  <img
                                    className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                                    src={SushiLogo}
                                    alt="SUSHI"
                                  />
                                </div>
                                <div className="flex items-center space-x-3 lg:pl-2">
                                  {/* <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" /> */}
                                  <a href="#" className="truncate hover:text-gray-600">
                                    <span>
                                      Staked Sushi
                                      {/* <span className="text-gray-500 font-normal">{balance.description}</span> */}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-900 text-right">
                              <div>1000 SUSHI</div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
                              $1000
                            </td>
                            <td className="pr-6">
                              <div className="relative flex justify-end items-center">Button</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* SUSHI Balances */}
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white">
            <div className="flex overflow-hidden bg-white">
              {/* Main column */}
              {/* Title */}
              <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                  <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                    <div className="ml-4 mt-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">SUSHI balance</h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500">1 SUSHI = $100</p>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                      <h3 className="text-lg text-right leading-6 font-medium text-gray-900">$1000</h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500">1000 SUSHI</p>
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
                          <tr>
                            <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                              <div className="flex items-center space-x-2">
                                <div className="flex flex-shrink-0 -space-x-1">
                                  <img
                                    className="max-w-none h-6 w-6 rounded-full text-white shadow-solid"
                                    src={SushiLogo}
                                    alt="SUSHI"
                                  />
                                </div>
                                <div className="flex items-center space-x-3 lg:pl-2">
                                  {/* <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" /> */}
                                  <a href="#" className="truncate hover:text-gray-600">
                                    <span>
                                      Staked Sushi
                                      {/* <span className="text-gray-500 font-normal">{balance.description}</span> */}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-900 text-right">
                              <div>1000 SUSHI</div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
                              $1000
                            </td>
                            <td className="pr-6">
                              <div className="relative flex justify-end items-center">Button</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* Positions */}
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white">
            <div className="flex overflow-hidden bg-white">
              <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                  <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                    <div className="ml-4 mt-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Liquidity Positions</h3>
                      <a class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out">
                        View all pairs
                      </a>
                    </div>
                  </div>
                </div>
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
                  <div className="block">
                    <div className="align-middle inline-block min-w-full border-b border-gray-200">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              <span className="lg:pl-2">Name</span>
                            </th>
                            <th className="table-cell px-6 py-3 border-b border-gray-200 bg-white text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Unstaked
                            </th>
                            <th className="table-cell px-6 py-3 border-b border-gray-200 bg-white text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Staked
                            </th>
                            <th className="table-cell px-6 py-3 border-b border-gray-200 bg-white text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Fees
                            </th>
                            <th className="table-cell px-6 py-3 border-b border-gray-200 bg-white text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                              Rewards
                            </th>
                            <th className="pr-6 py-3 border-b border-gray-200 bg-white text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" />
                            <th className="pr-6 py-3 border-b border-gray-200 bg-white text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider" />
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                          <tr>
                            <td className="px-6 py-3 text-sm leading-5 text-gray-500 font-medium">
                              <div className="flex items-center space-x-2">
                                <div className="flex flex-shrink-0 -space-x-1">
                                  <img
                                    className="relative z-30 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                    src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                                  />
                                  <img
                                    className="relative z-20 -ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                    src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
                                  />
                                </div>
                                <div className="flex items-center space-x-3 lg:pl-2">
                                  {/* <div className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" /> */}
                                  <a className="truncate hover:text-gray-600">
                                    <span>ETH-SUSHI</span>
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
                              <div className="text-gray-900">$1000</div>
                              <div>1000 ETH</div>
                              <div>1000 SUSHI</div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
                              <div className="text-gray-500">$1000</div>
                              <div>ETH</div>
                              <div>SUSHI</div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
                              <div className="text-green-500">$1000</div>
                              <div>1000 ETH</div>
                              <div>1000 SUSHI</div>
                            </td>
                            <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
                              <div className="text-gray-900">$1000 </div>
                              <div className="text-gray-900">1000 SUSHI </div>
                              <button className="mt-2 text-xs font-medium leading-4 rounded-md select-none text-orange-800 bg-orange-100 inline-flex items-center px-2.5 py-0.5">
                                Click to harvest
                              </button>
                            </td>
                            <td className="pr-6">
                              <div className="relative flex justify-end items-center">
                                <a class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out">
                                  Add
                                </a>
                              </div>
                            </td>
                            <td className="pr-6">
                              <div className="relative flex justify-end items-center">
                                <a class="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out">
                                  Remove
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoringApp;
