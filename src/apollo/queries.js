import gql from "graphql-tag";

export const SUSHI_POOLS = (ids, masterChefAddress) => {
  let queryString = `query pools {
    pairs(where: {id_in: ${JSON.stringify(ids)}}) {
        id
        token0 {
            id
            decimals
            symbol
        }
        token1 {
            id
            decimals
            symbol
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
