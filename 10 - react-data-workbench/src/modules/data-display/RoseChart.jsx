import { Rose } from '@ant-design/plots';

const RoseChart = () => {
    const data = [
        {
            type: 'Sales',
            value: 27,
        },
        {
            type: 'Cost',
            value: 25,
        },
        {
            type: 'Tax',
            value: 18,
        },
        {
            type: 'Expense',
            value: 19,
        },
        {
            type: 'Salary',
            value: 17,
        },
        {
            type: 'Bonus',
            value: 15,
        },
    ];

    const config = {
        data,

        xField: 'type',

        yField: 'value',

        colorField: 'type',

        radius: 0.9,

        roseType: 'area',

        theme: 'light',

        legend: {
            position: 'bottom',
        },

        label: {
            offset: -15,
            style: {
                fill: '#000',
                fontSize: 12,
                textAlign: 'center',
            },
        },

        tooltip: {
            showMarkers: false,
        },
    };

    return (
        <div
            style={{
                background: '#fff',
                padding: '24px',
            }}
        >
            <Rose {...config} />
        </div>
    );
};

export default RoseChart;