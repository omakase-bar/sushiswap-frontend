import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Timelocks = ({ timelocks }) => {
  console.log("TIMELOCKS:", timelocks);
  return (
    <>
      <div className="mt-4 mb-2 w-full bg-white shadow-lg rounded-lg pointer-events-auto">
        <div className="flex rounded-lg shadow-xs">
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm leading-5 font-medium text-gray-900">Security with Transparency</p>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  There is a 48 hour timelock on any updates performed on the Sushiswap smart contract. After functions
                  exit the timelock they can be executed with 3 out of 5 team multisignatures.{" "}
                  <span>
                    <a
                      href="https://help.sushidocs.com/faqs/governance"
                      target="_blank"
                      className="text-sm font-medium text-orange-600 hover:text-orange-500 active:text-orange-700 transition ease-in-out duration-150"
                    >
                      Learn more
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex-1">
        {timelocks && timelocks.length > 0
          ? timelocks.map((timelock) => {
              return (
                <div className="shadow-lg rounded-lg pointer-events-auto p-4 mt-2">
                  <div className="flex justify-between">
                    <div>
                      <a
                        className="text-xl font-semibold text-gray-800 hover:underline hover:text-gray-600"
                        href="https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd"
                      >
                        MasterChef
                      </a>
                      {timelock.isExecuted ? (
                        <div className="text-xs text-gray-600 -mt-1">
                          executed {dayjs(timelock.executedDate).fromNow()}
                        </div>
                      ) : null}
                      {timelock.isCanceled ? (
                        <div className="text-xs text-gray-600 -mt-1">
                          executed {dayjs(timelock.canceledDate).fromNow()}
                        </div>
                      ) : null}
                      {!timelock.isCanceled && !timelock.isExecuted ? (
                        <div className="text-xs text-gray-600 -mt-1">
                          unlocks in {dayjs(timelock.etaDate).fromNow()}
                        </div>
                      ) : null}
                    </div>
                    {timelock.isExecuted ? (
                      <div className="rounded-full px-4 h-6 flex justify-center items-center bg-green-200">
                        <div className="text-gray-700 text-xs">
                          <a
                            className="hover:text-gray-600 hover:underline cursor-pointer"
                            href="https://etherscan.io/tx/0xea72122e35b4fedfa69b78f2c540a210ff488c63e52b555022d1b119acb84585"
                          >
                            EXECUTED
                          </a>
                        </div>
                      </div>
                    ) : null}
                    {timelock.isCanceled ? (
                      <div className="rounded-full px-4 h-6 flex justify-center items-center bg-red-200">
                        <div className="text-gray-700 text-xs">
                          <a
                            className="hover:text-gray-600 hover:underline cursor-pointer"
                            href="https://etherscan.io/tx/0xea72122e35b4fedfa69b78f2c540a210ff488c63e52b555022d1b119acb84585"
                          >
                            CANCELED
                          </a>
                        </div>
                      </div>
                    ) : null}
                    {!timelock.isCanceled && !timelock.isExecuted ? (
                      <div className="rounded-full px-4 h-6 flex justify-center items-center bg-orange-100">
                        <div className="text-orange-800 text-xs">
                          <a
                            className="hover:text-gray-600 hover:underline cursor-pointer"
                            href="https://etherscan.io/tx/0xea72122e35b4fedfa69b78f2c540a210ff488c63e52b555022d1b119acb84585"
                          >
                            PENDING
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex mt-2 justify-between">
                    <div className>
                      <div className="text-sm text-gray-500">Created</div>
                      <div className="font-semibold  text-gray-700">
                        <a
                          href="https://etherscan.io/tx/0x6b2801737d98cd3383bf4ee2956fe6c6c34d38773b47806127948ab1a0f4c1d2"
                          className="hover:underline hover:text-gray-600 underline"
                        >
                          {String(timelock.createdDate)}
                        </a>
                      </div>
                    </div>
                    <div className>
                      <div className="text-sm text-gray-500">End</div>
                      <div className="font-semibold  text-gray-700">{String(timelock.etaDate)}</div>
                    </div>
                    <div className="md:w-64">
                      <div className="text-sm text-gray-500">Function</div>
                      <div className="font-semibold  text-gray-700">{timelock.functionName}</div>
                    </div>
                  </div>
                  <div className="mt-3 truncate">
                    <div className="text-sm text-gray-500">Data</div>
                    <div className="font-semibold  text-gray-700">
                      <span className="text-gray-600">{timelock.data}</span>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Timelocks;
