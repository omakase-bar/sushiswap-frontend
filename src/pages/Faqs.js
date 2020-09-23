import React from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
//import PageTitle from "../components/PageTitle";
import TableFAQ from "../components/Table/FAQ";
import useMenu from "../shared/hooks/useMenu";

const Faqs = () => {
  const mobileMenu = useMenu();
  return (
    <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
      {/* <MobileMenu /> */}
      <Sidebar selected={"faqs"} />
      <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
        <SearchHeader
          changeMenu={mobileMenu.change}
          isOpen={mobileMenu.isOpen}
          selected={"faqs"}
        />
        <main
          className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
          tabIndex={0}
        >
          <TableFAQ title={"Top Liquidity Positions"} />
        </main>
      </div>
    </div>
  );
};

export default Faqs;
