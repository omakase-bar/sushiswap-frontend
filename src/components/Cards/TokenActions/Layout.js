import React, { useState } from "react";
import Tabs from "./Tabs";
import ClassicSwap from "../../../classic/exchange/pages/Swap/secondary";
import ClassicPool from "../../../classic/exchange/pages/AddLiquidity/secondary";
import ClassicRemove from "../../../classic/exchange/pages/RemoveLiquidity/secondary";
import Stakes from "./Stakes";
//import Stake from "../../../classic/frontend/views/Farm/components/Stake";
//import TokenSwap from "../TokenSwap";

const TokenActionsCard = ({
  initialSection,
  title,
  symbol,
  currencyIdA,
  currencyIdB,
  showWallets,
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
            stake: (
              <div className="sushi-flex-1">
                <Stakes
                  symbol={symbol}
                  setSelected={setSection}
                  showWallets={showWallets}
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
