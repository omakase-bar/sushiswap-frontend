import React from "react";
import SearchHeader from "../components/SearchHeader2";
import Sidebar from "../components/Sidebar/Layout";
import PageTitle from "../components/PageTitle";
import SectionCards from "../components/Cards/Section";
import CardAbout from "../components/Cards/About";

import useMenu from "../shared/hooks/useMenu";

const About = () => {
  const mobileMenu = useMenu();
  return (
    <div className="sushi-h-screen sushi-flex sushi-overflow-hidden sushi-bg-white">
      <Sidebar selected={""} />
      <div className="sushi-flex sushi-flex-col sushi-w-0 sushi-flex-1 sushi-overflow-hidden">
        <SearchHeader
          changeMenu={mobileMenu.change}
          isOpen={mobileMenu.isOpen}
          selected={""}
        />
        <main
          className="sushi-flex-1 sushi-relative sushi-z-0 sushi-overflow-y-auto focus:sushi-outline-none"
          tabIndex={0}
        >
          <CardAbout />
          {/* <SectionCards>
            <CardAbout />
          </SectionCards> */}
        </main>
      </div>
    </div>
  );
};

export default About;
