import React, { useRef } from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import MainSearch from "../components/MainSearch/Desktop";
//import TableTopPairs from "../components/Table/Queries/TopPairs";
import WalletModal from "../components/Modals/Wallet";
import useMenu from "../shared/hooks/useMenu";
import useModal from "../shared/hooks/useModal";

import WeeklyMenuInfo from "../components/WeeklyMenuInfo";
import WeeklyMenus from "../components/WeeklyMenus";
import CurrentPools from "../components/Table/PoolsWeeklyApollo";
import PreviousPools from "../components/Table/PoolsWeeklyApolloPrevious";
//import PreviousPools from "../components/Table/PoolsWeeklyZippo";

const Pools = () => {
  const mobileMenu = useMenu();
  const wallets = useModal();

  const menuRef = useRef(null);
  const currentRef = useRef(null);
  const previousRef = useRef(null);
  const scrollToMenu = () => scrollToRef(menuRef);
  const scrollToCurrent = () => scrollToRef(currentRef);
  const scrollToPrevious = () => scrollToRef(previousRef);
  const scrollToRef = (ref) => {
    //error: https://stackoverflow.com/questions/1174863/javascript-scrollto-method-does-nothing/18573599#18573599
    //console.log(ref.current.offsetTop);
    //window.scrollTo(0, ref.current.offsetTop);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        {/* <MobileMenu /> */}
        <Sidebar selected={"weekly"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader changeMenu={mobileMenu.change} isOpen={mobileMenu.isOpen} selected={"weekly"} />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
          >
            <MainSearch />
            <WeeklyMenuInfo scrollToMenu={scrollToMenu} />
            <div ref={menuRef} id="menus">
              <WeeklyMenus scrollToCurrent={scrollToCurrent} scrollToPrevious={scrollToPrevious} />
            </div>
            <div ref={currentRef} id="current">
              <CurrentPools showWallets={wallets.show} />
            </div>
            <div ref={previousRef} id="previous">
              <PreviousPools showWallets={wallets.show} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Pools;
