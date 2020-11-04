import React, { useState } from "react";
import { useWallet } from "use-wallet";
import useReward from "../../../services/frontend/hooks/useReward";
import Value from "../../Cards/Balance/Value";

const ColumnEarnings = ({ pool }) => {
  const { account } = useWallet();
  const [pendingTx, setPendingTx] = useState(false);
  const { onReward } = useReward(pool.pid);

  return (
    <td className="sushi-pl-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
      <div className="sushi-inline-flex sushi-flex-col">
        {pool.earnings > 0 ? (
          <>
            <div className="sushi-flex sushi-items-center">
              <button
                disabled={!pool.earnings || pendingTx}
                onClick={async () => {
                  setPendingTx(true);
                  await onReward();
                  setPendingTx(false);
                }}
                className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50"
                style={{ border: "1px solid rgb(238, 109, 72)" }}
              >
                🍣
              </button>
              <div>
                <div>
                  <Value value={!!account ? pool.earnings : "Locked"} />{" "}
                </div>
                <div className="sushi-text-xs sushi-text-gray-500">SUSHI</div>
              </div>
            </div>
            <div
              className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-rounded-md sushi-select-none sushi-text-orange-800 sushi-bg-orange-100 sushi-has-tooltip"
              data-original-title="null"
            >
              <button
                disabled={!pool.earnings || pendingTx}
                onClick={async () => {
                  setPendingTx(true);
                  await onReward();
                  setPendingTx(false);
                }}
                className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5"
              >
                Click to harvest
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="sushi-flex sushi-items-center">
              <div className="sushi-p-1 sushi-mr-2 sushi-text-xl sushi-transition-colors sushi-duration-300 sushi-rounded sushi-shadow-md sushi-cursor-default hover:sushi-bg-orange-50">
                🤷‍♀️
              </div>
              <div>
                <div>
                  <Value value={!!account ? pool.earnings : "Locked"} />
                </div>
                <div className="sushi-text-xs sushi-text-gray-500">SUSHI</div>
              </div>
            </div>
            <div
              className="sushi-self-center sushi-mt-2 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-text-gray-800 sushi-bg-gray-100 sushi-rounded-md sushi-select-none sushi-has-tooltip"
              data-original-title="null"
            >
              <div className="sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5">No rewards</div>
            </div>
          </>
        )}
      </div>
    </td>
  );
};

export default ColumnEarnings;
