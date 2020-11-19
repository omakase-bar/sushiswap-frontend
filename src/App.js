import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
//import { isMobile } from "react-device-detect";
import BoringApp from "./services/boring";

import CoinLoader from "./components/CoinLoader";
import BentoBox from "./pages/BentoBox";
import Dashboard from "./sections/Dashboard";
//import Home from "./pages/Home";
//import Tokens from "./pages/Tokens";
import Token from "./pages/Token";
//import Pairs from "./pages/Pairs";
import Pair from "./pages/Pair";
//import Pools from "./pages/Pools";
//import Accounts from "./pages/Accounts";
//import Governance from "./pages/Governance";
//import Grants from "./pages/Grants";
//import Faqs from "./pages/Faqs";
//import About from "./pages/About";
//import OmakaseBar from "./pages/OmakaseBar";
import Wallet from "./pages/Wallet";
//import WeeklyMenu from "./pages/WeeklyMenu";
// Widgets
import WidgetAbout from "./components/Cards/About";
import WidgetBalance from "./components/Cards/Balance/Layout";
import WidgetResources from "./components/Cards/Resources/Layout";
import WidgetSocialMedia from "./components/Cards/SocialMedia/Layout";
import WidgetSummary from "./components/Cards/Summary";
import WidgetGovernanceActions from "./components/Cards/Governance/Actions/Layout";
import WidgetGovernanceElection from "./components/Cards/Governance/Multisig/Layout";
import WidgetWeeklyPrevious from "./components/Table/PoolsWeeklyApollo";
import WidgetWeeklyCurrent from "./components/Table/PoolsWeeklyApollo";
// Design Proposals
// import ProposalLanding from "./playground/Landing";
// import SushiswapSDK from "./components/Table/Queries/PoolsBoringCrypto";

// import WidgetSwap from "./services/exchange/pages/Swap";
// import WidgetPool from "./services/exchange/pages/Pool";

// V1 Dependenices
// import { UseWalletProvider } from "use-wallet";
// import FarmsProvider from "./sushiswap/contexts/Farms";
// import ModalsProvider from "./sushiswap/contexts/Modals";
// import TransactionProvider from "./sushiswap/contexts/Transactions";
// import SushiProvider from "./sushiswap/contexts/SushiProvider";
// import theme from "./sushiswap/theme";

import AnalyticsGlobalDataContextProvider from "./services/analytics/contexts/globalData";
import AnalyticsApplicationContextProvider from "./services/analytics/contexts/application";

//Services - Shared Dependencies
import { ThemeProvider } from "styled-components";

//Services - Frontend Dependencies
import { UseWalletProvider } from "use-wallet";
import FarmsProvider from "./services/frontend/contexts/Farms";
import ServicesModalsProvider from "./services/frontend/contexts/Modals";
import TransactionProvider from "./services/frontend/contexts/Transactions";
import SushiProvider from "./services/frontend/contexts/SushiProvider";
import theme from "./services/frontend/theme";

//Services - Vision Dependencies
import VisionThemeProvider from "./services/vision/Theme";
import { GlobalStyle } from "./services/vision/Theme";
import LocalStorageContextProvider, {
  Updater as LocalStorageContextUpdater,
} from "./services/vision/contexts/LocalStorage";
import TokenDataContextProvider, { Updater as TokenDataContextUpdater } from "./services/vision/contexts/TokenData";
import GlobalDataContextProvider from "./services/vision/contexts/GlobalData";
import PairDataContextProvider, { Updater as PairDataContextUpdater } from "./services/vision/contexts/PairData";
import ApplicationContextProvider from "./services/vision/contexts/Application";
import UserContextProvider from "./services/vision/contexts/User";
import { ApolloProvider } from "react-apollo";
import LocalLoader from "./services/vision/components/LocalLoader";
import { useGlobalData, useGlobalChartData } from "./services/vision/contexts/GlobalData";
import { useLatestBlock } from "./services/vision/contexts/Application";
import { isAddress } from "./services/vision/utils";

//Services - Exchange Dependencies
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { NetworkContextName } from "./services/exchange/constants";
import store from "./services/exchange/state";
import ApplicationUpdater from "./services/exchange/state/application/updater";
import ListsUpdater from "./services/exchange/state/lists/updater";
import MulticallUpdater from "./services/exchange/state/multicall/updater";
import TransactionUpdater from "./services/exchange/state/transactions/updater";
import UserUpdater from "./services/exchange/state/user/updater";
import { FixedGlobalStyle, ThemedGlobalStyle } from "./services/exchange/theme";
import ExchangeThemeProvider from "./services/exchange/theme";
import getLibrary from "./services/exchange/utils/getLibrary";
import Web3ReactManager from "./services/exchange/components/Web3ReactManager";

import AddLiquidity from "./services/exchange/pages/AddLiquidity";
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from "./services/exchange/pages/AddLiquidity/redirects-secondary";
import MigrateV1 from "./services/exchange/pages/MigrateV1";
import MigrateV1Exchange from "./services/exchange/pages/MigrateV1/MigrateV1Exchange";
import RemoveV1Exchange from "./services/exchange/pages/MigrateV1/RemoveV1Exchange";
import Pool from "./services/exchange/pages/Pool";
import PoolFinder from "./services/exchange/pages/PoolFinder";
import RemoveLiquidity from "./services/exchange/pages/RemoveLiquidity";
import { RedirectOldRemoveLiquidityPathStructure } from "./services/exchange/pages/RemoveLiquidity/redirects";
import { RedirectPathToSwapOnly, RedirectToSwap } from "./services/exchange/pages/Swap/redirects";
import SwapWrapper from "./pages/Swap";
import PoolWrapper from "./pages/Pool";

// Services - Lite Dependancies
import { ContextProvider as LiteProvider } from "./services/lite/context";

import ModalsProvider from "./shared/contexts/ModalsContext";
// import NoticeModal from "./components/Modals/NoticeStandalone";
// import useModalOpen from "./shared/hooks/useModalOpen";

const App = () => {
  const globalData = useGlobalData();
  const globalChartData = useGlobalChartData();
  const latestBlock = useLatestBlock();
  // const notice = useModalOpen();
  return (
    <>
      {latestBlock &&
      globalData &&
      Object.keys(globalData).length > 0 &&
      globalChartData &&
      Object.keys(globalChartData).length > 0 ? (
        <>
          {/* <NoticeModal isOpen={notice.isOpen} closeModal={notice.hide} /> */}
          <Router>
            <Web3ReactManager>
              <Switch>
                {/* Playground Routes */}
                <Route exact path="/boring" component={BoringApp} />
                <Route exact path="/wallet" component={Wallet} />
                <Route exact path="/widget/bentobox" component={BentoBox} />
                {/* Dashboard Routes */}
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/home" component={Dashboard} />
                <Route exact path="/omakase" component={Dashboard} />
                <Route exact path="/weekly" component={Dashboard} />
                <Route exact path="/tokens" component={Dashboard} />
                <Route exact path="/pools" component={Dashboard} />
                <Route exact path="/pairs" component={Dashboard} />
                <Route exact path="/pair/:pairId" component={Dashboard} />
                <Route exact path="/governance" component={Dashboard} />
                <Route exact path="/about" component={Dashboard} />
                <Route exact path="/faq" component={Dashboard} />
                <Route exact path="/faqs" component={Dashboard} />
                <Route exact path="/faq" component={Dashboard} />
                <Route exact path="/faqs" component={Dashboard} />
                <Route exacts strict path="/token/:tokenAddress" component={Dashboard} />
                <Route exacts strict path="/pair/:pairAddress" component={Dashboard} />
                {/* <Route exact path="/bentobox" component={Dashboard} /> */}
                {/* <Route
                  exacts
                  strict
                  path="/token/:tokenAddress"
                  render={({ match }) => {
                    if (isAddress(match.params.tokenAddress.toLowerCase())) {
                      return <Token address={match.params.tokenAddress.toLowerCase()} />;
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
                      return <Pair pairAddress={match.params.pairAddress.toLowerCase()} />;
                    } else {
                      return <Redirect to="/home" />;
                    }
                  }}
                /> */}
                <Route exact path="/widgets/social-media" component={WidgetSocialMedia} />
                <Route exact path="/widgets/resources" component={WidgetResources} />
                <Route exact path="/widgets/summary" component={WidgetSummary} />
                <Route exact path="/widgets/balance" component={WidgetBalance} />
                <Route exact path="/widgets/governance/actions" component={WidgetGovernanceActions} />
                <Route exact path="/widgets/governance/election" component={WidgetGovernanceElection} />
                <Route exact path="/widgets/about" component={WidgetAbout} />
                <Route exact path="/widgets/weekly/previous" component={WidgetWeeklyPrevious} />
                <Route exact path="/widgets/weekly/current" component={WidgetWeeklyCurrent} />
                {/* Exchange Routes */}
                <Route exact strict path="/swap" component={SwapWrapper} />
                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
                <Route exact strict path="/find" component={PoolFinder} />
                <Route exact strict path="/pool" component={PoolWrapper} />
                <Route exact strict path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Redirect to="/home" />
                {/* 404 or Redirect */}
                <Redirect to="/home" />
              </Switch>
            </Web3ReactManager>
          </Router>
        </>
      ) : (
        <CoinLoader />
        // <LocalLoader fill="true" />
      )}
    </>
  );
};

const servicesProviders = ({ children }) => {
  return (
    <>
      <SushiExchangeProviders>
        <SushiVisionProviders>
          <SushiFrontendProviders>
            <SushiLiteProviders>
              <ModalsProvider>
                <App />
              </ModalsProvider>
            </SushiLiteProviders>
          </SushiFrontendProviders>
        </SushiVisionProviders>
      </SushiExchangeProviders>
    </>
  );
};

const SushiLiteProviders = ({ children }) => {
  return <LiteProvider>{children}</LiteProvider>;
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
                  <ServicesModalsProvider>{children}</ServicesModalsProvider>
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

export default servicesProviders;
