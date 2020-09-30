import React from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import MainSearch from "../components/MainSearch/Desktop";
//import TableTopPairs from "../components/Table/Queries/TopPairs";
import PoolsWeekly from "../components/Table/PoolsWeeklyZippo";
import WalletModal from "../components/Modals/Wallet";
import useMenu from "../shared/hooks/useMenu";
import useModal from "../shared/hooks/useModal";

const Pools = () => {
  const mobileMenu = useMenu();
  const wallets = useModal();
  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        {/* <MobileMenu /> */}
        <Sidebar selected={"weekly"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader
            changeMenu={mobileMenu.change}
            isOpen={mobileMenu.isOpen}
            selected={"weekly"}
          />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
          >
            <MainSearch />
            <PoolsWeekly showWallets={wallets.show} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Pools;
