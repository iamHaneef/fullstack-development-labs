import { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

import { barChartMock } from "../../core/mock/chartMock";
import { getBarChartData } from "../../core/api/chartApi";

const USE_MOCK = false;

function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const renderChart = async () => {
      const data = USE_MOCK
        ? barChartMock
        : await getBarChartData();

      chart = new Chart({
        container: chartRef.current,
        autoFit: true,
      });

      chart.options({
        type: "interval",
        data,
        encode: { x: "month", y: "value", color: "name" },
        transform: [{ type: "stackY" }],
      });

      chart.render();
    };

    renderChart();

    return () => chart?.destroy();
  }, []);

  return <div ref={chartRef} style={{ height: 400 }} />;
}

export default BarChart;