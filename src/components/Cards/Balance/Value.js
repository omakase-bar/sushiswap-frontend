import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const Value = ({ value, decimals }) => {
  const [start, updateStart] = useState(0);
  const [end, updateEnd] = useState(0);

  useEffect(() => {
    if (typeof value === "number") {
      updateStart(end);
      updateEnd(value);
    }
  }, [value]);

  return (
    <CountUp
      start={start}
      end={end}
      decimals={
        decimals !== undefined ? decimals : end < 0 ? 4 : end > 1e5 ? 0 : 3
      }
      duration={1}
      separator=","
    />
  );
};

export default Value;
