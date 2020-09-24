import React from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
//import Banner from "../components/Banner";
import CardSection from "../components/Cards/Section";
import CardSummary from "../components/Cards/Summary";
import CardBalance from "../components/Cards/Balance/Layout";
import CardResources from "../components/Cards/Resources/Layout";
import CardSocialMedia from "../components/Cards/SocialMedia/Layout";
//import CardWorkflows from "../components/Cards/Workflows";
//import PinnedProjects from "../components/Pinned/Layout";
//import ProjectSmall from "../components/Table/Condensed";
//import PoolTable from "../components/Table/Pool";
import PoolTable from "../components/Table/Queries/PoolsZippo";
//import Balance from "../sushiswap/views/Home/components/Balances";

import WalletModal from "../components/Modals/Wallet";
import ShareModal from "../components/Modals/Share";
import useModal from "../shared/hooks/useModal";
import useMenu from "../shared/hooks/useMenu";

// const SummaryStats = () => {
//   return (
//     <p className="sushi-px-8 sushi-mt-8">
//       <span className="sushi-mr-3">ETH Price: $446.37T</span>
//       <span className="sushi-mr-3">Transactions (24HR): 200,000</span>
//       <span className="sushi-mr-3">Pairs: 3,000</span>
//       <span className="sushi-mr-3">Fees (24H): $2,937,230</span>
//     </p>
//   );
// };

const OmakaseBar = () => {
  const share = useModal();
  const wallets = useModal();
  const mobileMenu = useMenu();
  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <ShareModal isOpen={share.isOpen} closeModal={share.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        <Sidebar selected={"omakase"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader
            changeMenu={mobileMenu.change}
            isOpen={mobileMenu.isOpen}
            selected={"omakase"}
          />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto sushi-overflow-x-hidden focus:sushi-outline-none"
            tabIndex={0}
          >
            <PageTitle
              title={"Sushiswap Information Portal"}
              showWallets={wallets.show}
              showShare={share.show}
            />
            {/* <Banner
              icon={"⛵"}
              announcement={
                "First grant proposal voting live. Be sure to vote and support our community devs!"
              }
            /> */}
            {/* <Balance /> */}
            <CardSection>
              <CardSummary title={"🍱 Summary"} />
              <CardBalance
                title={"Your SUSHI Balance"}
                showWallets={wallets.show}
              />
            </CardSection>
            <CardSection>
              <CardSocialMedia title={"📣 Social Media"} />
              <CardResources title={"📚 Resources"} />
            </CardSection>
            <PoolTable
              title={"Active Sushiswap Pools"}
              showWallets={wallets.show}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default OmakaseBar;
