import { gql } from "apollo-boost";

export const ALL_PAIRS = gql`
  query pairs($skip: Int!) {
    pairs(skip: $skip) {
      id
    }
  }
`;

export const TOP_TOKENS = gql`
  query tokenDayDatas(
    $first: Int
    $skip: Int
    $where: TokenDayData_filter
    $orderBy: TokenDayData_orderBy
    $orderDirection: OrderDirection
  ) {
    tokenDayDatas(
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      token {
        id
        name
        symbol
      }
      totalLiquidityUSD
      dailyVolumeUSD
      priceUSD
    }
  }
`;

export const TOP_PAIRS = gql`
  query pairDayDatas(
    $first: Int
    $skip: Int
    $where: PairDayData_filter
    $orderBy: PairDayData_orderBy
    $orderDirection: OrderDirection
  ) {
    pairDayDatas(
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      pairAddress
      token0 {
        id
        name
        symbol
      }
      token1 {
        id
        name
        symbol
      }
      dailyVolumeUSD
      totalSupply
      reserveUSD
    }
  }
`;

export const RECENT_TRANSACTIONS = gql`
  query transactions(
    $first: Int
    $skip: Int
    $where: Transaction_filter
    $orderBy: Transaction_orderBy
    $orderDirection: OrderDirection
  ) {
    transactions(
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      timestamp
    }
  }
`;

export const TOP_LIQUIDITY = gql`
  query liquidityPositions(
    $first: Int
    $skip: Int
    $orderBy: LiquidityPosition_orderBy
    $orderDirection: OrderDirection
  ) {
    liquidityPositions(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      user {
        id
      }
      pair {
        id
        token0 {
          id
          name
          symbol
        }
        token1 {
          id
          name
          symbol
        }
      }
      liquidityTokenBalance
    }
  }
`;

// export const TOP_TOKENS = gql`
//   query uniswapDayData($id: ID!) {
//     uniswapDayData(id: $id) {
//       id
//       date
//       mostLiquidTokens {
//         token {
//           symbol
//           name
//         }
//         dailyVolumeToken
//         totalLiquidityUSD
//         priceUSD
//       }
//     }
//   }
// `;

export const ALL_TOKENS = gql`
  query tokens(
    $skip: Int
    $first: Int
    $orderBy: Token_orderBy
    $orderDirection: OrderDirection
  ) {
    tokens(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      name
      symbol
      totalSupply
      tradeVolume
      tradeVolumeUSD
      totalLiquidity
    }
  }
`;

export const GLOBAL_STATS = gql`
  query uniswapFactory($id: ID!) {
    uniswapFactory(id: $id) {
      totalVolumeUSD
      totalLiquidityUSD
      txCount
    }
  }
`;

export const DAI_QUERY = gql`
  query tokens($tokenAddress: Bytes!) {
    tokens(where: { id: $tokenAddress }) {
      derivedETH
      totalLiquidity
    }
  }
`;

export const ETH_PRICE_QUERY = gql`
  query ethPrice {
    bundle(id: "1") {
      ethprice
    }
  }
`;
