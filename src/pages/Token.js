import React, { useState, useEffect } from "react";
import PageTitleBreadcrumb from "../components/PageTitles/Trading";
import SectionCards from "../components/Cards/Section";
import CardTokenActions from "../components/Cards/TokenActions/Layout";
import MarketWidgets from "../components/Cards/MarketWidgets";
import Panel from "../services/vision/components/Panel";
import TokenChart from "../services/vision/components/TokenChart/secondary";
import { formattedNum, formattedPercent, localNumber } from "../services/vision/utils";
import { useTokenData, useTokenTransactions } from "../services/vision/contexts/TokenData";
import { useColor } from "../services/vision/hooks";
import TxnList from "../services/vision/components/TxnList/secondary";
import CoinLoader from "../components/CoinLoader";
//import Loader from "../services/vision/components/LocalLoader";

const Token = ({ address, history }) => {
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
  const liquidity = totalLiquidityUSD ? formattedNum(totalLiquidityUSD, true) : totalLiquidityUSD === 0 ? "$0" : "-";
  const liquidityChange = formattedPercent(liquidityChangeUSD);
  // volume
  const volume =
    oneDayVolumeUSD || oneDayVolumeUSD === 0
      ? formattedNum(oneDayVolumeUSD === 0 ? oneDayVolumeUT : oneDayVolumeUSD, true)
      : oneDayVolumeUSD === 0
      ? "$0"
      : "-";
  // mark if using untracked volume
  const [usingUtVolume, setUsingUtVolume] = useState(false);
  useEffect(() => {
    setUsingUtVolume(oneDayVolumeUSD === 0 ? true : false);
  }, [oneDayVolumeUSD]);
  const volumeChange = formattedPercent(!usingUtVolume ? volumeChangeUSD : volumeChangeUT);
  // transactions
  const txnChangeFormatted = formattedPercent(txnChange);
  const txns = oneDayTxns ? localNumber(oneDayTxns) : oneDayTxns === 0 ? 0 : "-";

  return (
    <>
      {/* Page title & actions */}
      <PageTitleBreadcrumb type={"token"} name={name} price={price} priceChange={priceChange} symbol={symbol} id={id} />
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
          <TokenChart address={address} color={"#fa7815"} base={priceUSD} />
          {/* <TokenChart address={address} color={backgroundColor} base={priceUSD} /> */}
        </Panel>
        <CardTokenActions
          initialSection={"swap"}
          title={"What would you like to do?"}
          symbol={symbol}
          currencyIdA={id}
          currencyIdB={"ETH"}
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
            <TxnList transactions={transactions} color={"#d03801"} />
          </div>
        </div>
      ) : (
        <CoinLoader />
      )}
    </>
  );
};

export default Token;
