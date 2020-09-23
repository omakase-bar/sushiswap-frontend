import React from "react";
import { useWallet } from "use-wallet";

const Wallet = () => {
  const wallet = useWallet();
  //const blockNumber = wallet.getBlockNumber();
  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === "connected" ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect()}>MetaMask</button>
          <button onClick={() => wallet.connect("frame")}>Frame</button>
          <button onClick={() => wallet.connect("portis")}>Portis</button>
        </div>
      )}
    </>
  );
};

export default Wallet;
