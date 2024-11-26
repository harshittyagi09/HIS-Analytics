import { ResponsiveBar } from "@nivo/bar";

export const PaymentVerificationBarGraph = (props: any) => {

    const { data } = props;
    const colors: any = { acknowledged: "#8CA1CD", pending: "#C6CC8A", not_Acknowledge: "#EB4A4A" };

    const transformData = (data: Array<{ location_id: number; hospital: string; acknowledged: number; pending: number; not_Acknowledge: number }>) => {
        return data.map((item) => ({
            ...item,
            pending: item.pending > 0 ? -item.pending : item.pending,
            not_Acknowledge: item.not_Acknowledge > 0 ? -item.not_Acknowledge : item.not_Acknowledge,
        }));
    };

    return (
        <ResponsiveBar
            data={transformData(data)}
            keys={["acknowledged", "pending", "not_Acknowledge"]}
            indexBy="hospital"
            margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
            padding={0.3}
            layout="vertical"
            colors={({ id }: any) => colors[id]}
            enableLabel={false}
            axisLeft={{
                legendPosition: "middle",
                legendOffset: -40,
                format: (value) => `${value / 1000}k`
            }}
            axisBottom={{
                legendPosition: "middle",
                legendOffset: 40,
            }}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom",
                    direction: "row",
                    translateX: 40,
                    translateY: 45,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemsSpacing: 2,
                    symbolSize: 10,
                },
            ]}
            theme={{
                labels: {
                    text: {
                        fontSize: 12,
                        // fontWeight: "bold",
                    },
                },
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
    )
};

export default PaymentVerificationBarGraph;