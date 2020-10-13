import React from "react";
import SearchHeader from "../components/SearchHeader2";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import CardSection from "../components/Cards/Section";
import CardSummary from "../components/Cards/Summary";
import CardBalance from "../components/Cards/Balance/Layout";
import CardSushiBarInfo from "../components/Cards/SushiBarInfo";
import CardResources from "../components/Cards/Resources/Layout";
import CardSocialMedia from "../components/Cards/SocialMedia/Layout";

import WalletModal from "../components/Modals/Wallet";
import ShareModal from "../components/Modals/Share";
import useModal from "../shared/hooks/useModal";
import useMenu from "../shared/hooks/useMenu";

const SushiBar = () => {
  const share = useModal();
  const wallets = useModal();
  const mobileMenu = useMenu();
  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <ShareModal isOpen={share.isOpen} closeModal={share.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        <Sidebar selected={"sushibar"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader
            changeMenu={mobileMenu.change}
            isOpen={mobileMenu.isOpen}
            selected={"sushibar"}
          />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto sushi-overflow-x-hidden focus:sushi-outline-none"
            tabIndex={0}
          >
            <PageTitle
              title={"SushiBar"}
              showWallets={wallets.show}
              showShare={share.show}
            />
            <CardSection>
              <CardSushiBarInfo  />
              <CardBalance title={"Test Card2"} />
            </CardSection>
          </main>
        </div>
      </div>
    </>
  );
};

export default SushiBar;
