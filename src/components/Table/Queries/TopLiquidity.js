import React from "react";
import TableDefault from "../Default";
import TableLoading from "../Loading";

import { useQuery } from "@apollo/react-hooks";
import { TOP_LIQUIDITY } from "../../../graphql-operations";

const QueryTopLiquidity = () => {
  const dataString = "liquidityPositions";
  //   let now = new Date();
  //   let startOfTodayTimestamp =
  //     Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 1000;
  const { data, loading, error } = useQuery(TOP_LIQUIDITY, {
    variables: {
      first: 20,
      skip: 0,
      orderBy: "liquidityTokenBalance",
      orderDirection: "desc",
    },
  });
  if (loading) return <TableLoading title={"Top Liquidity Positions"} />;
  if (error) {
    console.log(error);
    return <p>Something went wrong...</p>;
  }
  if (data) {
    console.log(data);
    let flattened = [];
    data[dataString].map(function(position) {
      flattened.push({
        user: position.user.id,
        pair: position.pair.token0.symbol + "-" + position.pair.token1.symbol,
        liquidityTokenBalance: position.liquidityTokenBalance,
        // metadata ------------------------//
        pairAddress: position.pair.id,
        id0: position.pair.token0.id,
        id1: position.pair.token1.id,
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
      <TableDefault
        title={"Top Liquidity Positions"}
        headers={headers}
        rows={flattened}
      />
    );
  }
};

export default QueryTopLiquidity;
