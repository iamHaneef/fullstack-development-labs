import React, { useEffect, useRef, useState } from "react";
import { Line } from "@antv/g2plot";

const LineChart = () => {
    const [data, setData] = useState([]);
    const containerRef = useRef(null);
    const chartRef = useRef(null);
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=5')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {

        if (data.length == 0) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        // line chart logic
        chartRef.current = new Line(containerRef.current, {
            data,
            xField: "price",
            yField: "rating",
            seriesField: "type",

            color: ["#30BF78", "#F4664A", "#FAAD14"],

            lineStyle: (datum) => {
                if (datum.type === "register") {
                    return { lineDash: [4, 4] };
                }
                return {};
            },
        });

        chartRef.current.render();

    }, [data]);

    return <div ref={containerRef} style={{ height: 300 }} />;
};

export default LineChart;