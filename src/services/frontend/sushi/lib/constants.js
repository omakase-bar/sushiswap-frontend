import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSushi: {
    1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272'
  }
}

/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: 12,
    lpAddresses: {
      1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Sushi Party!',
    symbol: 'SUSHI-ETH SLP',
    tokenSymbol: 'SUSHI',
    icon: '🍣',
  },
  {
    pid: 0,
    lpAddresses: {
      1: '0x06da0fd433C1A5d7a4faa01111c044910A184553',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Turtle',
    symbol: 'USDT-ETH SLP',
    tokenSymbol: 'USDT',
    icon: '🐢',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH SLP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: 'DAI-ETH SLP',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539',
    },
    tokenAddresses: {
      1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    },
    name: 'Spartan Dollar',
    symbol: 'SUSD-ETH SLP',
    tokenSymbol: 'SUSD',
    icon: '🦍',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0x001b6450083e531a5a7bf310bd2c1af4247e23d4',
    },
    tokenAddresses: {
      1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    },
    name: 'Umami Squid',
    symbol: 'UMA-ETH SLP',
    tokenSymbol: 'UMA',
    icon: '🦑',
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0xA75F7c2F025f470355515482BdE9EFA8153536A8',
    },
    tokenAddresses: {
      1: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    },
    name: 'Band-osaurus',
    symbol: 'BAND-ETH SLP',
    tokenSymbol: 'BAND',
    icon: '🦖',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: 'LINK-ETH SLP',
    tokenSymbol: 'LINK',
    icon: '🐸',
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0xCb2286d9471cc185281c4f763d34A962ED212962',
    },
    tokenAddresses: {
      1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    name: 'Ample Chicks',
    symbol: 'AMPL-ETH SLP',
    tokenSymbol: 'AMPL',
    icon: '🐥',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0x31503dcb60119a812fee820bb7042752019f2355',
    },
    tokenAddresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    name: 'Compound Truffle',
    symbol: 'COMP-ETH SLP',
    tokenSymbol: 'COMP',
    icon: '🍄',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0x5E63360E891BD60C69445970256C260b0A6A54c6',
    },
    tokenAddresses: {
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Boar',
    symbol: 'LEND-ETH SLP',
    tokenSymbol: 'LEND',
    icon: '🐗',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Synthetic Snake',
    symbol: 'SNX-ETH SLP',
    tokenSymbol: 'SNX',
    icon: '🐍',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: 'YFI-ETH SLP',
    tokenSymbol: 'YFI',
    icon: '🐋',
  },
  {
    pid: 13,
    lpAddresses: {
      1: '0x611cde65dea90918c0078ac0400a72b0d25b9bb1',
    },
    tokenAddresses: {
      1: '0x408e41876cccdc0f92210600ef50372656052a38',
    },
    name: 'REN Rhino',
    symbol: 'REN-ETH SLP',
    tokenSymbol: 'REN',
    icon: '🦏',
  },
  {
    pid: 14,
    lpAddresses: {
      1: '0xaad22f5543fcdaa694b68f94be177b561836ae57',
    },
    tokenAddresses: {
      1: '0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5',
    },
    name: 'BASED Bull',
    symbol: 'BASE-sUSD SLP',
    tokenSymbol: 'BASED',
    icon: '🐂',
  },
  {
    pid: 15,
    lpAddresses: {
      1: '0x117d4288b3635021a3d612fe05a3cbf5c717fef2',
    },
    tokenAddresses: {
      1: '0x476c5E26a75bd202a9683ffD34359C0CC15be0fF',
    },
    name: 'SRM Shark',
    symbol: 'SRM-ETH SLP',
    tokenSymbol: 'SRM',
    icon: '🦈',
  },
  {
    pid: 16,
    lpAddresses: {
      1: '0x95b54c8da12bb23f7a5f6e26c38d04acc6f81820',
    },
    tokenAddresses: {
      1: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
    },
    name: 'YAMv2',
    symbol: 'YAMv2-ETH SLP',
    tokenSymbol: 'YAMv2',
    icon: '🍠',
  },
  {
    pid: 17,
    lpAddresses: {
      1: '0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009',
    },
    tokenAddresses: {
      1: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    },
    name: 'CRV Crocodile',
    symbol: 'CRV-ETH SLP',
    tokenSymbol: 'CRV',
    icon: '🐊',
  },
]
