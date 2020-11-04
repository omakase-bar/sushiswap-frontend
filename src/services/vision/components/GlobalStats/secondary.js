import React, { useState } from "react";
import styled from "styled-components";
import { RowFixed, RowBetween } from "../Row";
import { useMedia } from "react-use";
import { useGlobalData, useEthPrice } from "../../contexts/GlobalData";
import { formattedNum, formattedPercent, localNumber } from "../../utils";

import { useTokenData } from "../../..//vision/contexts/TokenData";

import UniPrice from "../UniPrice";
import { TYPE } from "../../Theme";

const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`;

const Medium = styled.span`
  font-weight: 500;
`;

export default function GlobalStats() {
  const below1295 = useMedia("(max-width: 1295px)");
  const below1180 = useMedia("(max-width: 1180px)");
  const below1024 = useMedia("(max-width: 1024px)");
  const below400 = useMedia("(max-width: 400px)");
  const below816 = useMedia("(max-width: 816px)");

  //const [showPriceCard, setShowPriceCard] = useState(false);

  // SUSHI price
  const { priceUSD, priceChangeUSD } = useTokenData(
    "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
  );
  const price = priceUSD ? formattedNum(priceUSD, true) : "";
  const priceChange = priceChangeUSD ? formattedPercent(priceChangeUSD) : "";

  const { oneDayVolumeUSD, oneDayTxns, pairCount } = useGlobalData();
  const [ethPrice] = useEthPrice();
  const formattedEthPrice = ethPrice ? formattedNum(ethPrice, true) : "-";
  const oneDayFees = oneDayVolumeUSD
    ? formattedNum(oneDayVolumeUSD * 0.003, true)
    : "";

  return (
    <Header>
      <RowBetween style={{ padding: below816 ? "0.5rem" : ".5rem" }}>
        <RowFixed>
          <TYPE.main mr={"1rem"} style={{ position: "relative" }}>
            ETH: <Medium>{formattedEthPrice}</Medium>
          </TYPE.main>
          <TYPE.main mr={"1rem"} style={{ position: "relative" }}>
            SUSHI: <Medium>{price}</Medium>
          </TYPE.main>
          <TYPE.main mr={"1rem"}>
            Transactions (24H): <Medium>{localNumber(oneDayTxns)}</Medium>
          </TYPE.main>
          {/* {!below400 && (
            <TYPE.main
              mr={"1rem"}
                onMouseEnter={() => {
                  setShowPriceCard(true);
                }}
                onMouseLeave={() => {
                  setShowPriceCard(false);
                }}
              style={{ position: "relative" }}
            >
              ETH Price: <Medium>{formattedEthPrice}</Medium>
              {showPriceCard && <UniPrice />}
            </TYPE.main>
          )} */}

          {/* {!below1180 && (
            <TYPE.main mr={"1rem"}>
              Transactions (24H): <Medium>{localNumber(oneDayTxns)}</Medium>
            </TYPE.main>
          )} */}
          {!below1024 && (
            <TYPE.main mr={"1rem"}>
              Pairs: <Medium>{localNumber(pairCount)}</Medium>
            </TYPE.main>
          )}
          {!below1295 && (
            <TYPE.main mr={"1rem"}>
              Fees (24H): <Medium>{oneDayFees}</Medium>&nbsp;
            </TYPE.main>
          )}
        </RowFixed>
      </RowBetween>
    </Header>
  );
}
