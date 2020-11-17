import React, { useState } from "react";
import { useWallet } from "use-wallet";
import useReward from "../../../../services/frontend/hooks/useReward";
import Value from "../../../Cards/Balance/Value";

import { useTokenData } from "../../../../services/vision/contexts/TokenData";

const Earnings = ({ position }) => {
  const { account } = useWallet();
  const { priceUSD } = useTokenData("0x6b3595068778dd592e39a122f4f5a5cf09c90fe2");
  const [pendingTx, setPendingTx] = useState(false);
  const { onReward } = useReward(position.pid);
  return (
    <>
      <td className="table-cell px-6 py-3 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right">
        <div className="text-gray-900">
          $<Value value={!!account ? position.earnings * priceUSD : "Locked"} />{" "}
        </div>
        <div className="text-gray-900">
          <Value value={!!account ? position.earnings : "Locked"} /> SUSHI{" "}
        </div>
        {position.earnings > 0 ? (
          <button
            disabled={!position.earnings || pendingTx}
            onClick={async () => {
              setPendingTx(true);
              await onReward();
              setPendingTx(false);
            }}
            className="mt-2 text-xs font-medium leading-4 rounded-md select-none text-orange-800 bg-orange-100 inline-flex items-center px-2.5 py-0.5"
          >
            Click to harvest
          </button>
        ) : (
          <div>
            <div className="mt-2 text-xs font-medium leading-4 bg-gray-100 rounded-md select-none inline-flex items-center px-2.5 py-0.5">
              No rewards
            </div>
          </div>
        )}
      </td>
    </>
  );
};

export default Earnings;
