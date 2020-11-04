import React, { useCallback, useState, useEffect, useMemo } from "react";
import useFarm from "../../../services/frontend/hooks/useFarm";
import { useWallet } from "use-wallet";
import { getContract } from "../../../services/frontend/utils/erc20";
import Stake from "./Stake";

const StakeWrapper = ({ farmId, apy, setSelected }) => {
  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    earnToken,
    name,
    icon,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: "",
    lpTokenAddress: "",
    tokenAddress: "",
    earnToken: "",
    name: "",
    icon: "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ethereum } = useWallet();
  const lpContract = useMemo(() => {
    return getContract(ethereum, lpTokenAddress);
  }, [ethereum, lpTokenAddress]);

  // console.log("FARMID:", farmId);
  // console.log("LPCONTRACT:", lpContract);
  // console.log("pid", pid);
  // console.log("apy", apy);
  //console.log("EARNED:", farmId, earnToken);

  return (
    <Stake
      lpContract={lpContract}
      pid={pid}
      tokenName={lpToken.toUpperCase()}
      apy={apy}
      setSelected={setSelected}
    />
  );
};

export default StakeWrapper;
