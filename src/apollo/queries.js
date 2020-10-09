import gql from "graphql-tag";

export const MASTERCHEF_POOLS = () => {
  const queryString = `query masterChefPools {
    masterChefPools {
      id
      balance
      lpToken
      allocPoint
    }
  }`;
  return gql(queryString);
};

export const DATA = () => {
  const queryString = `query uniswapDayDatas {
    uniswapDayDatas(orderBy: date, orderDirection: desc, first: 1) {
      totalLiquidityETH
      totalLiquidityUSD
    }
  }`;
  return gql(queryString);
};

export const TOKEN = (id) => {
  const queryString = `query token {
    token(id: ${JSON.stringify(id)}) {
      id
      totalSupply
      tradeVolume
      tradeVolumeUSD
      derivedETH
      decimals
    }
  }`;
  return gql(queryString);
};

export const FACTORY = () => {
  const queryString = `query uniswapFactories {
    uniswapFactories(first: 1) {
      id
      totalVolumeUSD
      totalVolumeETH
      untrackedVolumeUSD
      totalLiquidityUSD
      totalLiquidityETH
      txCount
      pairCount
    }
  }`;
  return gql(queryString);
};

// ----------------- Test ------------------------//
export const SUSHI_PAIRS = (ids, masterChefAddress) => {
  let queryString = `query pools {
    pairs(where: {id_in: ${JSON.stringify(ids)}}) {
        id
        token0 {
            id
            decimals
            symbol
            derivedETH
        }
        token1 {
            id
            decimals
            symbol
            derivedETH
        }
        reserve0
        reserve1
        totalSupply
        reserveETH
        reserveUSD
        trackedReserveETH
    }

    liquidityPositions(where: {user: ${JSON.stringify(
      masterChefAddress
    )}, pair_in: ${JSON.stringify(ids)}}) {
        pair {
          id
        }
        liquidityTokenBalance
    }
  }
`;
  return gql(queryString);
};

export const LIQUID_POSITIONS = gql`
  query liquidityPositions($user: Bytes!, $allPairs: [Bytes]!) {
    liquidityPositions(where: { user: $user }, where: { pair_in: $allPairs }) {
      pair {
        id
      }
      liquidityTokenBalance
    }
  }
`;
