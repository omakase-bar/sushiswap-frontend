import React, { useState } from "react";
import ClassicSwap from "../../../classic/exchange/pages/Swap/secondary";
import ClassicPool from "../../../classic/exchange/pages/AddLiquidity/secondary";
import ClassicRemove from "../../../classic/exchange/pages/RemoveLiquidity/secondary";
import Stakes from "./Stakes";
//import Stake from "../../../classic/frontend/views/Farm/components/Stake";
//import TokenSwap from "../TokenSwap";

const Tabs = ({ selected, setSelected }) => {
  const tabs = [
    {
      title: "Trade",
      id: "swap",
    },
    {
      title: "+ Liquidity",
      id: "pool",
    },
    {
      title: "- Liquidity",
      id: "remove",
    },
  ];
  return (
    <div>
      <div className="sushi-block">
        <nav className="sushi--mb-px sushi-flex sushi-space-x-8">
          {tabs.map((tab) => {
            return (
              <button
                onClick={() => {
                  setSelected(tab.id);
                }}
                className={
                  selected === tab.id
                    ? "sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-orange-500 sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-orange-600 focus:sushi-outline-none focus:sushi-text-orange-800 focus:sushi-border-orange-700"
                    : "sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                }
              >
                {tab.title}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

const TokenActionsCard = ({
  initialSection,
  title,
  currencyIdA,
  currencyIdB,
}) => {
  const [section, setSection] = useState(initialSection);
  return (
    <div className="sushi-flex sushi-flex-col sushi-rounded-lg sushi-border sushi-border-gray-200 sushi-overflow-hidden">
      <div className="sushi-flex-1 sushi-bg-white sushi-p-6 sushi-flex sushi-flex-col sushi-justify-between">
        <div className="sushi-relative sushi-border-b sushi-border-gray-200 sushi-space-y-4 sushi-pb-0">
          <div className="sushi-space-y-3 sushi-flex sushi-items-center sushi-justify-between sushi-space-y-0">
            <h3 className="sushi-pt-2 sushi-text-lg sushi-leading-6 sushi-font-medium sushi-text-gray-900">
              {title}
            </h3>
          </div>
          <Tabs selected={section} setSelected={setSection} />
        </div>
        {
          {
            swap: (
              <div className="sushi-mt-6 sushi-flex-1">
                <ClassicSwap />
              </div>
            ),
            pool: (
              <div className="sushi-mt-6 sushi-flex-1">
                <ClassicPool
                  currencyIdA={currencyIdA}
                  currencyIdB={currencyIdB}
                />
              </div>
            ),
            remove: (
              <div className="sushi-mt-6 sushi-flex-1">
                <ClassicRemove
                  currencyIdA={currencyIdA}
                  currencyIdB={currencyIdB}
                />
              </div>
            ),
          }[section]
        }
      </div>
    </div>
  );
};

export default TokenActionsCard;
