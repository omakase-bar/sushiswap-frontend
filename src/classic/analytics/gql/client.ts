import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/id/QmePtiMXjoFp5YiJeraZhp6YsBQNpLKCKQ4q8DFUjrSk5C'
  }),
  cache: new InMemoryCache(),
})

export const sushiClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/zippoxer/sushiswap',
  }),
  cache: new InMemoryCache(),
})

export const uniClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2',
  }),
  cache: new InMemoryCache(),
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
  }),
  cache: new InMemoryCache(),
})
