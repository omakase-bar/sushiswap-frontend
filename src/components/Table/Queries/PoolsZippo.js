import React, { useState, useEffect } from "react";
import _ from "lodash";
import Pools from "../PoolsZippo";
import Loading from "../Loading";
import axios from "axios";

const PoolsQuery = ({ showWallets }) => {
  const [sort, setSort] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [pools, setPools] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPools = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios("https://back.sushi.zippo.io/api/dashboard");
        setPools(result.data.pools);
        console.log("RESULTS: ", result.data);
      } catch (e) {
        console.log("zippo error:", e);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchPools();
  }, []);

  console.log("POOLS:", pools);
  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Loading />
      ) : (
        <Pools
          title={"Active Pools on Sushiswap"}
          pools={pools}
          sort={sort}
          sortDirection={sortDirection}
          setSort={setSort}
          setSortDirection={setSortDirection}
          showWallets={showWallets}
        />
      )}
    </>
  );
};

export default PoolsQuery;
