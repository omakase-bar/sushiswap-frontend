import React, { useState } from "react";
import Candidates from "./Candidates";
import Signers from "./Signers";
import Tabs from "./Tabs";
import ExpandButton from "../../../Buttons/ExpandButton";

const MultiSigCard = ({ title }) => {
  const [section, setSection] = useState("signers");
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col">
        <div className="sushi-relative sushi-border-b sushi-border-gray-200 sushi-space-y-4 sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              Multisignature Commission
            </h3>
            <ExpandButton widgetPath={"/widgets/governance/election"} dashboardPath={"/governance"} />
          </div>
          <Tabs selected={section} setSelected={setSection} />
        </div>
        {
          {
            team: <Signers />,
            signers: <Signers />,
            election: <Candidates />,
          }[section]
        }
      </div>
    </div>
  );
};

export default MultiSigCard;
