import React from "react";
import Sidebar from "../components/Sidebar/Layout";
import SearchHeader from "../components/SearchHeader2";
import MainSearch from "../components/MainSearch/Desktop";
import useMenu from "../shared/hooks/useMenu";

import { useAllPairData } from "../classic/vision/contexts/PairData";
import PairList from "../classic/vision/components/PairList/secondary";

const Pairs = () => {
  const allPairs = useAllPairData();
  const mobileMenu = useMenu();
  return (
    <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
      <Sidebar selected={"pairs"} />
      <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
        <SearchHeader
          changeMenu={mobileMenu.change}
          isOpen={mobileMenu.isOpen}
          selected={"pairs"}
        />
        <main
          className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
          tabIndex={0}
        >
          <MainSearch />
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
        </main>
      </div>
    </div>
  );
};

export default Pairs;
