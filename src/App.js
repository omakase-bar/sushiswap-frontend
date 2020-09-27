import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import { isMobile } from "react-device-detect";

import Home from "./pages/Home";
import Tokens from "./pages/Tokens";
import Token from "./pages/Token";
import Pairs from "./pages/Pairs";
import Pair from "./pages/Pair";
import Pools from "./pages/Pools";
import Accounts from "./pages/Accounts";
import Governance from "./pages/Governance";
import Grants from "./pages/Grants";
import Faqs from "./pages/Faqs";
import About from "./pages/About";
import OmakaseBar from "./pages/OmakaseBar";
import SushiBar from "./pages/SushiBar";
import Wallet from "./pages/Wallet";
// Widgets
import WidgetAbout from "./components/Cards/About";
import WidgetBalance from "./components/Cards/Balance/Layout";
import WidgetResources from "./components/Cards/Resources/Layout";
import WidgetSocialMedia from "./components/Cards/SocialMedia/Layout";
import WidgetSummary from "./components/Cards/Summary";
import WidgetGovernanceActions from "./components/Cards/GovernanceActions/Layout";
import WidgetGovernanceElection from "./components/Cards/GovernanceMultisig/Layout";

// import WidgetSwap from "./classic/exchange/pages/Swap";
// import WidgetPool from "./classic/exchange/pages/Pool";

// V1 Dependenices
// import { UseWalletProvider } from "use-wallet";
// import FarmsProvider from "./sushiswap/contexts/Farms";
// import ModalsProvider from "./sushiswap/contexts/Modals";
// import TransactionProvider from "./sushiswap/contexts/Transactions";
// import SushiProvider from "./sushiswap/contexts/SushiProvider";
// import theme from "./sushiswap/theme";

import AnalyticsGlobalDataContextProvider from "./classic/analytics/contexts/globalData";
import AnalyticsApplicationContextProvider from "./classic/analytics/contexts/application";

//Classic Shared Dependencies
import { ThemeProvider } from "styled-components";

//Classic - Frontend Dependencies
import { UseWalletProvider } from "use-wallet";
import FarmsProvider from "./classic/frontend/contexts/Farms";
import ModalsProvider from "./classic/frontend/contexts/Modals";
import TransactionProvider from "./classic/frontend/contexts/Transactions";
import SushiProvider from "./classic/frontend/contexts/SushiProvider";
import theme from "./classic/frontend/theme";

// //Classic - Vision Dependencies
import VisionThemeProvider from "./classic/vision/Theme";
import { GlobalStyle } from "./classic/vision/Theme";
import LocalStorageContextProvider, {
  Updater as LocalStorageContextUpdater,
} from "./classic/vision/contexts/LocalStorage";
import TokenDataContextProvider, {
  Updater as TokenDataContextUpdater,
} from "./classic/vision/contexts/TokenData";
import GlobalDataContextProvider from "./classic/vision/contexts/GlobalData";
import PairDataContextProvider, {
  Updater as PairDataContextUpdater,
} from "./classic/vision/contexts/PairData";
import ApplicationContextProvider from "./classic/vision/contexts/Application";
import UserContextProvider from "./classic/vision/contexts/User";
import { ApolloProvider } from "react-apollo";
import LocalLoader from "./classic/vision/components/LocalLoader";
import {
  useGlobalData,
  useGlobalChartData,
} from "./classic/vision/contexts/GlobalData";
import { useLatestBlock } from "./classic/vision/contexts/Application";
import { isAddress } from "./classic/vision/utils";

//Classic - Exchange Dependencies
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { NetworkContextName } from "./classic/exchange/constants";
import store from "./classic/exchange/state";
import ApplicationUpdater from "./classic/exchange/state/application/updater";
import ListsUpdater from "./classic/exchange/state/lists/updater";
import MulticallUpdater from "./classic/exchange/state/multicall/updater";
import TransactionUpdater from "./classic/exchange/state/transactions/updater";
import UserUpdater from "./classic/exchange/state/user/updater";
import { FixedGlobalStyle, ThemedGlobalStyle } from "./classic/exchange/theme";
import ExchangeThemeProvider from "./classic/exchange/theme";
import getLibrary from "./classic/exchange/utils/getLibrary";
import Web3ReactManager from "./classic/exchange/components/Web3ReactManager";

import AddLiquidity from "./classic/exchange/pages/AddLiquidity";
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from "./classic/exchange/pages/AddLiquidity/redirects-secondary";
import MigrateV1 from "./classic/exchange/pages/MigrateV1";
import MigrateV1Exchange from "./classic/exchange/pages/MigrateV1/MigrateV1Exchange";
import RemoveV1Exchange from "./classic/exchange/pages/MigrateV1/RemoveV1Exchange";
import Pool from "./classic/exchange/pages/Pool";
import PoolFinder from "./classic/exchange/pages/PoolFinder";
import RemoveLiquidity from "./classic/exchange/pages/RemoveLiquidity";
import { RedirectOldRemoveLiquidityPathStructure } from "./classic/exchange/pages/RemoveLiquidity/redirects";

// import Swap from "./classic/exchange/pages/Swap";
import {
  RedirectPathToSwapOnly,
  RedirectToSwap,
} from "./classic/exchange/pages/Swap/redirects";

import SwapWrapper from "./pages/exchange/Swap";
import PoolWrapper from "./pages/exchange/Pool";

import UnderConstructionModal from "./components/Modals/UnderConstruction";
import useModalOpen from "./shared/hooks/useModalOpen";

const App = () => {
  const globalData = useGlobalData();
  const globalChartData = useGlobalChartData();
  const latestBlock = useLatestBlock();
  const construction = useModalOpen();
  return (
    <>
      {latestBlock &&
      globalData &&
      Object.keys(globalData).length > 0 &&
      globalChartData &&
      Object.keys(globalChartData).length > 0 ? (
        <>
          <UnderConstructionModal
            isOpen={construction.isOpen}
            closeModal={construction.hide}
          />
          <Router>
            <Web3ReactManager>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/wallet" component={Wallet} />
                <Route exact path="/omakase-bar" component={OmakaseBar} />
                <Route exact path="/sushi-bar" component={SushiBar} />
                <Route exact path="/tokens" component={Tokens} />
                <Route
                  exacts
                  strict
                  path="/token/:tokenAddress"
                  render={({ match }) => {
                    if (isAddress(match.params.tokenAddress.toLowerCase())) {
                      return (
                        <Token
                          address={match.params.tokenAddress.toLowerCase()}
                        />
                      );
                    } else {
                      return <Redirect to="/home" />;
                    }
                  }}
                />
                <Route
                  exacts
                  strict
                  path="/pair/:pairAddress"
                  render={({ match }) => {
                    if (isAddress(match.params.pairAddress.toLowerCase())) {
                      return (
                        <Pair
                          pairAddress={match.params.pairAddress.toLowerCase()}
                        />
                      );
                    } else {
                      return <Redirect to="/home" />;
                    }
                  }}
                />
                <Route exact path="/pools" component={Pools} />
                <Route exact path="/pairs" component={Pairs} />
                <Route exact path="/pair/:pairId" component={Pair} />
                <Route exact path="/governance" component={Governance} />
                <Route exact path="/about" component={About} />
                <Route exact path="/faq" component={Faqs} />
                <Route exact path="/faqs" component={Faqs} />
                <Route
                  exact
                  path="/widgets/social-media"
                  component={WidgetSocialMedia}
                />
                <Route
                  exact
                  path="/widgets/resources"
                  component={WidgetResources}
                />
                <Route
                  exact
                  path="/widgets/summary"
                  component={WidgetSummary}
                />
                <Route
                  exact
                  path="/widgets/balance"
                  component={WidgetBalance}
                />
                <Route
                  exact
                  path="/widgets/governance/actions"
                  component={WidgetGovernanceActions}
                />
                <Route
                  exact
                  path="/widgets/governance/election"
                  component={WidgetGovernanceElection}
                />
                <Route exact path="/widgets/about" component={WidgetAbout} />
                {/* <Route exact path="/widgets/swap" component={WidgetSwap} />
                <Route exact path="/widgets/pool" component={WidgetPool} /> */}

                {/* Exchange Routes */}
                <Route exact strict path="/swap" component={SwapWrapper} />
                <Route
                  exact
                  strict
                  path="/swap/:outputCurrency"
                  component={RedirectToSwap}
                />
                <Route
                  exact
                  strict
                  path="/send"
                  component={RedirectPathToSwapOnly}
                />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={PoolWrapper} />
                <Route
                  exact
                  strict
                  path="/create"
                  component={RedirectToAddLiquidity}
                />
                <Route exact path="/add" component={AddLiquidity} />
                <Route
                  exact
                  path="/add/:currencyIdA"
                  component={RedirectOldAddLiquidityPathStructure}
                />
                <Route
                  exact
                  path="/add/:currencyIdA/:currencyIdB"
                  component={RedirectDuplicateTokenIds}
                />
                {/* <Route
                  exact
                  strict
                  path="/remove/v1/:address"
                  component={RemoveV1Exchange}
                />
                <Route
                  exact
                  strict
                  path="/remove/:tokens"
                  component={RedirectOldRemoveLiquidityPathStructure}
                /> */}
                <Route
                  exact
                  strict
                  path="/remove/:currencyIdA/:currencyIdB"
                  component={RemoveLiquidity}
                />
                {/* <Route exact strict path="/migrate/v1" component={MigrateV1} />
                <Route
                  exact
                  strict
                  path="/migrate/v1/:address"
                  component={MigrateV1Exchange}
                /> */}
                <Redirect to="/home" />
              </Switch>
            </Web3ReactManager>
          </Router>
        </>
      ) : (
        <LocalLoader fill="true" />
      )}
    </>
  );
};

const ClassicProviders = ({ children }) => {
  return (
    <>
      <SushiExchangeProviders>
        <SushiVisionProviders>
          <SushiFrontendProviders>
            <App />
          </SushiFrontendProviders>
        </SushiVisionProviders>
      </SushiExchangeProviders>
    </>
  );
};

const SushiFrontendProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={1}
        connectors={{
          walletconnect: { rpcUrl: "https://mainnet.eth.aragon.network/" },
        }}
      >
        <SushiProvider>
          <TransactionProvider>
            <FarmsProvider>
              <AnalyticsApplicationContextProvider>
                <AnalyticsGlobalDataContextProvider>
                  <ModalsProvider>{children}</ModalsProvider>
                </AnalyticsGlobalDataContextProvider>
              </AnalyticsApplicationContextProvider>
            </FarmsProvider>
          </TransactionProvider>
        </SushiProvider>
      </UseWalletProvider>
    </ThemeProvider>
  );
};

const SushiVisionProviders = ({ children }) => {
  return (
    <>
      <SushiVisionContextProviders>
        <SushiVisionUpdaters />
        <VisionThemeProvider>
          <GlobalStyle />
          <ApolloProvider>{children}</ApolloProvider>
        </VisionThemeProvider>
      </SushiVisionContextProviders>
    </>
  );
};
const SushiVisionUpdaters = () => {
  return (
    <>
      <LocalStorageContextUpdater />
      <PairDataContextUpdater />
      <TokenDataContextUpdater />
    </>
  );
};
const SushiVisionContextProviders = ({ children }) => {
  return (
    <>
      <LocalStorageContextProvider>
        <ApplicationContextProvider>
          <TokenDataContextProvider>
            <GlobalDataContextProvider>
              <PairDataContextProvider>
                <UserContextProvider>{children}</UserContextProvider>
              </PairDataContextProvider>
            </GlobalDataContextProvider>
          </TokenDataContextProvider>
        </ApplicationContextProvider>
      </LocalStorageContextProvider>
    </>
  );
};

const SushiExchangeProviders = ({ children }) => {
  return (
    <>
      <SushiExchangeContextProviders>
        <SushiExchangeUpdaters />
        <ExchangeThemeProvider>
          <ThemedGlobalStyle />
          {children}
        </ExchangeThemeProvider>
      </SushiExchangeContextProviders>
    </>
  );
};
const SushiExchangeUpdaters = () => {
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  );
};
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);
const SushiExchangeContextProviders = ({ children }) => {
  return (
    <>
      <FixedGlobalStyle />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <Provider store={store}>{children}</Provider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </>
  );
};

// const V1Providers = ({ children }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <UseWalletProvider
//         chainId={1}
//         connectors={{
//           walletconnect: { rpcUrl: "https://mainnet.eth.aragon.network/" },
//         }}
//       >
//         <SushiProvider>
//           <TransactionProvider>
//             <FarmsProvider>
//               <ApplicationContextProvider>
//                 <GlobalDataContextProvider>
//                   <ModalsProvider>{children}</ModalsProvider>
//                 </GlobalDataContextProvider>
//               </ApplicationContextProvider>
//             </FarmsProvider>
//           </TransactionProvider>
//         </SushiProvider>
//       </UseWalletProvider>
//     </ThemeProvider>
//   );
// };

export default ClassicProviders;
