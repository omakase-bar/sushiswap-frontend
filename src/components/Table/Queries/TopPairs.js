import React from "react";
import TableDefault from "../Default";
import TableLoading from "../Loading";

import { useQuery } from "@apollo/react-hooks";
import { TOP_PAIRS } from "../../../graphql-operations";

const QueryTopPairs = () => {
  const dataString = "pairDayDatas";
  let now = new Date();
  let startOfTodayTimestamp =
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 1000;
  const { data, loading, error } = useQuery(TOP_PAIRS, {
    variables: {
      first: 10,
      skip: 0,
      where: { date: startOfTodayTimestamp },
      orderBy: "dailyVolumeUSD",
      orderDirection: "desc",
    },
  });
  if (loading) return <TableLoading title={"Top Pairs"} />;
  if (error) {
    console.log(error);
    return <p>Something went wrong...</p>;
  }
  if (data) {
    console.log(data);
    let flattened = [];
    data[dataString].map(function(pair) {
      flattened.push({
        pair: pair.token0.symbol + "-" + pair.token1.symbol,
        totalSupply: pair.totalSupply,
        reserveUSD: pair.reserveUSD,
        dailyVolumeUSD: pair.dailyVolumeUSD,
        pairAddress: pair.pairAddress,
        id0: pair.token0.id,
        id1: pair.token1.id,
      });
    });
    let headers = flattened[0]
      ? Object.keys(flattened[0])
          .filter((e) => e !== "id0")
          .filter((e) => e !== "id1")
          .filter((e) => e !== "pairAddress")
      : [];
    console.log(flattened);
    console.log(headers);
    return (
      <TableDefault title={"Top Pairs"} headers={headers} rows={flattened} />
    );
  }
};

export default QueryTopPairs;
