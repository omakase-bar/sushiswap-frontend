import React from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import CardSection from "../components/Cards/Section";
import CardAccounts from "../components/Cards/Accounts";
import TableTopLiquidity from "../components/Table/Queries/TopPairs";
import useMenu from "../shared/hooks/useMenu";

const LoadAccountDetails = () => {
  return (
    <div className="sushi-px-7 sushi-mt-4">
      <div className="sushi-mt-1 sushi-flex sushi-rounded-md sushi-shadow-sm">
        <div className="sushi-relative sushi-flex-grow focus-within:sushi-z-10">
          <input
            id="email"
            className="sushi-form-input sushi-block sushi-w-full sushi-rounded-none sushi-rounded-l-md sushi-transition sushi-ease-in-out sushi-duration-150 sm:sushi-text-sm sm:sushi-leading-5"
            placeholder="0x..."
          />
        </div>
        <button className="sushi--ml-px sushi-relative sushi-inline-flex sushi-items-center sushi-px-4 sushi-py-2 sushi-border sushi-border-gray-300 sushi-text-sm sushi-leading-5 sushi-font-medium sushi-rounded-r-md sushi-text-gray-700 sushi-bg-gray-50 hover:sushi-text-gray-500 hover:sushi-bg-white focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 active:sushi-bg-gray-100 active:sushi-text-gray-700 sushi-transition sushi-ease-in-out sushi-duration-150">
          <svg
            className="sushi-h-5 sushi-w-5 sushi-text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
          </svg>
          <span className="sushi-ml-2">Load Account Details</span>
        </button>
      </div>
    </div>
  );
};

const Accounts = () => {
  const mobileMenu = useMenu();
  return (
    <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
      {/* <MobileMenu /> */}
      <Sidebar selected={"accounts"} />
      <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
        <SearchHeader
          changeMenu={mobileMenu.change}
          isOpen={mobileMenu.isOpen}
          selected={"accounts"}
        />
        <main
          className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
          tabIndex={0}
        >
          <PageTitle title={"Wallet analytics"} />
          <LoadAccountDetails />
          <div className="sushi-mt-6 sushi-px-6">
            <CardAccounts />
          </div>
          <TableTopLiquidity />
        </main>
      </div>
    </div>
  );
};

export default Accounts;
