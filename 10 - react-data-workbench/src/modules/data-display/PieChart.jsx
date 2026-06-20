import { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

import { pieChartMock } from "../../core/mock/chartMock";
import { getPieChartData } from "../../core/api/chartApi";

const USE_MOCK = true;

function PieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;

    const renderChart = async () => {
      const data = USE_MOCK
        ? pieChartMock
        : await getPieChartData();

      chart = new Chart({
        container: chartRef.current,
        autoFit: true,
      });

      chart.options({
        type: "interval",
        data,
        encode: { y: "value", color: "category" },
        transform: [{ type: "stackY" }],
        coordinate: { type: "theta", outerRadius: 0.8 },
      });

      chart.render();
    };

    renderChart();

    return () => chart?.destroy();
  }, []);

  return <div ref={chartRef} style={{ height: 400 }} />;
}

export default PieChart;