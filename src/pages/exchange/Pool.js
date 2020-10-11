import React, { useState, useEffect } from "react";
import SearchHeader from "../../components/SearchHeader2";
import Sidebar from "../../components/Sidebar/Layout";
import CardTokenActions from "../../components/Cards/TokenActions/Standalone";
import PageTitle from "../../components/PageTitle";
import Background from "../../assets/sushi-mountains.jpg";

import WalletModal from "../../components/Modals/Wallet";
import ShareModal from "../../components/Modals/Share";
import useModal from "../../shared/hooks/useModal";
import useMenu from "../../shared/hooks/useMenu";

const Pool = ({ currencyIdA, currencyIdB }) => {
  const mobileMenu = useMenu();
  const share = useModal();
  const wallets = useModal();

  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <ShareModal isOpen={share.isOpen} closeModal={share.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        <Sidebar selected={"swap"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader
            changeMenu={mobileMenu.change}
            isOpen={mobileMenu.isOpen}
            selected={"swap"}
          />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
            style={{
              background: `url(${Background})`,
              backgroundSize: "cover",
            }}
          >
            {/* <PageTitle
              title={""}
              noBorder={true}
              showWallets={wallets.show}
              showShare={share.show}
            /> */}
            <div className="sushi-max-w-lg sushi-mx-auto md:sushi-p-10 lg:sushi-mx-0 lg:sushi-p-12">
              <CardTokenActions
                initialSection={"pool"}
                title={"What would you like to do?"}
                currencyIdA={currencyIdA}
                currencyIdB={currencyIdB}
                showWallets={wallets.show}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Pool;
