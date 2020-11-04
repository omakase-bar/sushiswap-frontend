import React from "react";
import SearchHeader from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import CardTokenActions from "../components/Cards/TokenActions/Standalone";
import Background from "../assets/img/sushi-mountains.jpg";

import WalletsModal from "../components/Modals/Wallets";
import ShareModal from "../components/Modals/Share";
import useModal from "../shared/hooks/useModal";
import useMenu from "../shared/hooks/useMenu";

const Swap = () => {
  const mobileMenu = useMenu();
  return (
    <>
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        <Sidebar selected={"swap"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader changeMenu={mobileMenu.change} isOpen={mobileMenu.isOpen} selected={"swap"} />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
            style={{
              background: `url(${Background})`,
              backgroundSize: "cover",
            }}
          >
            <div className="sushi-max-w-lg sushi-mx-auto md:sushi-p-10 lg:sushi-mx-0 lg:sushi-p-12">
              <CardTokenActions initialSection={"swap"} title={"What would you like to do?"} currencyIdB={"ETH"} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Swap;
