import React from "react";

//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import SearchHeader from "../components/SearchHeader2";
import MainSearch from "../components/MainSearch/Desktop";
//import TableTopTokens from "../components/Table/Queries/TopTokens";

import TokenList from "../classic/vision/components/TokenList/secondary";
import { useAllTokenData } from "../classic/vision/contexts/TokenData";
import useMenu from "../shared/hooks/useMenu";

const Tokens = () => {
  const allTokens = useAllTokenData();
  const mobileMenu = useMenu();

  return (
    <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
      {/* <MobileMenu /> */}
      <Sidebar selected={"tokens"} />
      <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
        <SearchHeader
          changeMenu={mobileMenu.change}
          isOpen={mobileMenu.isOpen}
          selected={"tokens"}
        />
        <main
          className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
          tabIndex={0}
        >
          <MainSearch />
          {/* <TableTopTokens /> */}
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
        </main>
      </div>
    </div>
  );
};

export default Tokens;
