import React, { useState, useEffect } from "react";
import Web3 from "web3";
import SushiSwap from "../../../sushiquery";
import _ from "lodash";
import Pools from "../PoolsBoring";
import Loading from "../Loading";

const PoolsQuery = () => {
  const [sort, setSort] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [pools, setPools] = useState();
  useEffect(() => {
    getStats();
  }, [getStats, sort]);
  const getStats = async () => {
    const web3 = new Web3(window.ethereum);
    //console.log("Web3:", web3);
    let address;
    try {
      address = (await window.ethereum.enable())[0];
    } catch (error) {
      address = "0x0000000000000000000000000000000000000000";
    }
    //let addresses = await window.ethereum.enable();
    let sushiswap = new SushiSwap(web3);
    sushiswap.auto_update(
      async function() {
        // Retieve all info for the first wallet address
        await sushiswap.getInfo(address);
        //await sushiswap.getInfo(addresses[0]);
        console.log("UNSORTED:", sushiswap.pools);
        console.log(
          "SORTED:",
          _.orderBy(sushiswap.pools, [sort], [sortDirection])
        );
        const ordered = _.orderBy(sushiswap.pools, [sort], [sortDirection]);
        setPools(ordered);
      },
      true,
      web3
    );
  };
  if (pools && pools.length > 0) {
    return (
      <Pools
        title={"Active Pools on Sushiswap"}
        pools={pools}
        sort={sort}
        sortDirection={sortDirection}
        setSort={setSort}
        setSortDirection={setSortDirection}
      />
    );
  } else {
    return <Loading />;
  }
};

export default PoolsQuery;
