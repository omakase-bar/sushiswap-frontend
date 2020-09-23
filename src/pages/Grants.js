import React from "react";
import SearchHeader from "../components/SearchHeader2";
//import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import CardGrantSelection from "../components/Cards/GrantSelection";
import TableGrant from "../components/Table/Grant";
import useMenu from "../shared/hooks/useMenu";

const Grants = () => {
  const mobileMenu = useMenu();
  return (
    <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
      <Sidebar selected={"grants"} />
      <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
        <SearchHeader
          changeMenu={mobileMenu.change}
          isOpen={mobileMenu.isOpen}
          selected={"grants"}
        />
        <main
          className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
          tabIndex={0}
        >
          <PageTitle title={"Grants"} />
          <div className="sushi-mt-6 sushi-px-6">
            <CardGrantSelection title={"Grant Selection"} />
          </div>
          <TableGrant />
        </main>
      </div>
    </div>
  );
};

export default Grants;
