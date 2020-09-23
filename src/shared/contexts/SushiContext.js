import React, { createContext, useEffect, useState } from "react";
import { useWallet } from "use-wallet";
import { Sushi } from "../../sushi";
export const Context = createContext({
  yam: undefined,
});
const YamProvider = ({ children }) => {
  const { ethereum } = useWallet();
  const [yam, setYam] = useState();
  // @ts-ignore
  window.yam = yam;
  // @ts-ignore
  window.eth = ethereum;
  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId);
      const yamLib = new Sushi(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: "6000000",
        defaultGasPrice: "1000000000000",
        accounts: [],
        ethereumNodeTimeout: 10000,
      });
      setYam(yamLib);
      window.yamsauce = yamLib;
    }
  }, [ethereum]);
  return React.createElement(Context.Provider, { value: { yam } }, children);
};
export default YamProvider;
