import { client, masterChef } from "../../apollo/client";
import { MASTERCHEF_POOLS, SUSHI_PAIRS, TOKEN } from "../../apollo/queries";
import _ from "lodash";
import axios from "axios";

import { supportedPools, menus } from "../../constants/constants";

export async function getPoolData() {
  // console.log(
  //   "SUPPORTED_POOLS:",
  //   JSON.stringify(_.sortBy(supportedPools, ["pid"]))
  // );
  console.log("SUPPORTED_POOLS:", supportedPools);

  // Relevant Queries from The Graph ------------------------------------//
  let masterChefStats = await masterChef.query({
    query: MASTERCHEF_POOLS(),
    fetchPolicy: "cache-first",
  });
  let masterChefPools = masterChefStats?.data?.masterChefPools;
  const chefAddress = "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd";
  // Choose which pools to display on Menu based on PID for now -----------//
  const active = menus["current"];
  let filtered = _.filter(masterChefPools, function(pool) {
    return active.includes(Number(pool.id));
  });
  let lpTokens = _.map(filtered, "lpToken");
  console.log("FILTERED:", filtered);

  // *** If issues with the subgraph, load pool info manually from constants.js ***
  if (filtered.length < active.length) {
    filtered = _.filter(supportedPools, function(pool) {
      return active.includes(Number(pool.pid));
    });
    filtered = _.map(filtered, function(pool) {
      pool.lpToken = pool.lpToken.toLowerCase(); // the graph expects lpToken address to be all lowercase
      return pool;
    });
    lpTokens = _.map(filtered, "lpToken");
    masterChefPools = supportedPools;
    console.log("ACTIVE:", active.length);
    console.log("FILTERED_backup:", filtered.length);
  }

  //const lpTokens = _.map(masterChefStats?.data?.masterChefPools, "lpToken");
  let poolStatistics = await client.query({
    query: SUSHI_PAIRS(lpTokens, chefAddress),
    fetchPolicy: "cache-first",
  });
  const pairs = poolStatistics?.data?.pairs;
  const liquidityPositions = poolStatistics?.data.liquidityPositions;
  const mergeStats = _.map(liquidityPositions, function(lp) {
    return _.merge(lp, _.find(pairs, { id: lp.pair.id }));
  });
  const mergePID = _.map(mergeStats, function(pair) {
    return _.merge(pair, _.find(filtered, { lpToken: pair.id }));
  });
  // merge with constants for icon, name, etc
  // note: pool.id is a string, in order to compare change to Number
  const mergeConstants = _.map(mergePID, function(pool) {
    return _.merge(pool, _.find(supportedPools, { pid: Number(pool.id) }));
  });

  // Initialize --------------------------------------------------------//
  console.log("MASTERCHEF_POOLS:", masterChefPools);
  const totalAllocPointWithoutVesting = _.sumBy(masterChefPools, function(
    pool
  ) {
    //if (pool.id !== 29) {
    // if using constants.js, 29 is exluded by default
    if (pool.pid !== 29) {
      return Number(pool.allocPoint);
    }
  });
  const totalAllocPoint = totalAllocPointWithoutVesting;
  // const totalAllocPointWithVesting = _.sumBy(masterChefPools, function(pool) {
  //   return Number(pool.allocPoint);
  // });
  // console.log(
  //   "ALLOC:",
  //   totalAllocPointWithoutVesting,
  //   totalAllocPointWithVesting
  // );
  const sushiPerBlock = 100;
  const baseAllocPoint = 1e3;

  //   console.log("DETAILS_1:", {
  //     totalAllocPoint: totalAllocPoint,
  //     sushiPerBlock: sushiPerBlock,
  //     baseAllocPoint: baseAllocPoint,
  //   });

  const sushiswapQuery = await client.query({
    query: TOKEN("0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"),
    fetchPolicy: "cache-first",
  });
  const sushiswapData = sushiswapQuery.data.token;
  //console.log("SUSHISWAP_DATA:", sushiswapData);

  const etherscanQuery = await axios.get("https://api.etherscan.io/api", {
    params: {
      module: "stats",
      action: "tokensupply",
      contractaddress: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      apikey: "ZKPQS9JU9CPDJAAX2DS9UMVJD9HAVEIN73",
    },
  });
  const etherscanData = etherscanQuery.data;
  //console.log("ETHERSCAN_DATA:", etherscanData);

  const ethUSD = mergeConstants[0].reserveUSD / mergeConstants[0].reserveETH;
  const token = {
    price: {
      ETH: Number(sushiswapData.derivedETH),
      USD: Number(sushiswapData.derivedETH) * ethUSD,
    },
    totalSupply: Number(etherscanData.result) / 10 ** sushiswapData.decimals,
  };
  //console.log("DETAILS_2:", { ethUSD: ethUSD, token: token });

  // TODO find alternative, since CORS issue.
  // const ethereum = await axios.get("https://etherchain.org/api/basic_stats");
  // console.log("ETH:", ethereum);
  const ethereum = {
    currentStats: {
      block_time: 13.696554978763567,
    },
  };

  let formatted = [];
  mergeConstants.map((pair) => {
    const balanceUSD = pair.totalSupply
      ? (pair.liquidityTokenBalance / pair.totalSupply) * pair.reserveUSD
      : 0;
    const rewardPerBlock = (pair.allocPoint / totalAllocPoint) * sushiPerBlock;
    const roiPerBlock = balanceUSD
      ? (rewardPerBlock * token.price.USD) / balanceUSD
      : 0;
    const roiPerHour = (3600 / ethereum.currentStats.block_time) * roiPerBlock;
    // console.log("DETAILS_ROI:", {
    //   id: pair.id,
    //   balanceUSD: balanceUSD,
    //   rewardPerBlock: rewardPerBlock,
    //   roiPerBlock: roiPerBlock,
    //   roiPerHour: roiPerHour,
    // });

    formatted.push({
      id: pair.id,
      name: pair.name,
      icon: pair.icon,
      sushiswapId: pair.symbol,
      createdAt: null,
      uniswapPair: {
        id: pair.lpToken,
        name: pair.uniswapPair, //pair.token0.symbol + "/" + pair.token1.symbol,
        token0: {
          id: pair.token0?.id,
          symbol:
            pair.token0?.symbol &&
            pair.token0?.symbol === "yyDAI+yUSDC+yUSDT+yTUSD"
              ? "yUSD"
              : pair.token0?.symbol, // find another way to handle yUSD edge case
          decimals: pair.token0?.decimals,
          derivedETH: pair.token0?.derivedETH,
        },
        token1: {
          id: pair.token1?.id,
          symbol: pair.token1?.symbol,
          decimals: pair.token1?.decimals,
          derivedETH: pair.token1?.derivedETH,
        },
        reserve0: pair.reserve0,
        reserve1: pair.reserve1,
        totalSupply: pair.totalSupply,
        reserveETH: pair.reserveETH,
        reserveUSD: pair.reserveUSD,
        trackedReserveETH: pair.trackedReserveETH,
        price: {
          ETH: pair ? pair.reserveETH / pair.totalSupply : 0,
          USD: pair ? pair.reserveUSD / pair.totalSupply : 0,
        },
      },
      balance: pair.liquidityTokenBalance,
      balanceETH: pair.totalSupply
        ? (pair.liquidityTokenBalance / pair.totalSupply) * pair.reserveETH
        : 0,
      balanceUSD: pair.totalSupply
        ? (pair.liquidityTokenBalance / pair.totalSupply) * pair.reserveUSD
        : 0,
      balancePercent:
        pair.totalSupply ?? 0 ? (pair.balance ?? 0) / pair.totalSupply : 0,
      history: {
        hourAgo: {
          balance: "",
          balanceUSD: "",
          balanceETH: "",
        },
        dayAgo: {
          balance: "",
          balanceUSD: "",
          balanceETH: "",
        },
      },
      rewards: {
        multiplier: baseAllocPoint ? pair.allocPoint / baseAllocPoint : 0,
        rewardPerBlock: rewardPerBlock,
        rewardPerThousand:
          pair.balanceUSD ?? 0 ? (1e3 / pair.balanceUSD) * rewardPerBlock : 0,
        hourlyROI: roiPerHour,
      },
    });
  });
  console.log("POOL_DATA:", poolStatistics);
  console.log("PAIRS:", pairs);
  console.log("LP:", liquidityPositions);
  console.log("MERGED_STATS:", mergeStats);
  console.log("MASTERCHEF:", masterChefPools);
  console.log("MERGED:", mergeConstants);
  console.log("FORMATTED:", formatted);
  return {
    pools: formatted,
    highestAPY:
      _.maxBy(formatted, function(pool) {
        return pool.rewards.hourlyROI;
      })?.rewards?.hourlyROI *
      24 *
      365 *
      100,
  };
}

// const PoolsQuery = ({ showWallets }) => {
//   const [pools, setPools] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       setIsError(false);
//       setIsLoading(true);
//       try {
//         let data = await getGlobalData();
//         setPools(data);
//       } catch (e) {
//         console.log("apollo error:", e);
//         setIsError(true);
//       }
//       setIsLoading(false);
//     }
//     fetchData();
//   }, []);
//   console.log("APOLLO POOLS:", pools);
//   return <div></div>;
// };

// export default PoolsQuery;
