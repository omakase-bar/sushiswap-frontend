import BigNumber from "bignumber.js";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import useAllEarnings from "../../../classic/frontend/hooks/useAllEarnings";
import useAllStakedValue from "../../../classic/frontend/hooks/useAllStakedValue";
import useFarms from "../../../classic/frontend/hooks/useFarms";

const PendingRewards = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [scale, setScale] = useState(1);
  const allEarnings = useAllEarnings();
  let sumEarning = 0;
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber();
  }
  const [farms] = useFarms();
  const allStakedValue = useAllStakedValue();
  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0
    );
  }
  useEffect(() => {
    setStart(end);
    setEnd(sumEarning);
  }, [sumEarning]);
  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "right bottom",
        transition: "transform 0.5s",
        display: "inline-block",
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25);
          setTimeout(() => setScale(1), 600);
        }}
        separator=","
      />
    </span>
  );
};

export default PendingRewards;
