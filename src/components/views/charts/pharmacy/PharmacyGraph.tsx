import { ResponsiveBar } from "@nivo/bar";

const PharmacyGraph = ({ data }: any) => {

    function TransformDataForNivo(data: any) {
        const billingGroups: any = Array.from(new Set(data.map((item: any) => item.billinggroup)));

        const transformedData = data.reduce((acc: any, item: any) => {
            const { hospital, billinggroup, amount } = item;

            let existingHospital = acc.find((entry: any) => entry.hospital === hospital);
            if (!existingHospital) {
                existingHospital = { hospital };
                acc.push(existingHospital);
            }

            existingHospital[billinggroup] = Number(amount);

            return acc;
        }, []);

        return { transformedData, billingGroups };
    }

    const { transformedData, billingGroups } = TransformDataForNivo(data);

    return (
        <ResponsiveBar
            data={transformedData}
            keys={billingGroups}
            indexBy="hospital"
            margin={{ top: 0, right: 50, bottom: 60, left: 120 }}
            padding={0.3}
            layout="horizontal"
            enableLabel={false}
            // colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            enableTotals={true}
            colors={['#91D9BD', '#8CA1CD', '#E4B19A', '#D66473', '#C6CC8A', '#CC7BEF', '#EB4A4A']}
            // gridXValues={[]}
            // axisBottom={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     // legend: 'Amount',
            //     legendPosition: 'middle',
            //     legendOffset: 32,
            //     format: (value) => `${value / 1000}k`
            // }}
            axisBottom={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 15,
                tickRotation: 0,
                // legend: 'Hospital',
                legendPosition: 'middle',
                legendOffset: -100
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 30,
                    translateY: 60,
                    itemsSpacing: 2,
                    itemWidth: 50,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 10,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
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
                        borderRadius: '3px'
                    }
                }
            }}
            role="application"
            ariaLabel="Nivo bar chart showing hospital billing data"
            barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in hospital: ${e.indexValue}`}
        />
    );
};

export default PharmacyGraph;
