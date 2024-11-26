import { ResponsivePie } from '@nivo/pie';

export const ImsCapexStock = (props: any) => {

    const { opexData } = props;

    const transformToChartData = (data: any) => {
        return data?.map((item: any) => ({
            id: item.name,
            label: item.name,
            value: Math.round(item.capexStockvalue),
        }));
    };

    return (
        <ResponsivePie
            data={transformToChartData(opexData)}
            margin={{ top: 40, right: 80, bottom: 40, left: -30 }}
            innerRadius={0.5}
            padAngle={2}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            // colors={{ scheme: 'nivo' }}
            colors={['#91D9BD', '#8CA1CD', '#E4B19A', '#D66473', '#C6CC8A', '#CC7BEF', '#EB4A4A', '#9dcc64', '#cc9664', '#cc7764']}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
            }}
            arcLinkLabelsSkipAngle={2}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
            }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            arcLabelsRadiusOffset={2}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 20,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'right-to-left',
                    itemOpacity: 1,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
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
            }}
        />
    );
};

export default ImsCapexStock;