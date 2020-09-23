import React from "react";
import "@elastic/charts/dist/theme_only_light.css";
import {
  Axis,
  BarSeries,
  Chart,
  niceTimeFormatByDay,
  Position,
  ScaleType,
  timeFormatter,
} from "@elastic/charts";

import { KIBANA_METRICS } from "./test_data";

const BarChartElastic = ({ data }) => {
  const formatter = timeFormatter(niceTimeFormatByDay(1));
  return (
    <Chart size={{ height: 250 }}>
      <Axis
        id="bottom"
        position={Position.Bottom}
        //title="Bottom axis"
        showOverlappingTicks={false}
        showOverlappingLabels={false}
        //
        tickFormat={formatter}
      />
      <Axis
        id="left2"
        //title="Left axis"
        position={Position.Left}
        tickFormat={(d) => Number(d).toFixed(2)}
      />

      <BarSeries
        id="bars"
        color={"#d03800"}
        //xScaleType={ScaleType.Linear}
        //yScaleType={ScaleType.Linear}
        //xAccessor="bucket"
        //yAccessors={["count"]}
        //data={data}
        //
        xScaleType={ScaleType.Time}
        yScaleType={ScaleType.Linear}
        xAccessor={0}
        yAccessors={[1]}
        data={KIBANA_METRICS.metrics.kibana_os_load[0].data}
      />
    </Chart>
  );
};

export default BarChartElastic;
