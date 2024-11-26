import { ResponsiveLine } from '@nivo/line';
import { differenceInMinutes, parse } from 'date-fns';

const RevenueGraph = (props: any) => {

    const { data, selectedFilter } = props;

    const CustomLegend = ({ data }: any) => {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', border: '1px solid green' }}>
                {data?.map((legend: any, index: any) => (
                    <div key={index} style={{ margin: '5px', fontSize: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ backgroundColor: legend.color, width: 10, height: 10, display: 'flex' }}></span>
                        {legend.id}
                    </div>
                ))}
            </div>
        );
    };

    const preprocessData = (data: any[]) => {
        return data.map((dataset: any) => {
            const processedData: any[] = [];
            let lastTime: string | null = null;

            dataset.data.forEach((item: any) => {
                const time = item.x;
                const currentTime = parse(time, 'HH:mm', new Date());
                const hoursDiff: any = selectedFilter === 'Today' ? 30 : 120

                if (!lastTime || differenceInMinutes(currentTime, parse(lastTime, 'HH:mm', new Date())) >= hoursDiff) { // 120 instead of 60
                    processedData.push(item);
                    lastTime = time;
                }
            });

            return {
                ...dataset,
                data: processedData,
            };
        });
    };

    const preprocessDataWeekly = (data: any[]) => {
        return data.map(dataset => ({
            ...dataset,
            data: dataset.data.map((item: any) => ({
                x: item.x,
                y: item.y
            }))
        }));
    };

    return (
        <>
            <ResponsiveLine
                data={selectedFilter === 'Weekly' ? preprocessDataWeekly(data) : preprocessData(data)}
                margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
                colors={['#91D9BD', '#8CA1CD', '#E4B19A', '#D66473', '#C6CC8A', '#CC7BEF', '#EB4A4A']}
                curve='cardinal'
                xScale={{ type: 'point' }}
                enableSlices='x'
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: false,
                    reverse: false,
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    // legend: 'Time',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    // tickValues: ['00:00', '09:00', '10:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00', '24:00']
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    // legend: 'Count',
                    legendOffset: -50,
                    legendPosition: 'middle',
                    format: (value) => `${value / 1000}k`
                }}
                pointSize={5}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 10,
                        translateY: 60,
                        itemsSpacing: 60,
                        itemDirection: 'left-to-right',
                        itemWidth: 40,
                        itemHeight: 10,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                // legends={[]}
                theme={{
                    tooltip: {
                        container: {
                            fontSize: '10px',
                            padding: '5px 8px',
                            background: '#ffffff',
                            color: '#333',
                            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
                            borderRadius: '3px',
                        },
                    },
                }} />
            {/* <CustomLegend data={data} /> */}
        </>
    );
};

export default RevenueGraph;