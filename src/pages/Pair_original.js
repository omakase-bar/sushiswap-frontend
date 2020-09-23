import React from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import PageTitleBreadcrumb from "../components/PageTitleBreadcrumb";
import Banner from "../components/Banner";
import SectionCards from "../components/Cards/Section";
import CardMarket from "../components/Cards/Market";
import CardTokenSwap from "../components/Cards/TokenSwap";
import PoolTable from "../components/Table/Pool";
import MarketWidgets from "../components/Cards/MarketWidgets";
import useMenu from "../shared/hooks/useMenu";

const SummaryStats = () => {
  return (
    <p className="sushi-px-8 sushi-mt-8">
      <span className="sushi-mr-3">ETH Price: $446.37T</span>
      <span className="sushi-mr-3">Transactions (24HR): 200,000</span>
      <span className="sushi-mr-3">Pairs: 3,000</span>
      <span className="sushi-mr-3">Fees (24H): $2,937,230</span>
    </p>
  );
};

const Token = () => {
  const mobileMenu = useMenu();
  return (
    <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
      {/* <MobileMenu /> */}
      {/* Static sidebar for desktop */}
      <Sidebar selected={""} />
      {/* Main column */}
      <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
        <SearchHeader
          changeMenu={mobileMenu.change}
          isOpen={mobileMenu.isOpen}
          selected={""}
        />
        <main
          className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
          tabIndex={0}
        >
          {/* Page title & actions */}
          <PageTitleBreadcrumb title={"SushiToken (SUSHI)"} />
          <MarketWidgets />
          <SectionCards>
            <CardMarket title={"Market"} />
            <CardTokenSwap title={"Token Swap"} />
          </SectionCards>
          <PoolTable title={"Top Pairs"} />
        </main>
      </div>
    </div>
  );
};

export default Token;
