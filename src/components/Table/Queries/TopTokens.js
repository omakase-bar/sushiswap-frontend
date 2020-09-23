import React from "react";
import TableDefault from "../Default";
import TableLoading from "../Loading";

import { useQuery } from "@apollo/react-hooks";
import { TOP_TOKENS } from "../../../graphql-operations";

const QueryTopTokens = () => {
  const dataString = "tokenDayDatas";
  let now = new Date();
  let startOfTodayTimestamp =
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) / 1000;
  const { data, loading, error } = useQuery(TOP_TOKENS, {
    variables: {
      first: 10,
      where: { date: startOfTodayTimestamp },
      orderBy: "totalLiquidityUSD",
      orderDirection: "desc",
    },
  });
  if (loading) return <TableLoading title={"Top Tokens"} />;
  if (error) {
    console.log(error);
    return <p>Something went wrong...</p>;
  }
  if (data) {
    console.log(data);
    let flattened = [];
    data[dataString].map(function(item) {
      flattened.push(
        Object.assign(
          {},
          ...(function _flatten(o) {
            return [].concat(
              ...Object.keys(o).map((k) =>
                typeof o[k] === "object" ? _flatten(o[k]) : { [k]: o[k] }
              )
            );
          })(item)
        )
      );
    });
    let headers = flattened[0]
      ? Object.keys(flattened[0])
          .filter((e) => e !== "__typename")
          .filter((e) => e !== "id")
      : [];
    console.log(flattened);
    console.log(headers);
    return (
      <TableDefault title={"Top Tokens"} headers={headers} rows={flattened} />
    );
  }
};

export default QueryTopTokens;
