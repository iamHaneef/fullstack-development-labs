import { Sankey } from "@ant-design/plots";

function SankeyChart() {
    const data = [
        {
            source: "Webhook Request",
            target: "File Processing",
            value: 160,
        },
        {
            source: "Manual Upload",
            target: "File Processing",
            value: 40,
        },
        {
            source: "API Upload",
            target: "File Processing",
            value: 25,
        },
        {
            source: "Scheduler",
            target: "File Processing",
            value: 15,
        },

        {
            source: "File Processing",
            target: "Policy Validation",
            value: 180,
        },
        {
            source: "File Processing",
            target: "Failed Files",
            value: 20,
        },

        {
            source: "Policy Validation",
            target: "JSON Blob Output",
            value: 120,
        },
        {
            source: "Policy Validation",
            target: "Masked Output",
            value: 35,
        },
        {
            source: "Policy Validation",
            target: "Blocked Files",
            value: 25,
        },
    ];

    const config = {
        data,

        sourceField: "source",
        targetField: "target",
        weightField: "value",

        nodeWidthRatio: 0.02,
        nodePaddingRatio: 0.03,
        height: 500,
    };

    return (
        <div
            style={{
                background: "#fff",
                padding: "24px",
                borderRadius: "12px",
            }}
        >
            <h2
                style={{
                    marginBottom: "24px",
                }}
            >
                Webhook Processing Flow
            </h2>

            <Sankey {...config} />
        </div>
    );
}

export default SankeyChart;