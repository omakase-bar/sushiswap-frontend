import React, { useState, useEffect } from "react";
import SearchHeader from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitleBreadcrumb from "../components/PageTitles/Trading";
import SectionCards from "../components/Cards/Section";
import CardTokenActions from "../components/Cards/TokenActions/Layout";
import MarketWidgets from "../components/Cards/MarketWidgets";
import PairWidgets from "../components/Cards/PairWidgets";
import useMenu from "../shared/hooks/useMenu";

import Panel from "../services/vision/components/Panel";
import { formattedNum, formattedPercent, getPoolLink, getSwapLink } from "../services/vision/utils";
import { useColor } from "../services/vision/hooks";
import { usePairData, usePairTransactions } from "../services/vision/contexts/PairData";
import { useEthPrice } from "../services/vision/contexts/GlobalData";
import PairChart from "../services/vision/components/PairChart";
import TxnList from "../services/vision/components/TxnList";
import Loader from "../services/vision/components/LocalLoader";

const Token = ({ pairAddress, history }) => {
  const mobileMenu = useMenu();
  const {
    token0,
    token1,
    reserve0,
    reserve1,
    reserveUSD,
    trackedReserveUSD,
    oneDayVolumeUSD,
    volumeChangeUSD,
    oneDayVolumeUntracked,
    volumeChangeUntracked,
    liquidityChangeUSD,
  } = usePairData(pairAddress);
  const transactions = usePairTransactions(pairAddress);
  const backgroundColor = useColor(pairAddress);
  // liquidity
  const liquidity = trackedReserveUSD
    ? formattedNum(trackedReserveUSD, true)
    : reserveUSD
    ? formattedNum(reserveUSD, true)
    : "-";
  const liquidityChange = formattedPercent(liquidityChangeUSD);
  // mark if using untracked liquidity
  const [usingTracked, setUsingTracked] = useState(true);
  useEffect(() => {
    setUsingTracked(!trackedReserveUSD ? false : true);
  }, [trackedReserveUSD]);
  // volume
  const volume =
    oneDayVolumeUSD || oneDayVolumeUSD === 0
      ? formattedNum(oneDayVolumeUSD === 0 ? oneDayVolumeUntracked : oneDayVolumeUSD, true)
      : oneDayVolumeUSD === 0
      ? "$0"
      : "-";
  // mark if using untracked volume
  const [usingUtVolume, setUsingUtVolume] = useState(false);
  useEffect(() => {
    setUsingUtVolume(oneDayVolumeUSD === 0 ? true : false);
  }, [oneDayVolumeUSD]);

  const volumeChange = formattedPercent(!usingUtVolume ? volumeChangeUSD : volumeChangeUntracked);
  // get fees
  const fees =
    oneDayVolumeUSD || oneDayVolumeUSD === 0
      ? usingUtVolume
        ? formattedNum(oneDayVolumeUntracked * 0.003, true)
        : formattedNum(oneDayVolumeUSD * 0.003, true)
      : "-";
  // token data for usd
  const [ethPrice] = useEthPrice();
  const token0USD =
    token0?.derivedETH && ethPrice ? formattedNum(parseFloat(token0.derivedETH) * parseFloat(ethPrice), true) : "";
  const token1USD =
    token1?.derivedETH && ethPrice ? formattedNum(parseFloat(token1.derivedETH) * parseFloat(ethPrice), true) : "";
  // rates
  const token0Rate = reserve0 && reserve1 ? formattedNum(reserve1 / reserve0) : "-";
  const token1Rate = reserve0 && reserve1 ? formattedNum(reserve0 / reserve1) : "-";
  // formatted symbols for overflow
  const formattedSymbol0 = token0?.symbol.length > 6 ? token0?.symbol.slice(0, 5) + "..." : token0?.symbol;
  const formattedSymbol1 = token1?.symbol.length > 6 ? token1?.symbol.slice(0, 5) + "..." : token1?.symbol;

  // transactions
  //const txnChangeFormatted = formattedPercent(txnChange);
  //console.log("TXNCHANGE", oneDayTxns, txnChangeFormatted);
  console.log(transactions);

  return (
    <>
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        <Sidebar selected={""} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader changeMenu={mobileMenu.change} isOpen={mobileMenu.isOpen} selected={""} />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
          >
            {token0 && token1 ? (
              <>
                <PageTitleBreadcrumb
                  type={"pair"}
                  name={token0.symbol + "-" + token1.symbol + " Pair"}
                  price={token0USD}
                  price2={token1USD}
                  // priceChange={priceChange}
                  symbol={token0.symbol}
                  symbol2={token1.symbol}
                  id={token0.id}
                  id2={token1.id}
                />
                <PairWidgets
                  token0={token0}
                  token1={token1}
                  token0Rate={token0Rate}
                  token1Rate={token1Rate}
                  formattedSymbol0={formattedSymbol0}
                  formattedSymbol1={formattedSymbol1}
                  token0USD={token0USD}
                  token1USD={token1USD}
                  reserve0={formattedNum(reserve0)}
                  reserve1={formattedNum(reserve1)}
                />
              </>
            ) : (
              ""
            )}
            <MarketWidgets
              type={"pair"}
              liquidity={liquidity}
              liquidityChange={liquidityChange}
              volume={volume}
              volumeChange={volumeChange}
              fees={fees}
              fessChange={volumeChange}
            />
            <SectionCards>
              <Panel>
                <PairChart
                  address={pairAddress}
                  color={backgroundColor}
                  base0={reserve1 / reserve0}
                  base1={reserve0 / reserve1}
                />
              </Panel>
              {token0 && token1 ? (
                <>
                  <CardTokenActions
                    initialSection={"pool"}
                    title={"What would you like to do?"}
                    symbol={token0.symbol}
                    currencyIdA={token0.id}
                    currencyIdB={token1.id}
                  />
                </>
              ) : (
                ""
              )}
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
          </main>
        </div>
      </div>
    </>
  );
};

export default Token;
