import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import MobileMenu from "../components/MobileMenu";
import SearchHeader from "../components/SearchHeader2";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import MainSearch from "../components/MainSearch/Desktop";
import SectionCards from "../components/Cards/Section";
import CardChart from "../components/Cards/Chart";
//import CardLiquidity from "../components/Cards/Liquidity";
//import CardVolume from "../components/Cards/Volume";
//import CardWorkflows from "../components/Cards/Workflows";
//import PinnedProjects from "../components/Pinned/Layout";
//import ProjectSmall from "../components/Table/Condensed";
// import TableTopTokens from "../components/Table/Queries/TopTokens";
// import TableTopPairs from "../components/Table/Queries/TopPairs";
import TablePools from "../components/Table/Queries/PoolsZippo";
import WalletModal from "../components/Modals/Wallet";
import ShareModal from "../components/Modals/Share";
import useModal from "../shared/hooks/useModal";
import useMenu from "../shared/hooks/useMenu";

import SushiGlobalChart from "../classic/vision/components/GlobalChart";
import UniGlobalChart from "../classic/analytics/components/charts/globalChart";
import Flickity from "react-flickity-component";
import GlobalStats from "../classic/vision/components/GlobalStats";
import Panel from "../classic/vision/components/Panel";

// import styled from "styled-components";
// const GridRow = styled.div`
//   display: grid;
//   width: 100%;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 6px;
//   align-items: start;
//   justify-content: space-between;
// `;

// const GlobalChart = dynamic(
//   () => import("../sushiview/components/charts/globalChart"),
//   {
//     ssr: false,
//   }
// );

// import Web3 from "web3";
// const AccountInfo = () => {
//   const [address, setAddress] = useState("");
//   useEffect(() => {
//     if (!address) {
//       getAddress();
//     }
//   }, []);
//   const getAddress = async () => {
//     const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
//     const network = await web3.eth.net.getNetworkType();
//     console.log("Network", network); // should give you main if you're connected to the main network via metamask...
//     const accounts = await web3.eth.getAccounts();
//     console.log("Accounts", accounts);
//     setAddress(accounts[0]);
//   };
//   return (
//     <div>
//       <p>Check out the the console....</p>
//       <p>Your account: {address}</p>
//     </div>
//   );
// };

const flickityOptions = {
  cellAlign: "left",
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: false,
  contain: true,
};

const SummaryStats = () => {
  return (
    <p className="sushi-px-8 sushi-mt-8">
      <span className="sushi-mr-3">ETH Price: $446.37T</span>
      <span className="sushi-mr-3">Transactions (24HR): 200,000</span>
      <span className="sushi-mr-3">Pairs: 3,000</span>
      <span className="sushi-mr-3">Fees (24H): $2,937,230</span>
    </p>
  );
};

const IntroBanner = () => {
  const [banner, showBanner] = useState(true);

  return (
    <>
      {banner ? (
        <div className="sushi-bg-orange-600">
          <div className="sushi-max-w-screen-xl sushi-mx-auto sushi-py-2 sushi-px-3 sm:sushi-px-6 lg:sushi-px-8">
            <div className="sushi-flex sushi-items-center sushi-justify-between sushi-flex-wrap">
              <Link
                to="/about"
                className="sushi-w-0 sushi-flex-1 sushi-flex sushi-items-center"
              >
                <span className="sushi-flex sushi-text-3xl">🎉</span>
                <p className="sushi-ml-4 sushi-font-medium sushi-text-white sushi-truncate">
                  <span className="md:sushi-hidden">
                    Welcome to Sushiswap! A delicious community driven AMM. Tap
                    to learn more.
                  </span>
                  <span className="sushi-hidden md:sushi-inline">
                    Welcome to Sushiswap! The first, delicious community driven
                    AMM. Tap to learn more.
                  </span>
                </p>
              </Link>
              <div className="z-20 sushi-order-2 sushi-flex-shrink-0 sm:sushi-order-3 sm:sushi-ml-3">
                <button
                  onClick={() => {
                    showBanner(false);
                  }}
                  type="button"
                  className="sushi--mr-1 sushi-flex sushi-p-2 sushi-rounded-md hover:sushi-bg-orange-500 focus:sushi-outline-none focus:sushi-bg-orange-500 sm:sushi--mr-2 sushi-transition sushi-ease-in-out sushi-duration-150"
                  aria-label="Dismiss"
                >
                  {/* Heroicon name: x */}
                  <svg
                    className="sushi-h-6 sushi-w-6 sushi-text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const Home = () => {
  const wallets = useModal();
  const share = useModal();
  const mobileMenu = useMenu();
  return (
    <>
      <WalletModal isOpen={wallets.isOpen} closeModal={wallets.hide} />
      <ShareModal isOpen={share.isOpen} closeModal={share.hide} />
      <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
        {/* <MobileMenu /> */}
        <Sidebar selected={"home"} />
        <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
          <SearchHeader
            changeMenu={mobileMenu.change}
            isOpen={mobileMenu.isOpen}
            selected={"home"}
          />
          <main
            className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
            tabIndex={0}
          >
            {/* <AccountInfo /> */}
            <IntroBanner />
            <PageTitle
              title={"Sushiswap Protocol Analytics"}
              showWallets={wallets.show}
              showShare={share.show}
            />
            <MainSearch />
            {/* <SummaryStats /> */}
            <div className="sushi-px-8 sushi-mt-8">
              <span className="sushi-w-full">
                <div className="sushi-flex sushi-items-start sushi-justify-between sushi-space-x-3">
                  <GlobalStats />
                  <div className="sushi-flex sushi-items-center">
                    <svg
                      class="sushi-animate-bounce-x sushi-w-6 sushi-h-6 sushi-text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </span>
            </div>
            <Flickity
              className={
                "flickity-viewport-visible pt-4 overflow-x-hidden outline-none"
              } // default ''
              elementType={"div"} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
              <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
                <CardChart>
                  <SushiGlobalChart display="liquidity" />
                </CardChart>
                {/* <Panel style={{ height: "100%", minHeight: "300px" }}>
                  <SushiGlobalChart display="liquidity" />
                </Panel> */}
              </div>
              <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
                <CardChart>
                  <SushiGlobalChart display="volume" />
                </CardChart>
                {/* <Panel style={{ height: "100%", minHeight: "300px" }}>
                  <SushiGlobalChart display="volume" />
                </Panel> */}
              </div>
              <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
                <CardChart>
                  <UniGlobalChart display="liquidity" />
                </CardChart>
              </div>
              <div className="relative w-4/5 md:w-1/2 mx-auto pl-6">
                <CardChart>
                  <UniGlobalChart display="volume" />
                </CardChart>
              </div>
            </Flickity>
            {/* <SectionCards>
              <CardChart title={"Liquidity (24hr)"}>
                <GlobalChart display="liquidity" />
              </CardChart>
              <CardChart title={"Volume (7 day)"}>
                <GlobalChart display="volume" />
              </CardChart>
            </SectionCards> */}
            {/* <PinnedProjects /> */}
            {/* <ProjectSmall /> */}
            {/* <TableTopTokens />
            <TableTopPairs /> */}
            <TablePools showWallets={wallets.show} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
