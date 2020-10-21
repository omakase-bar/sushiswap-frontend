import BigNumber from "bignumber.js/bignumber";

export const SUBTRACT_GAS_LIMIT = 100000;

const ONE_MINUTE_IN_SECONDS = new BigNumber(60);
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60);
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24);
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365);

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber("4294967295"), // 2**32-1
  ONES_127: new BigNumber("340282366920938463463374607431768211455"), // 2**128-1
  ONES_255: new BigNumber(
    "115792089237316195423570985008687907853269984665640564039457584007913129639935"
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber("1e18"),
};

export const addressMap = {
  uniswapFactory: "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",
  uniswapFactoryV2: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  YFI: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
  YCRV: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
  UNIAmpl: "0xc5be99a02c6857f9eac67bbce58df5572498f40c",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  UNIRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  MKR: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
  SNX: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
  COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
  LEND: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
  SUSHIYCRV: "0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726",
};

export const contractAddresses = {
  sushi: {
    1: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
  },
  masterChef: {
    1: "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd",
  },
  weth: {
    1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  },
  xSushi: {
    1: "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
  },
};

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

// Week 1:
// xSUSHI/WETH: 19
// cDAI/DAI: 20
// WBTC/WETH: 21
// CREAM/WETH: 22
// WETH/MEME: 23
// wNXM/WETH: 24
// yUSD/WETH: 25
// WBTC/yUSD: 26
// CRO/WETH: 27
// WBTC/renBTC: 28

// Week 2:
// CREAM/WETH: 22
// wNXM/WETH: 24
// yUSD/WETH: 25
// OMG/WETH: 36
// PICKLE/WETH: 32
// CORE/WETH: 33
// MKR/WETH: 34
// wBTC/tBTC: 35
// Hegic/WETH: 31
// AAVE/WETH: 37

// week1: ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
// week2: ["22", "24", "25", "31", "32", "33", "34", "35", "36", "37"],
// week3: [ 22, 24, 32, 33, 38, 39, 40, 41, 42]

export const menus = {
  current: [22, 24, 32, 33, 38, 39, 40, 41, 42],
  upcoming: [],
  previous: [19, 20, 21, 23, 25, 26, 27, 28, 31, 34, 35, 36, 37],
};

export const supportedPools = [
  {
    pid: 12,
    lpAddresses: {
      "1": "0x795065dCc9f64b5614C407a6EFDC400DA6221FB0",
    },
    tokenAddresses: {
      "1": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    },
    name: "Sushi Party!",
    symbol: "SUSHI-ETH SLP",
    tokenSymbol: "SUSHI",
    icon: "🍣",
    uniswapPair: "SUSHI/ETH",
    lpToken: "0x795065dCc9f64b5614C407a6EFDC400DA6221FB0",
    allocPoint: "4796",
  },
  {
    pid: 0,
    lpAddresses: {
      "1": "0x06da0fd433C1A5d7a4faa01111c044910A184553",
    },
    tokenAddresses: {
      "1": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    name: "Tether Turtle",
    symbol: "USDT-ETH SLP",
    tokenSymbol: "USDT",
    icon: "🐢",
    uniswapPair: "USDT/ETH",
    lpToken: "0x06da0fd433C1A5d7a4faa01111c044910A184553",
    allocPoint: "1918",
  },
  {
    pid: 1,
    lpAddresses: {
      "1": "0x397FF1542f962076d0BFE58eA045FfA2d347ACa0",
    },
    tokenAddresses: {
      "1": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    },
    name: "Circle Snail",
    symbol: "USDC-ETH SLP",
    tokenSymbol: "USDC",
    icon: "🐌",
    uniswapPair: "USDC/ETH",
    lpToken: "0x397FF1542f962076d0BFE58eA045FfA2d347ACa0",
    allocPoint: "2320",
  },
  {
    pid: 2,
    lpAddresses: {
      "1": "0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f",
    },
    tokenAddresses: {
      "1": "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    name: "Donald DAI",
    symbol: "DAI-ETH SLP",
    tokenSymbol: "DAI",
    icon: "🦆",
    uniswapPair: "DAI/ETH",
    lpToken: "0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f",
    allocPoint: "2320",
  },
  {
    pid: 3,
    lpAddresses: {
      "1": "0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539",
    },
    tokenAddresses: {
      "1": "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    },
    name: "Spartan Dollar",
    symbol: "SUSD-ETH SLP",
    tokenSymbol: "SUSD",
    icon: "🦍",
    uniswapPair: "sUSD/ETH",
    lpToken: "0xF1F85b2C54a2bD284B1cf4141D64fD171Bd85539",
    allocPoint: "1000",
  },
  {
    pid: 4,
    lpAddresses: {
      "1": "0x31503dcb60119a812fee820bb7042752019f2355",
    },
    tokenAddresses: {
      "1": "0xc00e94cb662c3520282e6f5717214004a7f26888",
    },
    name: "Compound Truffle",
    symbol: "COMP-ETH SLP",
    tokenSymbol: "COMP",
    icon: "🍄",
    uniswapPair: "COMP/ETH",
    lpToken: "0x31503dcb60119a812fee820bb7042752019f2355",
    allocPoint: "1000",
  },
  {
    pid: 5,
    lpAddresses: {
      "1": "0x5E63360E891BD60C69445970256C260b0A6A54c6",
    },
    tokenAddresses: {
      "1": "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
    },
    name: "Aave Boar",
    symbol: "LEND-ETH SLP",
    tokenSymbol: "LEND",
    icon: "🐗",
    uniswapPair: "LEND/ETH",
    lpToken: "0x5E63360E891BD60C69445970256C260b0A6A54c6",
    allocPoint: "1000",
  },
  {
    pid: 6,
    lpAddresses: {
      "1": "0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470",
    },
    tokenAddresses: {
      "1": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    },
    name: "Synthetic Snake",
    symbol: "SNX-ETH SLP",
    tokenSymbol: "SNX",
    icon: "🐍",
    uniswapPair: "SNX/ETH",
    lpToken: "0xA1d7b2d891e3A1f9ef4bBC5be20630C2FEB1c470",
    allocPoint: "1000",
  },
  {
    pid: 7,
    lpAddresses: {
      "1": "0x001b6450083e531a5a7bf310bd2c1af4247e23d4",
    },
    tokenAddresses: {
      "1": "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
    },
    name: "Umami Squid",
    symbol: "UMA-ETH SLP",
    tokenSymbol: "UMA",
    icon: "🦑",
    uniswapPair: "UMA/ETH",
    lpToken: "0x001b6450083e531a5a7bf310bd2c1af4247e23d4",
    allocPoint: "1000",
  },
  {
    pid: 8,
    lpAddresses: {
      "1": "0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967",
    },
    tokenAddresses: {
      "1": "0x514910771af9ca656af840dff83e8264ecf986ca",
    },
    name: "Toadie Marine",
    symbol: "LINK-ETH SLP",
    tokenSymbol: "LINK",
    icon: "🐸",
    uniswapPair: "LINK/ETH",
    lpToken: "0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967",
    allocPoint: "1000",
  },
  {
    pid: 9,
    lpAddresses: {
      "1": "0xA75F7c2F025f470355515482BdE9EFA8153536A8",
    },
    tokenAddresses: {
      "1": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    },
    name: "Band-osaurus",
    symbol: "BAND-ETH SLP",
    tokenSymbol: "BAND",
    icon: "🦖",
    uniswapPair: "BAND/ETH",
    lpToken: "0xA75F7c2F025f470355515482BdE9EFA8153536A8",
    allocPoint: "1000",
  },
  {
    pid: 10,
    lpAddresses: {
      "1": "0xCb2286d9471cc185281c4f763d34A962ED212962",
    },
    tokenAddresses: {
      "1": "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
    },
    name: "Ample Chicks",
    symbol: "AMPL-ETH SLP",
    tokenSymbol: "AMPL",
    icon: "🐥",
    uniswapPair: "AMPL/ETH",
    lpToken: "0xCb2286d9471cc185281c4f763d34A962ED212962",
    allocPoint: "1000",
  },
  {
    pid: 11,
    lpAddresses: {
      "1": "0x088ee5007C98a9677165D78dD2109AE4a3D04d0C",
    },
    tokenAddresses: {
      "1": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
    },
    name: "YFI Whale",
    symbol: "YFI-ETH SLP",
    tokenSymbol: "YFI",
    icon: "🐋",
    uniswapPair: "YFI/ETH",
    lpToken: "0x088ee5007C98a9677165D78dD2109AE4a3D04d0C",
    allocPoint: "2320",
  },
  {
    pid: 13,
    lpAddresses: {
      "1": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
    },
    tokenAddresses: {
      "1": "0x408e41876cccdc0f92210600ef50372656052a38",
    },
    name: "REN Rhino",
    symbol: "REN-ETH SLP",
    tokenSymbol: "REN",
    icon: "🦏",
    uniswapPair: "REN/ETH",
    lpToken: "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
    allocPoint: "200",
  },
  {
    pid: 14,
    lpAddresses: {
      "1": "0xaad22f5543fcdaa694b68f94be177b561836ae57",
    },
    tokenAddresses: {
      "1": "0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5",
    },
    name: "BASED Bull",
    symbol: "BASED-sUSD SLP",
    tokenSymbol: "BASED",
    icon: "🐂",
    uniswapPair: "BASED/sUSD",
    lpToken: "0xaad22f5543fcdaa694b68f94be177b561836ae57",
    allocPoint: "0",
  },
  {
    pid: 15,
    lpAddresses: {
      "1": "0x117d4288b3635021a3d612fe05a3cbf5c717fef2",
    },
    tokenAddresses: {
      "1": "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
    },
    name: "SRM Shark",
    symbol: "SRM-ETH SLP",
    tokenSymbol: "SRM",
    icon: "🦈",
    uniswapPair: "SRM/ETH",
    lpToken: "0x117d4288b3635021a3d612fe05a3cbf5c717fef2",
    allocPoint: "200",
  },
  {
    pid: 16,
    lpAddresses: {
      "1": "0x95b54c8da12bb23f7a5f6e26c38d04acc6f81820",
    },
    tokenAddresses: {
      "1": "0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a",
    },
    name: "YAMv2",
    symbol: "YAMv2-ETH SLP",
    tokenSymbol: "YAMv2",
    icon: "🍠",
    uniswapPair: "YAMv2/ETH",
    lpToken: "0x95b54c8da12bb23f7a5f6e26c38d04acc6f81820",
    allocPoint: "200",
  },
  {
    pid: 17,
    lpAddresses: {
      "1": "0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009",
    },
    tokenAddresses: {
      "1": "0xD533a949740bb3306d119CC777fa900bA034cd52",
    },
    name: "CRV Crocodile",
    symbol: "CRV-ETH SLP",
    tokenSymbol: "CRV",
    icon: "🐊",
    uniswapPair: "CRV/ETH",
    lpToken: "0x58Dc5a51fE44589BEb22E8CE67720B5BC5378009",
    allocPoint: "200",
  },
  {
    pid: 18,
    lpAddresses: {
      "1": "0xdafd66636e2561b0284edde37e42d192f2844d40",
    },
    tokenAddresses: {
      "1": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    },
    name: "UNI Unicorn",
    symbol: "UNI-ETH SLP",
    tokenSymbol: "UNI",
    icon: "🦄",
    uniswapPair: "UNI/ETH",
    lpToken: "0xdafd66636e2561b0284edde37e42d192f2844d40",
    allocPoint: "200",
  },
  {
    pid: 19,
    lpAddresses: {
      "1": "0x36e2FCCCc59e5747Ff63a03ea2e5C0c2C14911e7",
    },
    tokenAddresses: {
      "1": "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
    },
    name: "Chef's Menu",
    symbol: "xSUSHI-ETH SLP",
    tokenSymbol: "xSUSHI",
    icon: "👨🏻‍🍳",
    uniswapPair: "xSUSHI/ETH",
    lpToken: "0x36e2FCCCc59e5747Ff63a03ea2e5C0c2C14911e7",
    allocPoint: "0",
  },
  {
    pid: 20,
    lpAddresses: {
      "1": "0x0Cfe7968e7c34A51217a7C9b9dc1690F416E027e",
    },
    tokenAddresses: {
      "1": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
    },
    name: "Chef's Menu",
    symbol: "cDAI-DAI SLP",
    tokenSymbol: "cDAI",
    icon: "👨🏻‍🍳",
    uniswapPair: "cDAI/DAI",
    lpToken: "0x0Cfe7968e7c34A51217a7C9b9dc1690F416E027e",
    allocPoint: "0",
  },
  {
    pid: 21,
    lpAddresses: {
      "1": "0xceff51756c56ceffca006cd410b03ffc46dd3a58",
    },
    tokenAddresses: {
      "1": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    },
    name: "Chef's Menu",
    symbol: "WBTC-ETH SLP",
    tokenSymbol: "WBTC",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "WBTC/ETH",
    lpToken: "0xceff51756c56ceffca006cd410b03ffc46dd3a58",
    allocPoint: "0",
  },
  {
    pid: 22,
    lpAddresses: {
      "1": "0xf169CeA51EB51774cF107c88309717ddA20be167",
    },
    tokenAddresses: {
      "1": "0x2ba592F78dB6436527729929AAf6c908497cB200",
    },
    name: "Chef's Menu",
    symbol: "CREAM-ETH SLP",
    tokenSymbol: "CREAM",
    icon: "👨🏻‍🍳",
    uniswapPair: "CREAM/ETH",
    lpToken: "0xf169CeA51EB51774cF107c88309717ddA20be167",
    allocPoint: "200",
  },
  {
    pid: 23,
    lpAddresses: {
      "1": "0x17b3C19Bd640a59E832AB73eCcF716CB47419846",
    },
    tokenAddresses: {
      "1": "0xD5525D397898e5502075Ea5E830d8914f6F0affe",
    },
    name: "Chef's Menu",
    symbol: "MEME-ETH SLP",
    tokenSymbol: "MEME",
    icon: "👨🏻‍🍳",
    uniswapPair: "MEME/ETH",
    lpToken: "0x17b3C19Bd640a59E832AB73eCcF716CB47419846",
    allocPoint: "0",
  },
  {
    pid: 24,
    lpAddresses: {
      "1": "0xFcff3b04C499A57778ae2CF05584ab24278A7FCb",
    },
    tokenAddresses: {
      "1": "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
    },
    name: "Chef's Menu",
    symbol: "wNXM-ETH SLP",
    tokenSymbol: "wNXM",
    icon: "👨🏻‍🍳",
    uniswapPair: "wNXM/ETH",
    lpToken: "0xFcff3b04C499A57778ae2CF05584ab24278A7FCb",
    allocPoint: "200",
  },
  {
    pid: 25,
    lpAddresses: {
      "1": "0x382c4a5147Fd4090F7BE3A9Ff398F95638F5D39E",
    },
    tokenAddresses: {
      "1": "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c",
    },
    name: "Chef's Menu",
    symbol: "yUSD-ETH SLP",
    tokenSymbol: "yUSD",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "yUSD/ETH",
    lpToken: "0x382c4a5147Fd4090F7BE3A9Ff398F95638F5D39E",
    allocPoint: "0",
  },
  {
    pid: 26,
    lpAddresses: {
      "1": "0x2024324a99231509a3715172d4f4f4e751b38d4d",
    },
    tokenAddresses: {
      "1": "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c",
    },
    name: "Chef's Menu",
    symbol: "yUSD-WBTC SLP",
    tokenSymbol: "yUSD",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "yUSD/WBTC",
    lpToken: "0x2024324a99231509a3715172d4f4f4e751b38d4d",
    allocPoint: "0",
  },
  {
    pid: 27,
    lpAddresses: {
      "1": "0x0be88ac4b5C81700acF3a606a52a31C261a24A35",
    },
    tokenAddresses: {
      "1": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    },
    name: "Chef's Menu",
    symbol: "CRO-ETH SLP",
    tokenSymbol: "CRO",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "CRO/ETH",
    lpToken: "0x0be88ac4b5C81700acF3a606a52a31C261a24A35",
    allocPoint: "0",
  },
  {
    pid: 28,
    lpAddresses: {
      "1": "0x518d6CE2D7A689A591Bf46433443C31615b206C5",
    },
    tokenAddresses: {
      "1": "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
    },
    name: "Chef's Menu",
    symbol: "renBTC-WBTC SLP",
    tokenSymbol: "renBTC",
    icon: "‍‍👨🏻‍🍳",
    uniswapPair: "renBTC/WBTC",
    lpToken: "0x518d6CE2D7A689A591Bf46433443C31615b206C5",
    allocPoint: "0",
  },
  {
    pid: 31,
    lpAddresses: {
      "1": "0x6463bd6026a2e7bfab5851b62969a92f7cca0eb6",
    },
    tokenAddresses: {
      "1": "0x584bC13c7D411c00c01A62e8019472dE68768430",
    },
    name: "Chef's Menu",
    symbol: "HEGIC-ETH SLP",
    tokenSymbol: "HEGIC",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "HEGIC/ETH",
    lpToken: "0x6463bd6026a2e7bfab5851b62969a92f7cca0eb6",
    allocPoint: "0",
  },
  {
    pid: 32,
    lpAddresses: {
      "1": "0x2dbc7dd86c6cd87b525bd54ea73ebeebbc307f68",
    },
    tokenAddresses: {
      "1": "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
    },
    name: "Chef's Menu",
    symbol: "wBTC-tBTC SLP",
    tokenSymbol: "tBTC",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "wBTC/tBTC",
    lpToken: "0x2dbc7dd86c6cd87b525bd54ea73ebeebbc307f68",
    allocPoint: "200",
  },
  {
    pid: 33,
    lpAddresses: {
      "1": "0xba13afecda9beb75de5c56bbaf696b880a5a50dd",
    },
    tokenAddresses: {
      "1": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    },
    name: "Chef's Menu",
    symbol: "MKR-ETH SLP",
    tokenSymbol: "MKR",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "MKR/ETH",
    lpToken: "0xba13afecda9beb75de5c56bbaf696b880a5a50dd",
    allocPoint: "200",
  },
  {
    pid: 34,
    lpAddresses: {
      "1": "0x68c6d02d44e16f1c20088731ab032f849100d70f",
    },
    tokenAddresses: {
      "1": "0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
    },
    name: "Chef's Menu",
    symbol: "CORE-ETH SLP",
    tokenSymbol: "CORE",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "CORE/ETH",
    lpToken: "0x68c6d02d44e16f1c20088731ab032f849100d70f",
    allocPoint: "0",
  },
  {
    pid: 35,
    lpAddresses: {
      "1": "0x269db91fc3c7fcc275c2e6f22e5552504512811c",
    },
    tokenAddresses: {
      "1": "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
    },
    name: "Chef's Menu",
    symbol: "PICKLE-ETH SLP",
    tokenSymbol: "PICKLE",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "PICKLE/ETH",
    lpToken: "0x269db91fc3c7fcc275c2e6f22e5552504512811c",
    allocPoint: "0",
  },
  {
    pid: 36,
    lpAddresses: {
      "1": "0x742c15d71ea7444964bc39b0ed729b3729adc361",
    },
    tokenAddresses: {
      "1": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    },
    name: "Chef's Menu",
    symbol: "OMG-ETH SLP",
    tokenSymbol: "OMG",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "OMG/ETH",
    lpToken: "0x742c15d71ea7444964bc39b0ed729b3729adc361",
    allocPoint: "0",
  },
  {
    pid: 37,
    lpAddresses: {
      1: "0xD75EA151a61d06868E31F8988D28DFE5E9df57B4",
    },
    tokenAddresses: {
      1: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    },
    name: "Chef's Menu",
    symbol: "AAVE-ETH SLP",
    tokenSymbol: "AAVE",
    icon: "‍👨🏻‍🍳",
    uniswapPair: "AAVE/ETH",
    lpToken: "0xD75EA151a61d06868E31F8988D28DFE5E9df57B4",
    allocPoint: "0",
  },
  {
    pid: 38,
    lpAddresses: {
      1: '0x15e86e6f65ef7ea1dbb72a5e51a07926fb1c82e3',
    },
    tokenAddresses: {
      1: '0xff20817765cb7f73d4bde2e66e067e58d11095c2',
    },
    name: "Chef's Menu",
    symbol: 'AMP-ETH SLP',
    tokenSymbol: 'AMP',
    icon: '‍👨🏻‍🍳',
    uniswapPair: "AMP/ETH",
    lpToken: "0x15e86e6f65ef7ea1dbb72a5e51a07926fb1c82e3",
    allocPoint: "200",
  },
  {
    pid: 39,
    lpAddresses: {
      1: '0xd597924b16cc1904d808285bc9044fd51ceeead7',
    },
    tokenAddresses: {
      1: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    },
    name: "Chef's Menu",
    symbol: 'xSUSHI-USDC SLP',
    tokenSymbol: 'xSUSHI',
    icon: '‍👨🏻‍🍳',
    uniswapPair: "xSUSHI/USDC",
    lpToken: "0xd597924b16cc1904d808285bc9044fd51ceeead7",
    allocPoint: "200",
  },
  {
    pid: 40,
    lpAddresses: {
      1: '0x5a2943b25ce0678dc0b351928d2db331a55d94ea',
    },
    tokenAddresses: {
      1: '0x3F382DbD960E3a9bbCeaE22651E88158d2791550',
    },
    name: "Chef's Menu",
    symbol: 'GHST-ETH SLP',
    tokenSymbol: 'GHST',
    icon: '‍👨🏻‍🍳',
    uniswapPair: "GHST/ETH",
    lpToken: "0x5a2943b25ce0678dc0b351928d2db331a55d94ea",
    allocPoint: "200",
  },
  {
    pid: 41,
    lpAddresses: {
      1: '0x53aabccae8c1713a6a150d9981d2ee867d0720e8',
    },
    tokenAddresses: {
      1: '0xfca59cd816ab1ead66534d82bc21e7515ce441cf',
    },
    name: "Chef's Menu",
    symbol: 'RARI-ETH SLP',
    tokenSymbol: 'RARI',
    icon: '‍👨🏻‍🍳',
    uniswapPair: "RARI/ETH",
    lpToken: "0x53aabccae8c1713a6a150d9981d2ee867d0720e8",
    allocPoint: "200",
  },
  {
    pid: 42,
    lpAddresses: {
      1: '0x34b13f8cd184f55d0bd4dd1fe6c07d46f245c7ed',
    },
    tokenAddresses: {
      1: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
    },
    name: "Chef's Menu",
    symbol: 'DPI-ETH SLP',
    tokenSymbol: 'DPI',
    icon: '‍👨🏻‍🍳',
    uniswapPair: "DPI/ETH",
    lpToken: "0x34b13f8cd184f55d0bd4dd1fe6c07d46f245c7ed",
    allocPoint: "200",
  }
];
