import React, { useState, useEffect } from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import PageTitleBreadcrumb from "../components/PageTitleBreadcrumb";
import Banner from "../components/Banner";
import SectionCards from "../components/Cards/Section";
import CardMarket from "../components/Cards/Market";
import CardTokenActions from "../components/Cards/TokenActions/Layout";
//import CardTokenSwap from "../components/Cards/TokenSwap";
//import PoolTable from "../components/Table/Pool";
//import PoolTable from "../components/Table/Queries/PoolsZippo";
import MarketWidgets from "../components/Cards/MarketWidgets";
import useMenu from "../shared/hooks/useMenu";

import WalletModal from "../components/Modals/Wallet";
import useModal from "../shared/hooks/useModal";

import Panel from "../classic/vision/components/Panel";
import TokenChart from "../classic/vision/components/TokenChart/secondary";
import {
  formattedNum,
  formattedPercent,
  getPoolLink,
  getSwapLink,
  localNumber,
} from "../classic/vision/utils";
import {
  useTokenData,
  useTokenTransactions,
  useTokenPairs,
} from "../classic/vision/contexts/TokenData";
import { useColor } from "../classic/vision/hooks";
import TxnList from "../classic/vision/components/TxnList";
import Loader from "../classic/vision/components/LocalLoader";

const Token = ({ address, history }) => {
  const mobileMenu = useMenu();
  const wallets = useModal();
  const {
    id,
    name,
    symbol,
    priceUSD,
    oneDayVolumeUSD,
    totalLiquidityUSD,
    volumeChangeUSD,
    oneDayVolumeUT,
    volumeChangeUT,
    priceChangeUSD,
    liquidityChangeUSD,
    oneDayTxns,
    txnChange,
  } = useTokenData(address);
  // all transactions with this token
  const transactions = useTokenTransactions(address);
  const backgroundColor = useColor(id, symbol);
  // price
  const price = priceUSD ? formattedNum(priceUSD, true) : "";
  const priceChange = priceChangeUSD ? formattedPercent(priceChangeUSD) : "";
  // liquidity
  const liquidity = totalLiquidityUSD
    ? formattedNum(totalLiquidityUSD, true)
    : totalLiquidityUSD === 0
    ? "$0"
    : "-";
  const liquidityChange = formattedPercent(liquidityChangeUSD);
  // volume
  const volume =
    oneDayVolumeUSD || oneDayVolumeUSD === 0
      ? formattedNum(
          oneDayVolumeUSD === 0 ? oneDayVolumeUT : oneDayVolumeUSD,
          true
        )
      : oneDayVolumeUSD === 0
      ? "$0"
      : "-";
  // mark if using untracked volume
  const [usingUtVolume, setUsingUtVolume] = useState(false);
  useEffect(() => {
    setUsingUtVolume(oneDayVolumeUSD === 0 ? true : false);
  }, [oneDayVolumeUSD]);
  const volumeChange = formattedPercent(
    !usingUtVolume ? volumeChangeUSD : volumeChangeUT
  );
  // transactions
  const txnChangeFormatted = formattedPercent(txnChange);
  const txns = oneDayTxns
    ? localNumber(oneDayTxns)
    : oneDayTxns === 0
    ? 0
    : "-";

  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        {/* <MobileMenu /> */}
        {/* Static sidebar for desktop */}
        <Sidebar selected={""} />
        {/* Main column */}
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader
            changeMenu={mobileMenu.change}
            isOpen={mobileMenu.isOpen}
            selected={""}
          />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
          >
            {/* Page title & actions */}
            <PageTitleBreadcrumb
              type={"token"}
              name={name}
              price={price}
              priceChange={priceChange}
              symbol={symbol}
              id={id}
              showWallets={wallets.show}
            />
            <MarketWidgets
              type={"token"}
              liquidity={liquidity}
              liquidityChange={liquidityChange}
              volume={volume}
              volumeChange={volumeChange}
              transactions={txns}
              transactionsChange={txnChangeFormatted}
            />
            <SectionCards>
              {/* <CardMarket title={"Market"} /> */}
              <Panel>
                <TokenChart
                  address={address}
                  color={backgroundColor}
                  base={priceUSD}
                />
              </Panel>
              <CardTokenActions
                initialSection={"swap"}
                title={"What would you like to do?"}
                symbol={symbol}
                currencyIdA={id}
                currencyIdB={"ETH"}
                showWallets={wallets.show}
              />
            </SectionCards>
            {transactions ? (
              <div className="sushi-py-10 sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle sushi-px-6">
                <div
                  style={{
                    position: "relative",
                    overflow: "auto",
                    whiteSpace: "nowrap",
                  }}
                >
                  <TxnList transactions={transactions} />
                </div>
              </div>
            ) : (
              <Loader />
            )}
            {/* <PoolTable title={"Top Pairs"} /> */}
            {/* <PoolTable title={"Active Sushiswap Pools"} /> */}
            {/* <div className="sushi-mt-4 sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle sushi-px-6">
              <div
                style={{
                  position: "relative",
                  overflow: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                <TokenList tokens={allTokens} itemMax={50} />
              </div>
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Token;
