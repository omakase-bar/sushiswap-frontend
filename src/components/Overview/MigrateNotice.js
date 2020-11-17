import React from "react";
import { menus, supportedPools } from "../../constants/constants";
import { isAddress } from "../../services/vision/utils/index.js";
import logoNotFound from "../../assets/img/logoNotFound.png";
import logoBackground from "../../assets/img/logo-background.png";
import logoXSushiBackground from "../../assets/img/logo-xsushi-background.png";
import _ from "lodash";

const MigrateNoticeWrapper = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md divide-y divide-gray-200">
        <MigrateNotice />
      </div>
    </>
  );
};

export const MigrateNotice = () => {
  return (
    <>
      <div className="p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Migrate for Better Rewards</h2>
        <p className="mt-4 text-sm leading-5 text-gray-500">
          Migrate your Uniswap LP in one click with optimized gas. SushiSwap provides competitive trading fees and
          additional rewards in SUSHI. Stake SUSHI for xSUSHI to continue earning on your rewards!
        </p>
        <p className="my-8">
          <div className="text-center">
            <img
              className={"inline-block h-16 w-16 rounded-full text-white shadow-solid"}
              src={
                "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png"
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = logoNotFound;
              }}
            />
            <img
              className={"inline-block h-16 w-16 rounded-full text-white shadow-solid"}
              src={logoBackground}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = logoNotFound;
              }}
            />
            <img
              className={"inline-block h-16 w-16 rounded-full text-white shadow-solid"}
              src={logoXSushiBackground}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = logoNotFound;
              }}
            />
          </div>
        </p>
        <a href="https://lite.sushiswap.fi/#/liquidity/migrate" target="_blank">
          <button className="mt-8 w-full bg-orange-600 border border-transparent rounded-md py-4 text-lg leading-5 font-semibold text-white hover:bg-orange-700 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition duration-150 ease-in-out">
            Migrate from Uniswap
          </button>
        </a>
      </div>
    </>
  );
};

export default MigrateNoticeWrapper;
