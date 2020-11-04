import React, { useState } from "react";
import Timelocks from "./Timelocks";
import Tabs from "./Tabs";
import ExpandButton from "../../../Buttons/ExpandButton";

const TimelockCard = ({ title, timelocks }) => {
  const [section, setSection] = useState("timelock");
  const tabs = [
    {
      title: "Timelocks",
      id: "timelock",
    },
  ];
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-border-b sushi-border-gray-200 sushi-space-y-4 sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">Timelock</h3>
            <ExpandButton widgetPath={"/widgets/governance/timelock"} dashboardPath={"/governance"} />
          </div>
          <Tabs tabs={tabs} selected={section} setSelected={setSection} count={timelocks && timelocks.length} />
        </div>
        {
          {
            timelock: <Timelocks timelocks={timelocks && timelocks} />,
          }[section]
        }
      </div>
    </div>
  );
};

export default TimelockCard;
