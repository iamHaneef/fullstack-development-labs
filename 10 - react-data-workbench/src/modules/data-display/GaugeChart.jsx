import React, { useEffect, useRef } from "react";
import { Gauge } from "@antv/g2plot";

function GaugeChart() {
    const containerRef = useRef(null);

    const score = 199;

    const legends = [
        { id: 1, name: "Excellent", color: "#0a85ed", limit: 100 },
        { id: 2, name: "Very Good", color: "#008000", limit: 80 },
        { id: 3, name: "Good", color: "#ffba0d", limit: 60 },
        { id: 4, name: "Fair", color: "#ff820d", limit: 40 },
        { id: 5, name: "Bad", color: "#d62839", limit: 20 },
    ];

    let current = null;

    for (let i = 0; i < legends.length - 1; i++) {
        if (score <= legends[i].limit && score >= legends[i + 1].limit) {
            current = legends[i];
            break;
        }
        else if (i == legends.length - 1 && score > legends[i].limit) {
            current = legends[0];
            break;
        }
    }

    // 🔹 Get the name of current rating
    const level = current ? current.name : "Invalid";


    useEffect(() => {
        //main logic to show Gauge chart
        const gauge = new Gauge(containerRef.current, {
            percent: score / 100,

            innerRadius: 0.8,

            range: {
                ticks: [0, 0.20, 0.40, 0.60, 0.80, 1],
                color: ["#d62839", "#ff820d", "#ffba0d", "#60bf60", "#83e0f7ff"],
            },

            indicator: {
                pointer: {
                    style: {
                        stroke: "#999494",
                        lineWidth: 3,
                    },
                },
                pin: {
                    style: {
                        stroke: "#999494",
                    },
                },
            },

            axis: {
                label: {
                    formatter: (v) => (Number(v) * 100).toFixed(0),
                },
            },

            statistic: {
                content: {
                    formatter: () => `${level}: ${score}`,
                    style: {
                        fill: current?.color || "#000",
                        fontSize: 24,
                        fontWeight: 500,
                    },
                },
            },
        });

        gauge.render();

        return () => gauge.destroy();
    }, []);

    return (
        <div>
            <div ref={containerRef} style={{ width: 500, height: 250 }} />

            {/* 🔹 Legends UI (same as your production idea) */}
            <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                {legends.map((item) => (
                    <div key={item.id} style={{ display: "flex", gap: 6 }}>
                        <div
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                background: item.color,
                                marginTop: "8px",
                                marginRight: "4px",
                            }}
                        />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GaugeChart;