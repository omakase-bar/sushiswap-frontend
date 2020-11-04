import React, { useState, useEffect } from "react";
import SearchHeader from "../components/MobileMenu";
import Sidebar from "../components/Sidebar/Layout";
import CardTokenActions from "../components/Cards/TokenActions/Standalone";
import PageTitle from "../components/PageTitles/Default";
import Background from "../assets/img/sushi-mountains.jpg";

import { DashboardContainer } from "../sections/Dashboard";

const Pool = ({ currencyIdA, currencyIdB }) => {
  return (
    <>
      <DashboardContainer>
        <div className="sushi-max-w-lg sushi-mx-auto md:sushi-p-10 lg:sushi-mx-0 lg:sushi-p-12">
          <CardTokenActions
            initialSection={"pool"}
            title={"What would you like to do?"}
            currencyIdA={currencyIdA}
            currencyIdB={currencyIdB}
          />
        </div>
      </DashboardContainer>
    </>
  );
};

export default Pool;
