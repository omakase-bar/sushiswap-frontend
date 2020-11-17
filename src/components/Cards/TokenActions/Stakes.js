import React from "react";
//import Stake from "../../../services/frontend/views/Farm/components/Stake";
import StakeWrapper from "./StakeWrapper";
//import useSushi from "../../../services/frontend/hooks/useSushi";
//import { getFarms } from "../../../services/frontend/sushi/utils";
import useAllStakedValue from "../../../services/frontend/hooks/useAllStakedValue";
import useFarms from "../../../services/frontend/hooks/useFarms";
import { useWallet } from "use-wallet";
import BigNumber from "bignumber.js";

import WalletsModal from "../../Modals/Wallets";
import useModal from "../../../shared/hooks/useModal";

const APYWrapper = ({ symbol, setSelected }) => {
  const [farms] = useFarms();
  const { account } = useWallet();
  const stakedValue = useAllStakedValue();
  const sushiIndex = farms.findIndex(({ tokenSymbol }) => tokenSymbol === "SUSHI");
  const sushiPrice =
    sushiIndex >= 0 && stakedValue[sushiIndex] ? stakedValue[sushiIndex].tokenPriceInWeth : new BigNumber(0);
  const BLOCKS_PER_YEAR = new BigNumber(2336000);
  const SUSHI_PER_BLOCK = new BigNumber(100);
  const rows = farms.reduce(
    (farmRows, farm, i) => {
      const farmWithStakedValue = Object.assign(Object.assign(Object.assign({}, farm), stakedValue[i]), {
        apy: stakedValue[i]
          ? sushiPrice
              .times(SUSHI_PER_BLOCK)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[i].poolWeight)
              .div(stakedValue[i].totalWethValue)
          : null,
      });
      const newFarmRows = [...farmRows];
      newFarmRows.push(farmWithStakedValue);
      return newFarmRows;
    },
    [[]]
  );

  return <Stakes rows={rows} symbol={symbol} account={account} setSelected={setSelected} />;
};
const Stakes = ({ symbol, rows, account, setSelected, showWallets }) => {
  const [onPresentWallets] = useModal(<WalletsModal />, null, null);
  // const sushi = useSushi();
  // const farms = getFarms(sushi);
  // const { account } = useWallet();
  // console.log("FARMS:", rows);
  // console.log("ROWS:", rows);
  let filtered;
  if (rows && rows.length > 0) {
    const search = symbol;
    const condition = new RegExp(search);
    filtered = rows.filter(function(e) {
      return condition.test(e.id);
    });
  }
  //console.log("FILTERED FARMS:", filtered);

  return (
    <>
      {account && filtered ? (
        <div className="sushi-flex sushi-flex-col">
          <div className="sushi-overflow-x-auto">
            <div className="sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle">
              <table className="sushi-min-w-full sushi-divide-y sushi-divide-gray-200">
                <thead>
                  <tr>
                    <th className="sushi-pr-4 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>SUSHI APR</span>
                      </a>
                    </th>
                    <th className="sushi-px-4 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>Available</span>
                      </a>
                    </th>
                    <th className="sushi-px-4 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                      <a href="#" className="sushi-flex sushi-items-center">
                        <span>Staked</span>
                      </a>
                    </th>
                    <th className="sushi-pl-4 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-500 sushi-uppercase sushi-border-b sushi-border-gray-200 sushi-">
                      {/**/}
                    </th>
                  </tr>
                </thead>
                <tbody className="sushi-bg-white sushi-divide-y sushi-divide-gray-200">
                  {filtered.map((farm) => {
                    return (
                      <StakeWrapper
                        // lpContract={farm.lpContract}
                        // pid={farm.pid}
                        // tokenName={farm.lpToken}
                        key={farm.id}
                        farmId={farm.id}
                        apy={farm.apy}
                        setSelected={setSelected}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="sushi-py-10 sushi-px-6 sushi-text-center sushi-bg-orange-100 lg:sushi-flex-shrink-0 lg:sushi-flex lg:sushi-flex-col lg:sushi-justify-center lg:sushi-p-12">
          <p className="sushi-mt-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
            Stake your liquidity to earn more SUSHI
          </p>
          <div className="sushi-mt-6 sushi-flex sushi-items-center sushi-justify-center sushi-text-5xl sushi-leading-none sushi-font-extrabold sushi-text-gray-900">
            {/* <span>👝</span> */}
            <span className="sushi-ml-3 sushi-text-3xl sushi-leading-7 sushi-font-medium sushi-text-gray-500">
              💧+ 🎣 = 🍣
            </span>
          </div>
          <p className="sushi-mt-4 sushi-text-sm sushi-leading-5">
            <a
              href="https://docs.sushiswap.fi"
              target="_blank"
              className="sushi-font-medium sushi-text-gray-500 sushi-underline"
            >
              Learn more about staking
            </a>
          </p>
          <div className="sushi-mt-12">
            <div className="sushi-rounded-md sushi-shadow">
              <button
                onClick={onPresentWallets}
                className="sushi-w-full sushi-flex sushi-items-center sushi-justify-center sushi-px-5 sushi-py-3 sushi-border sushi-border-transparent sushi-text-base sushi-leading-6 sushi-font-medium sushi-rounded-md sushi-text-white sushi-bg-orange-600 hover:sushi-bg-orange-700 focus:sushi-outline-none focus:sushi-shadow-outline sushi-transition sushi-duration-150 sushi-ease-in-out"
              >
                Connect wallet to begin
              </button>
            </div>
          </div>
          {/* <div className="sushi-mt-4 sushi-text-sm sushi-leading-5">
            <a href="#" className="sushi-font-medium sushi-text-gray-900">
              Learn more
              <span className="sushi-font-normal sushi-text-gray-500">(20MB)</span>
            </a>
          </div> */}
        </div>
      )}
    </>
  );
};

export default APYWrapper;
