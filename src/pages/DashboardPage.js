import React from 'react';
import { Col } from 'antd';
import ChartRenderer from '../components/ChartRenderer';
import Dashboard from '../components/Dashboard';
import DashboardItem from '../components/DashboardItem';
import { TypeToChartComponent } from '../components/ChartRenderer';

const types = Object.keys(TypeToChartComponent);
const dashboardItems = Array.from({ length: types.length }, (value, index) => {
    return {
        name: types[index],
        vizState: {
            chartType: types[index],
            query: {
                measures: ['Orders.count'],
                timeDimensions: [
                    {
                        dimension: 'Orders.createdAt',
                        dateRange: ['2017-01-01', '2018-12-31'],
                        granularity: 'month',
                    },
                ],
            },
        },
    };
});

const DashboardPage = () => {
    const Empty = () => (
        <div
            style={{
                textAlign: 'center',
                padding: 12,
            }}
        >
            <h2>There are no charts on this dashboard. Use Playground Build to add one.</h2>
        </div>
    );

    return dashboardItems.length ? (
        <Dashboard dashboardItems={dashboardItems}>
            {dashboardItems.map((item, index) => (
                <Col
                    key={index}
                    span={24}
                    lg={12}
                    style={{
                        marginBottom: '24px',
                    }}
                >
                    <DashboardItem title={item.name}>
                        <ChartRenderer vizState={item.vizState} />
                    </DashboardItem>
                </Col>
            ))}
        </Dashboard>
    ) : (
        <Empty />
    );
};

export default DashboardPage;
