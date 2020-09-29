import React, { useState, useEffect } from "react";
import Web3 from "web3";
import _ from "lodash";

import Pools from "../PoolsBoring";
import Loading from "../Loading";

import { SushiPools } from "../../../sushiswap";

import { useWallet } from "use-wallet";
import WalletButton from "../../WalletButton";
import useModal from "../../../shared/hooks/useModal";
import WalletModal from "../../Modals/Wallet";

const PoolsQuery = () => {
  const { account } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [pools, setPools] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (account) {
      getStats();
    } else {
      console.log("Please connect wallet");
    }
  }, [getStats, account]);

  const getStats = async () => {
    const web3 = new Web3(window.ethereum);
    let address;
    try {
      address = (await window.ethereum.enable())[0];
    } catch (error) {
      address = "0x0000000000000000000000000000000000000000";
    }
    let results = new SushiPools({ web3, address });
    await results.getInfo("0xdac17f958d2ee523a2206206994597c13d831ec7"); // TUSD, currency returns in
    setPools(results.pools);
    setIsLoading(false);
  };

  return <>{isLoading ? <Loading /> : <div>{JSON.stringify(pools)}</div>}</>;
};

const Wrapper = () => {
  const wallets = useModal();
  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <main className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none">
            <div className="sushi-border-b sushi-border-gray-200 sushi-px-4 sushi-py-4 sm:sushi-flex sm:sushi-items-center sm:sushi-justify-between sm:sushi-px-6 lg:sushi-px-8">
              <div className="sushi-mt-4 sushi-flex sm:sushi-mt-0 sm:sushi-ml-4">
                <span className="sushi-w-full md:sushi-w-auto sushi-order-0 sm:sushi-order-1 sm:sushi-ml-3 sushi-shadow-sm sushi-rounded-md">
                  <WalletButton showWallets={wallets.show} />
                </span>
              </div>
            </div>
            <PoolsQuery />
          </main>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
