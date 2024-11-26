import { ResponsiveLine } from '@nivo/line';

export const LabRevenue = (props: any) => {

    const { data } = props;

    function convertHospitalData(inputData: any) {

        const result: any = [
            {
                "id": "IPD Radiology",
                "color": "hsl(313, 70%, 50%)",
                "data": []
            },
            {
                "id": "OPD Radiology",
                "color": "hsl(313, 70%, 50%)",
                "data": []
            },
            {
                "id": "Radiology Total Amount",
                "color": "hsl(313, 70%, 50%)",
                "data": []
            },
            {
                "id": "IPD Pathology",
                "color": "hsl(313, 70%, 50%)",
                "data": []
            },
            {
                "id": "OPD Pathology",
                "color": "hsl(313, 70%, 50%)",
                "data": []
            },
            {
                "id": "Pathology Total Amount",
                "color": "hsl(313, 70%, 50%)",
                "data": []
            }
        ];

        inputData.forEach((record: any) => {
            const hospitalName = record.hospitalName;

            result[0].data.push({ "x": hospitalName, "y": record.totalRadiologyAmountIPD });
            result[1].data.push({ "x": hospitalName, "y": record.totalRadiologyAmountOPD });
            result[2].data.push({ "x": hospitalName, "y": record.totalRadiologyAmount });
            result[3].data.push({ "x": hospitalName, "y": record.totalPathologyAmountIPD });
            result[4].data.push({ "x": hospitalName, "y": record.totalPathologyAmountOPD });
            result[5].data.push({ "x": hospitalName, "y": record.totalPathologyAmount });
        });

        return result;
    }

    const CustomLayer = ({ series, lineGenerator, xScale, yScale }: any) => (
        <g>
            {series.map((serie: any) => (
                <path
                    key={serie.id}
                    d={lineGenerator(
                        serie.data.map((d: any) => ({
                            x: xScale(d.data.x),
                            y: yScale(d.data.y),
                        }))
                    )}
                    fill="none"
                // stroke={serie.color}
                // strokeWidth={4}
                // strokeDasharray="5,5"
                />
            ))}
        </g>
    );


    return (
        <ResponsiveLine
            data={data && convertHospitalData(data)}
            margin={{ top: 30, right: 40, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', stacked: true }}
            curve="linear"
            lineWidth={3}
            enableSlices="x"
            colors={['#91D9BD', '#8CA1CD', '#E4B19A', '#D66473', '#C6CC8A', '#CC7BEF', '#EB4A4A']}
            pointSize={3}
            pointColor="white"
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            enableArea={true}
            areaOpacity={0.1}
            axisBottom={{ legendOffset: 20 }}
            theme={{
                crosshair: {
                    line: {
                        stroke: '#774dd7',
                        strokeWidth: 2,
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
            layers={[
                'grid',
                'markers',
                'areas',
                CustomLayer,
                'lines',
                'slices',
                'axes',
                'points',
                'legends',
            ]}
        />
    );
};

export default LabRevenue;