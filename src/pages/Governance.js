import React from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import Banner from "../components/Banner";
import SectionCards from "../components/Cards/Section";
import CardGovernanceMultisig from "../components/Cards/GovernanceMultisig/Layout";
import CardGovernanceActions from "../components/Cards/GovernanceActions/Layout";
import CardGovernanceActivity from "../components/Cards/GovernanceActivity";
import TableProposals from "../components/Table/Proposal";
import useMenu from "../shared/hooks/useMenu";
import WalletModal from "../components/Modals/Wallet";
import ShareModal from "../components/Modals/Share";
import useModal from "../shared/hooks/useModal";

const Governance = () => {
  const mobileMenu = useMenu();
  const share = useModal();
  const wallets = useModal();

  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <ShareModal isOpen={share.isOpen} closeModal={share.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        {/* <MobileMenu /> */}
        <Sidebar selected={"governance"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader
            changeMenu={mobileMenu.change}
            isOpen={mobileMenu.isOpen}
            selected={"governance"}
          />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
          >
            <PageTitle
              title={"Governance"}
              showWallets={wallets.show}
              showShare={share.show}
            />
            {/* <Banner
            announcement={"Learn more about voting and token timelocks"}
          /> */}
            <SectionCards>
              <CardGovernanceActions />
              {/* <CardGovernanceActions /> */}
              <CardGovernanceMultisig />
              {/* <CardGovernanceActivity title={"Proposal Activity"} /> */}
            </SectionCards>
            {/* <TableProposals /> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Governance;
