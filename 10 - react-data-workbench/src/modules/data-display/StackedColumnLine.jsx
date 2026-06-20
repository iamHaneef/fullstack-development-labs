import { Column, Line } from "@ant-design/plots";

function StackedColumnLine() {
    const columnData = [
        {
            time: "2019-03",
            value: 350,
            type: "uv",
        },
        {
            time: "2019-03",
            value: 220,
            type: "bill",
        },
        {
            time: "2019-04",
            value: 900,
            type: "uv",
        },
        {
            time: "2019-04",
            value: 300,
            type: "bill",
        },
        {
            time: "2019-05",
            value: 300,
            type: "uv",
        },
        {
            time: "2019-05",
            value: 250,
            type: "bill",
        },
        {
            time: "2019-06",
            value: 450,
            type: "uv",
        },
        {
            time: "2019-06",
            value: 220,
            type: "bill",
        },
        {
            time: "2019-07",
            value: 470,
            type: "uv",
        },
        {
            time: "2019-07",
            value: 362,
            type: "bill",
        },
    ];

    const lineData = [
        {
            time: "2019-03",
            count: 800,
        },
        {
            time: "2019-04",
            count: 600,
        },
        {
            time: "2019-05",
            count: 400,
        },
        {
            time: "2019-06",
            count: 380,
        },
        {
            time: "2019-07",
            count: 220,
        },
    ];

    const config = {
        data: { column: columnData, line: lineData, },

        xField: "time", // xField is common for both column and line charts

        // main prop is geometryOptions
        geometryOptions: [
            {
                geometry: "column",
                yField: "value",  // column yField
                seriesField: "type",

            },
            {
                geometry: "line",
                yField: "count", // line yField
            },
        ],
    };
    rturn(
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "500px",
                background: "#fff",
            }}
        >
            <Column
                {...config.geometryOptions[0]}  // geometryOptions is an array
                data={config.data.column}
                xField={config.xField}
            />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                }}
            >
                <Line
                    {...config.geometryOptions[1]}  // geometryOptions is an array
                    data={config.data.line}
                    xField={config.xField}
                />
            </div>
        </div>
    );
}

export default StackedColumnLine;