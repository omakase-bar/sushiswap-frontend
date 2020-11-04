import BigNumber from "bignumber.js";
import React, { useCallback, useState } from "react";
// import styled from "styled-components";
// import Button from "../../../services/frontend/components/Button";
// import Card from "../../../services/frontend/components/Card";
// import CardContent from "../../../services/frontend/components/CardContent";
// import CardIcon from "../../../services/frontend/components/CardIcon";
// import IconButton from "../../../services/frontend/components/IconButton";
// import { AddIcon } from "../../../services/frontend/components/icons";
// import Label from "../../../services/frontend/components/Label";
// import Value from "../../../services/frontend/components/Value";
import useAllowance from "../../../services/frontend/hooks/useAllowance";
import useApprove from "../../../services/frontend/hooks/useApprove";
import useModal from "../../../services/frontend/hooks/useModal";
import useStake from "../../../services/frontend/hooks/useStake";
import useStakedBalance from "../../../services/frontend/hooks/useStakedBalance";
import useTokenBalance from "../../../services/frontend/hooks/useTokenBalance";
import useUnstake from "../../../services/frontend/hooks/useUnstake";
import { getBalanceNumber } from "../../../services/frontend/utils/formatBalance";
import DepositModal from "../../../services/frontend/views/Farm/components/DepositModal";
import WithdrawModal from "../../../services/frontend/views/Farm/components/WithdrawModal";

import Loader from "../../../services/exchange/components/Loader";

const Stake = ({ lpContract, pid, tokenName, apy, setSelected }) => {
  const [requestedApproval, setRequestedApproval] = useState(false);
  const allowance = useAllowance(lpContract);
  const { onApprove } = useApprove(lpContract);
  const tokenBalance = useTokenBalance(lpContract.options.address);
  const stakedBalance = useStakedBalance(pid);
  const { onStake } = useStake(pid);
  const { onUnstake } = useUnstake(pid);
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />
  );
  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />
  );
  const handleApprove = useCallback(async () => {
    //console.log("SEEKING APPROVAL");
    try {
      setRequestedApproval(true);
      const txHash = await onApprove();
      console.log(txHash);
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false);
      }
    } catch (e) {
      console.log(e);
    }
  }, [onApprove, setRequestedApproval]);
  return (
    <tr>
      <td className="sushi-pr-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        {apy ? (
          <>
            <div className="sushi-text-sm sushi-text-green-500">
              {apy
                .times(new BigNumber(100))
                .toNumber()
                .toLocaleString("en-US")
                .slice(0, -1)}
              %
            </div>
            <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">per year</div>
          </>
        ) : (
          <Loader />
          // <div className="sushi-text-xs sushi-text-gray-300">Loading...</div>
        )}
      </td>
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div>{Number(getBalanceNumber(tokenBalance)).toFixed(4)}</div>{" "}
        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">
          {tokenName}
          {/* <span className="sushi-text-gray-900">{tokenName}</span> */}
        </div>
      </td>
      <td className="sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        <div>{Number(getBalanceNumber(stakedBalance)).toFixed(4)}</div>{" "}
        <div className="sushi-mt-1 sushi-text-xs sushi-text-gray-500">{tokenName}</div>
      </td>
      <td className="sushi-pl-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200">
        {stakedBalance.eq(new BigNumber(0)) &&
        tokenBalance.eq(new BigNumber(0)) &&
        !allowance.toNumber() ? (
          <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
            <button
              onClick={() => {
                setSelected("pool");
              }}
              //onClick={handleApprove}
              className="sushi-inline-flex sushi-items-center sushi-px-10 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
            >
              + Liquidity
            </button>
          </span>
        ) : !allowance.toNumber() ? (
          <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
            <button
              //disabled={requestedApproval}
              onClick={handleApprove}
              className="sushi-inline-flex sushi-items-center sushi-px-2 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
            >
              🔒 Approve Staking
            </button>
          </span>
        ) : (
          <>
            <span className="sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
              <button
                onClick={onPresentDeposit}
                className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
              >
                Stake
              </button>
            </span>
            <span className="sushi-ml-2 sushi-inline-flex sushi-rounded-md sushi-shadow-sm">
              <button
                onClick={onPresentWithdraw}
                //disabled={stakedBalance.eq(new BigNumber(0))}
                className="sushi-inline-flex sushi-items-center sushi-px-3 sushi-py-3 sushi-text-sm sushi-font-medium sushi-leading-4 sushi-text-gray-700 sushi-transition sushi-duration-150 sushi-ease-in-out sushi-bg-white sushi-border sushi-border-gray-300 sushi-rounded-md hover:sushi-text-gray-500 focus:sushi-outline-none focus:sushi-border-blue-300 focus:sushi-shadow-outline-blue active:sushi-text-gray-800 active:sushi-"
              >
                Unstake
              </button>
            </span>
          </>
        )}
      </td>
    </tr>
    // <Card>
    //   <CardContent>
    //     <StyledCardContentInner>
    //       <StyledCardHeader>
    //         <CardIcon>👨🏻‍🍳</CardIcon>
    //         <Value value={getBalanceNumber(stakedBalance)} />
    //         <Label text={`${tokenName} Tokens Staked`} />
    //       </StyledCardHeader>
    //       <StyledCardActions>
    //         {!allowance.toNumber() ? (
    //           <Button
    //             disabled={requestedApproval}
    //             onClick={handleApprove}
    //             text={`Approve ${tokenName}`}
    //           />
    //         ) : (
    //           <>
    //             <Button
    //               disabled={stakedBalance.eq(new BigNumber(0))}
    //               text="Unstake"
    //               onClick={onPresentWithdraw}
    //             />
    //             <StyledActionSpacer />
    //             <IconButton onClick={onPresentDeposit}>
    //               <AddIcon />
    //             </IconButton>
    //           </>
    //         )}
    //       </StyledCardActions>
    //     </StyledCardContentInner>
    //   </CardContent>
    // </Card>
  );
};
// const StyledCardHeader = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// `;
// const StyledCardActions = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: ${(props) => props.theme.spacing[6]}px;
//   width: 100%;
// `;
// const StyledActionSpacer = styled.div`
//   height: ${(props) => props.theme.spacing[4]}px;
//   width: ${(props) => props.theme.spacing[4]}px;
// `;
// const StyledCardContentInner = styled.div`
//   align-items: center;
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   justify-content: space-between;
// `;
export default Stake;
