import { useState } from "react";

const useChartInterval = () => {
  const [chartInterval, setChartInterval] = useState("day");
  return {
    chartInterval,
    day: () => setChartInterval("day"),
    week: () => setChartInterval("week"),
    month: () => setChartInterval("month"),
  };
};

export default useChartInterval;
