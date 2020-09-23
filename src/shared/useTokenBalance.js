import { useCallback, useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { useWallet } from "use-wallet";
import { getBalance } from "../../utils/erc20";
import useBlock from "./useBlock";

const useTokenBalance = (tokenAddress) => {
  const [balance, setBalance] = useState(new BigNumber(0));
  const { account, ethereum } = useWallet();
  const block = useBlock();
  const fetchBalance = useCallback(async () => {
    const balance = await getBalance(ethereum, tokenAddress, account);
    setBalance(new BigNumber(balance));
  }, [account, ethereum, tokenAddress]);
  useEffect(() => {
    if (account && ethereum) {
      fetchBalance();
    }
  }, [account, ethereum, setBalance, block, tokenAddress]);
  return balance;
};
export default useTokenBalance;
