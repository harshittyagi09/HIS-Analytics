import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MedisuiteGraph = ({ data }: any) => (
    <ResponsiveBar
        data={data}
        groupMode={'grouped'}
        keys={['HPR[RMC]', 'MND[RMC]', 'LKN[DNT]', 'MND[RAC]', 'LKN[BSKIMS]', 'BGT[RIMS]', 'MND[RDC]']}
        indexBy="department"
        margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        // colors={{ scheme: 'nivo' }}
        // enableTotals={true}
        colors={['#91D9BD', '#8CA1CD', '#E4B19A', '#D66473', '#C6CC8A', '#CC7BEF', '#EB4A4A']}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true,
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
            },
        ]}
        borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 2,
            tickPadding: 5,
            tickRotation: 0,
            // legend: 'Department',
            legendPosition: 'middle',
            legendOffset: 32,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: 'Count',
            legendPosition: 'middle',
            legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 20,
                translateY: 65,
                itemsSpacing: 10,
                itemWidth: 70,
                itemHeight: 40,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 10,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
        theme={{
            tooltip: {
                container: {
                    fontSize: '10px',
                    padding: '5px 8px',
                    background: '#ffffff',
                    color: '#333',
                    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '3px'
                }
            }
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => e.id + ": " + e.formattedValue + " in department: " + e.indexValue}
    />
);

export default MedisuiteGraph;
