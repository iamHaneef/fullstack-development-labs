import { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

import { donutChartMock } from "../../core/mock/chartMock";
import { getDonutChartData } from "../../core/api/chartApi";

const USE_MOCK = false;

function DonutChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const renderChart = async () => {
      const data = USE_MOCK ? donutChartMock : await getDonutChartData();

      chart = new Chart({
        container: chartRef.current,
        autoFit: true,
      });

      chart.options({
        type: "interval",
        data,
        transform: [{ type: "stackY" }],
        coordinate: { type: "theta", innerRadius: 0.5 },
        encode: { y: "value", color: "genre" },
      });

      chart.render();
    };

    renderChart();

    return () => chart?.destroy();
  }, []);

  return <div ref={chartRef} style={{ height: 400 }} />;
}

export default DonutChart;
