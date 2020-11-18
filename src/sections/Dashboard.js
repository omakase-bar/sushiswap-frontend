import React, { useState, useEffect, useRef, createContext, useContext, useReducer } from "react";
import { Route, Redirect } from "react-router-dom";
import SectionTabs from "../components/Tabs";
// Dashboard
import SearchHeader from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitles/Default";
//import MainSearch from "../components/Search/Desktop";
import MainSearch from "../services/vision/components/Search/secondary";
import CardSection from "../components/Cards/Section";
import useMenu from "../shared/hooks/useMenu";
// Overview
import CardCurrentMenu from "../components/Overview/CurrentMenu";
import CardMigrateNotice from "../components/Overview/MigrateNotice";
import CardMigrate from "../components/Cards/Migrate/Layout";
import CardTokenActions from "../components/Cards/TokenActions/Standalone";
import { CurrentMenuWrapper } from "../components/WeeklyMenu/Menus";
import CardChart from "../components/Cards/Chart";
import SushiGlobalChart from "../services/vision/components/GlobalChart";
import UniGlobalChart from "../services/analytics/components/charts/globalChart";
import Flickity from "react-flickity-component";
import GlobalStats from "../services/vision/components/GlobalStats/secondary";
import IntroBanner from "../components/Banners/Full";
// OmakaseBar
import CardSummary from "../components/Cards/Summary";
import CardBalance from "../components/Cards/Balance/Layout";
import CardResources from "../components/Cards/Resources/Layout";
import CardSocialMedia from "../components/Cards/SocialMedia/Layout";
import CardBalances from "../components/Cards/SushiBar/Balances";
import CardPositions from "../components/Cards/SushiBar/Positions";
import CardKitchen from "../components/Cards/SushiBar/Kitchen";
import CardServing from "../components/Cards/SushiBar/Serving";
// Menu of the Week
import WeeklyMenuInfo from "../components/WeeklyMenu/Hero";
import WeeklyMenus from "../components/WeeklyMenu/Menus";
import CurrentPools from "../components/Table/PoolsWeeklyApollo";
import PreviousPools from "../components/Table/PoolsWeeklyApollo";
// Tokens
import TokenList from "../services/vision/components/TokenList/secondary";
import { useAllTokenData } from "../services/vision/contexts/TokenData";
// Pools
import TablePools from "../components/Table/PoolsWeeklyApollo";
// Pairs
import { useAllPairData } from "../services/vision/contexts/PairData";
import PairList from "../services/vision/components/PairList/secondary";
// Pair
import { isAddress } from "../services/vision/utils";
import Pair from "../pages/Pair";
// Token
import Token from "../pages/Token";
// About
import CardAbout from "../components/Cards/About";
// Faq
import TableFAQ from "../components/Table/FAQ";
// Governance
import CardTimelock from "../components/Cards/Governance/Timelock/Layout";
import CardGovernanceMultisig from "../components/Cards/Governance/Multisig/Layout";
//import CardGovernanceActions from "../components/Cards/Governance/Actions/Layout";
// BentoBox
import BentoBox from "../pages/BentoBox";
import BentoBoxLogo from "../assets/img/bentobox.png";

import sushiData from "@sushiswap/sushi-data";

const SectionContext = createContext();
const sectionReducer = (state, action) => {
  switch (action.type) {
    case "update": {
      return { ...state, section: action.section };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
const SectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sectionReducer, { section: "" });
  const value = { state, dispatch };
  return <SectionContext.Provider value={value}>{children}</SectionContext.Provider>;
};
const useSectionState = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSectionState must be used within a SectionProvider");
  }
  return context;
};

const Dashboard = () => {
  return (
    <>
      <SectionProvider>
        <DashboardContainer>
          <DashboardRoutes />
        </DashboardContainer>
      </SectionProvider>
    </>
  );
};

export const DashboardContainer = ({ children }) => {
  const mobileMenu = useMenu();
  //const { state } = useSectionState();

  return (
    <>
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        <Sidebar />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader changeMenu={mobileMenu.change} isOpen={mobileMenu.isOpen} />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

const DashboardRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Overview} />
      <Route exact path="/home" component={Overview} />
      <Route exact path="/overview" component={Overview} />
      <Route exact path="/omakase" component={OmakaseBar} />
      <Route exact path="/weekly" component={MenuOfTheWeek} />
      <Route exact path="/tokens" component={Tokens} />
      <Route exact path="/pools" component={Pools} />
      <Route exact path="/pairs" component={Pairs} />
      <Route exact path="/governance" component={Governance} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faqs" component={Faqs} />
      <Route exact path="/bentobox" component={BentoBoxWrapper} />
      <Route
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
      />
    </>
  );
};

const BentoBoxWrapper = () => {
  return (
    <>
      {/* <PageTitle title={"Bentobox Lending"} logo={BentoBoxLogo} /> */}
      <BentoBox />
    </>
  );
};

const Overview = () => {
  const { dispatch } = useContext(SectionContext);
  useEffect(() => {
    dispatch({ type: "update", section: "home" });
  }, []);
  return (
    <>
      {/* <IntroBanner /> */}
      <PageTitle title={"👋 いらっしゃいませ「 Welcome Back 」!"} />
      <div className="sushi-px-8 my-4 sushi-hidden lg:sushi-block">
        <MainSearch />
      </div>
      <div className="sushi-px-8 my-4">
        <span className="sushi-w-full">
          <div className="sushi-flex sushi-items-start sushi-justify-between sushi-space-x-3">
            <GlobalStats />
          </div>
        </span>
      </div>
      <div className="shadow-inner bg-gray-100">
        <h3 className="pl-10 pt-4 text-lg leading-6 font-medium text-gray-400">
          While you're here, you can...(hint: swipe or use arrow keys)
        </h3>
        <Flickity
          className={"flickity-viewport-visible py-4 overflow-x-hidden outline-none"}
          elementType={"div"}
          options={{
            cellAlign: "left",
            imagesLoaded: true,
            pageDots: false,
            prevNextButtons: false,
            contain: true,
          }}
          disableImagesLoaded={false}
          reloadOnUpdate // default false
          static // default false
        >
          <div className="relative w-4/5 md:w-2/5 mx-auto pl-6">
            <CardTokenActions initialSection={"swap"} currencyIdB={"ETH"} />
          </div>
          {/* <div className="relative w-4/5 md:w-2/5 mx-auto pl-6">
            <CardMigrate />
          </div> */}
          {/* <div className="relative w-4/5 md:w-1/3 mx-auto pl-6">
            <CurrentMenuWrapper pathToMenu={"/weekly"} />
          </div> */}
          <div className="relative w-4/5 md:w-1/3 mx-auto pl-6">
            <CardCurrentMenu pathToMenu={"/weekly"} />
          </div>
          <div className="relative w-4/5 md:w-1/3 mx-auto pl-6">
            <CardMigrateNotice />
          </div>
          <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
            <CardChart>
              <SushiGlobalChart display="liquidity" />
            </CardChart>
          </div>
          <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
            <CardChart>
              <SushiGlobalChart display="volume" />
            </CardChart>
          </div>
          <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
            <CardChart>
              <UniGlobalChart display="liquidity" />
            </CardChart>
          </div>
          <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
            <CardChart>
              <UniGlobalChart display="volume" />
            </CardChart>
          </div>
        </Flickity>
      </div>
      <TablePools type={"active"} title={"All active farms"} />
    </>
  );
};

const OmakaseBar = () => {
  const { dispatch } = useContext(SectionContext);
  useEffect(() => {
    dispatch({ type: "update", section: "omakase" });
  }, []);
  return (
    <>
      <PageTitle title={"Omakase Analytics"} />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <nav className="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Account
            </a>
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Compare Liquidity
            </a>
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Compare Trading
            </a>
            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Movement
            </a>
          </nav>
        </div>
      </header>
      <div className="min-h-full bg-gray-100 shadow-inner py-6 px-4 space-y-6 sm:p-6">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white">
            <CardBalances />
          </div>
        </div>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white">
            <CardPositions />
          </div>
        </div>
      </div>

      {/* <Flickity
        className={"flickity-viewport-visible shadow-inner py-4 bg-gray-100 overflow-x-hidden outline-none"}
        elementType={"div"}
        options={{
          cellAlign: "left",
          imagesLoaded: true,
          pageDots: false,
          prevNextButtons: false,
          contain: true,
        }}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        <div className="relative w-4/5 md:w-2/5 mx-auto pl-4">
          <CardBalance title={"Your SUSHI Balance"} />
        </div>
        <div className="relative w-4/5 md:w-1/3 mx-auto pl-4">
          <CardBalances title={"Your xSUSHI Balance"} />
        </div>
        <div className="relative w-4/5 md:w-1/2 mx-auto px-4">
          <CardPositions title={"Your xSUSHI Balance"} />
        </div>
        <div className="relative w-4/5 md:w-1/2 mx-auto pl-4">
          <CardKitchen title={"What's Cooking?"} />
        </div>
        <div className="relative w-4/5 md:w-1/2 mx-auto pl-4">
          <CardServing title={"Who's Serving?"} />
        </div>
      </Flickity> */}
      {/* <CardSection>
        <CardSummary title={"Summary"} />
        <CardBalance title={"SUSHI Actions"} />
      </CardSection> */}
      {/* <div className="sushi-mx-4 sushi-my-6">
        <CardBalances title={"Your xSUSHI Balance"} />
      </div> */}
      {/* <CardSection>
        <CardSocialMedia title={"📣 Social Media"} />
        <CardResources title={"📚 Resources"} />
      </CardSection> */}
    </>
  );
};

const MenuOfTheWeek = () => {
  const { dispatch } = useContext(SectionContext);
  useEffect(() => {
    dispatch({ type: "update", section: "weekly" });
  }, []);
  const menuRef = useRef(null);
  const currentRef = useRef(null);
  const previousRef = useRef(null);
  const scrollToMenu = () => scrollToRef(menuRef);
  const scrollToCurrent = () => scrollToRef(currentRef);
  const scrollToPrevious = () => scrollToRef(previousRef);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* <MainSearch /> */}
      <div className="sushi-px-8 my-4 sushi-hidden lg:sushi-block">
        <MainSearch />
      </div>
      <WeeklyMenuInfo scrollToMenu={scrollToMenu} />
      <div ref={menuRef} id="menus">
        <WeeklyMenus scrollToCurrent={scrollToCurrent} scrollToPrevious={scrollToPrevious} />
      </div>
      <div ref={currentRef} id="current">
        <TablePools title={"Current Menus"} type={"current"} />
      </div>
      <div ref={previousRef} id="previous">
        <TablePools title={"Previous Menus"} type={"previous"} />
      </div>
    </>
  );
};

const Tokens = () => {
  const { dispatch } = useContext(SectionContext);
  useEffect(() => {
    dispatch({ type: "update", section: "tokens" });
  }, []);

  const allTokens = useAllTokenData();
  return (
    <>
      {/* <MainSearch /> */}
      <div className="sushi-px-8 my-4 sushi-hidden lg:sushi-block">
        <MainSearch />
      </div>
      <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sm:sushi-px-6 lg:sushi-px-8">
        Tokens on Sushiswap
      </h2>
      <div className="sushi-mt-4 sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle sushi-px-6">
        <div
          style={{
            position: "relative",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <TokenList tokens={allTokens} itemMax={50} />
        </div>
      </div>
    </>
  );
};

const Pools = () => {
  const { dispatch } = useContext(SectionContext);
  useEffect(() => {
    dispatch({ type: "update", section: "pools" });
  }, []);
  return (
    <>
      {/* <MainSearch /> */}
      <div className="sushi-px-8 my-4 sushi-hidden lg:sushi-block">
        <MainSearch />
      </div>
      <TablePools title={"Main Farms"} type={"main"} />
    </>
  );
};

const Pairs = () => {
  const { dispatch } = useContext(SectionContext);
  useEffect(() => {
    dispatch({ type: "update", section: "pairs" });
  }, []);

  const allPairs = useAllPairData();
  return (
    <>
      {/* <MainSearch /> */}
      <div className="sushi-px-8 my-4 sushi-hidden lg:sushi-block">
        <MainSearch />
      </div>
      <h2 className="sushi-max-w-6xl sushi-mx-auto sushi-mt-8 sushi-px-4 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-cool-gray-900 sm:sushi-px-6 lg:sushi-px-8">
        Trading pairs on Sushiswap
      </h2>
      <div className="sushi-mt-4 sushi-inline-block sushi-min-w-full sushi-overflow-hidden sushi-align-middle sushi-px-6">
        <div
          style={{
            position: "relative",
            overflow: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <PairList pairs={allPairs} maxItems={50} />
        </div>
      </div>
    </>
  );
};

const Governance = () => {
  const { dispatch } = useContext(SectionContext);
  const [timelocks, setTimelocks] = useState();
  useEffect(() => {
    dispatch({ type: "update", section: "governance" });
    const fetchData = async () => {
      const timelocks = await sushiData.masterchef.TimeLocks().then((results) => {
        return results;
      });
      setTimelocks(timelocks);
    };
    fetchData();
  }, []);
  return (
    <>
      <PageTitle title={"Governance"} />
      <CardSection>
        <CardTimelock timelocks={timelocks && timelocks} />
        {/* <CardGovernanceActions /> */}
        <CardGovernanceMultisig />
      </CardSection>
    </>
  );
};

const About = () => {
  const { dispatch } = useContext(SectionContext);
  useEffect(() => {
    dispatch({ type: "update", section: "about" });
  }, []);
  return (
    <>
      <CardAbout />
    </>
  );
};

const Faqs = () => {
  return (
    <>
      <TableFAQ title={"Top Liquidity Positions"} />
    </>
  );
};

export default Dashboard;
