// import { ResponsiveLine } from '@nivo/line'
// function Test () {
//     let data: any = [
//         {
//             "id": "japan",
//             "color": "hsl(218, 70%, 50%)",
//             "data": [
//                 {
//                     "x": "plane",
//                     "y": 176
//                 },
//                 {
//                     "x": "helicopter",
//                     "y": 89
//                 },
//                 {
//                     "x": "boat",
//                     "y": 297
//                 },
//                 {
//                     "x": "train",
//                     "y": 165
//                 },
//                 {
//                     "x": "subway",
//                     "y": 64
//                 },
//                 {
//                     "x": "bus",
//                     "y": 155
//                 },
//                 {
//                     "x": "car",
//                     "y": 113
//                 },
//                 {
//                     "x": "moto",
//                     "y": 45
//                 },
//                 {
//                     "x": "bicycle",
//                     "y": 61
//                 },
//                 {
//                     "x": "horse",
//                     "y": 279
//                 },
//                 {
//                     "x": "skateboard",
//                     "y": 263
//                 },
//                 {
//                     "x": "others",
//                     "y": 247
//                 }
//             ]
//         },
//         {
//             "id": "france",
//             "color": "hsl(250, 70%, 50%)",
//             "data": [
//                 {
//                     "x": "plane",
//                     "y": 287
//                 },
//                 {
//                     "x": "helicopter",
//                     "y": 23
//                 },
//                 {
//                     "x": "boat",
//                     "y": 14
//                 },
//                 {
//                     "x": "train",
//                     "y": 249
//                 },
//                 {
//                     "x": "subway",
//                     "y": 122
//                 },
//                 {
//                     "x": "bus",
//                     "y": 30
//                 },
//                 {
//                     "x": "car",
//                     "y": 132
//                 },
//                 {
//                     "x": "moto",
//                     "y": 55
//                 },
//                 {
//                     "x": "bicycle",
//                     "y": 280
//                 },
//                 {
//                     "x": "horse",
//                     "y": 273
//                 },
//                 {
//                     "x": "skateboard",
//                     "y": 170
//                 },
//                 {
//                     "x": "others",
//                     "y": 200
//                 }
//             ]
//         },
//         {
//             "id": "us",
//             "color": "hsl(29, 70%, 50%)",
//             "data": [
//                 {
//                     "x": "plane",
//                     "y": 217
//                 },
//                 {
//                     "x": "helicopter",
//                     "y": 125
//                 },
//                 {
//                     "x": "boat",
//                     "y": 132
//                 },
//                 {
//                     "x": "train",
//                     "y": 9
//                 },
//                 {
//                     "x": "subway",
//                     "y": 230
//                 },
//                 {
//                     "x": "bus",
//                     "y": 160
//                 },
//                 {
//                     "x": "car",
//                     "y": 186
//                 },
//                 {
//                     "x": "moto",
//                     "y": 1
//                 },
//                 {
//                     "x": "bicycle",
//                     "y": 138
//                 },
//                 {
//                     "x": "horse",
//                     "y": 247
//                 },
//                 {
//                     "x": "skateboard",
//                     "y": 262
//                 },
//                 {
//                     "x": "others",
//                     "y": 251
//                 }
//             ]
//         },
//         {
//             "id": "germany",
//             "color": "hsl(159, 70%, 50%)",
//             "data": [
//                 {
//                     "x": "plane",
//                     "y": 106
//                 },
//                 {
//                     "x": "helicopter",
//                     "y": 259
//                 },
//                 {
//                     "x": "boat",
//                     "y": 231
//                 },
//                 {
//                     "x": "train",
//                     "y": 129
//                 },
//                 {
//                     "x": "subway",
//                     "y": 254
//                 },
//                 {
//                     "x": "bus",
//                     "y": 12
//                 },
//                 {
//                     "x": "car",
//                     "y": 28
//                 },
//                 {
//                     "x": "moto",
//                     "y": 100
//                 },
//                 {
//                     "x": "bicycle",
//                     "y": 188
//                 },
//                 {
//                     "x": "horse",
//                     "y": 273
//                 },
//                 {
//                     "x": "skateboard",
//                     "y": 215
//                 },
//                 {
//                     "x": "others",
//                     "y": 87
//                 }
//             ]
//         },
//         {
//             "id": "norway",
//             "color": "hsl(218, 70%, 50%)",
//             "data": [
//                 {
//                     "x": "plane",
//                     "y": 149
//                 },
//                 {
//                     "x": "helicopter",
//                     "y": 89
//                 },
//                 {
//                     "x": "boat",
//                     "y": 64
//                 },
//                 {
//                     "x": "train",
//                     "y": 72
//                 },
//                 {
//                     "x": "subway",
//                     "y": 245
//                 },
//                 {
//                     "x": "bus",
//                     "y": 25
//                 },
//                 {
//                     "x": "car",
//                     "y": 59
//                 },
//                 {
//                     "x": "moto",
//                     "y": 104
//                 },
//                 {
//                     "x": "bicycle",
//                     "y": 3
//                 },
//                 {
//                     "x": "horse",
//                     "y": 241
//                 },
//                 {
//                     "x": "skateboard",
//                     "y": 270
//                 },
//                 {
//                     "x": "others",
//                     "y": 111
//                 }
//             ]
//         }
//     ]

//     return (
//         <ResponsiveLine
//             data={data}
//             margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//             xScale={{ type: 'point' }}
//             yScale={{
//                 type: 'linear',
//                 min: 'auto',
//                 max: 'auto',
//                 stacked: true,
//                 reverse: false
//             }}
//             yFormat=" >-.2f"
//             axisTop={null}
//             axisRight={null}
//             axisBottom={{
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: 'transportation',
//                 legendOffset: 36,
//                 legendPosition: 'middle',
//                 truncateTickAt: 0
//             }}
//             axisLeft={{
//                 tickSize: 5,
//                 tickPadding: 5,
//                 tickRotation: 0,
//                 legend: 'count',
//                 legendOffset: -40,
//                 legendPosition: 'middle',
//                 truncateTickAt: 0
//             }}
//             pointSize={10}
//             pointColor={{ theme: 'background' }}
//             pointBorderWidth={2}
//             pointBorderColor={{ from: 'serieColor' }}
//             pointLabel="data.yFormatted"
//             pointLabelYOffset={-12}
//             enableTouchCrosshair={true}
//             useMesh={true}
//             legends={[
//                 {
//                     anchor: 'bottom-right',
//                     direction: 'column',
//                     justify: false,
//                     translateX: 100,
//                     translateY: 0,
//                     itemsSpacing: 0,
//                     itemDirection: 'left-to-right',
//                     itemWidth: 80,
//                     itemHeight: 20,
//                     itemOpacity: 0.75,
//                     symbolSize: 12,
//                     symbolShape: 'circle',
//                     symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                     effects: [
//                         {
//                             on: 'hover',
//                             style: {
//                                 itemBackground: 'rgba(0, 0, 0, .03)',
//                                 itemOpacity: 1
//                             }
//                         }
//                     ]
//                 }
//             ]}
//         />
//     )
// }

// export default Test;

import { ResponsiveLine } from '@nivo/line'
import { timeParse, timeFormat } from 'd3-time-format'

function Test () {
    // Example data with 24-hour time format
    let data = [
        {
            "id": "japan",
            "color": "hsl(218, 70%, 50%)",
            "data": [
                { "x": "00:00", "y": 176 },
                { "x": "01:00", "y": 89 },
                { "x": "02:00", "y": 297 },
                { "x": "03:00", "y": 165 },
                { "x": "04:00", "y": 64 },
                // { "x": "05:00", "y": 155 },
                // { "x": "06:00", "y": 113 },
                // { "x": "07:00", "y": 45 },
                { "x": "08:00", "y": 61 },
                { "x": "09:00", "y": 279 },
                { "x": "10:00", "y": 263 },
                { "x": "11:00", "y": 247 },
                { "x": "12:00", "y": 300 },
                { "x": "13:00", "y": 190 },
                { "x": "14:00", "y": 123 },
                { "x": "15:00", "y": 89 },
                { "x": "16:00", "y": 300 },
                { "x": "17:00", "y": 270 },
                // { "x": "18:00", "y": 250 },
                // { "x": "19:00", "y": 160 },
                // { "x": "20:00", "y": 120 },
                // { "x": "21:00", "y": 110 },
                // { "x": "22:00", "y": 100 },
                // { "x": "23:00", "y": 200 }
            ]
        },
        {
            "id": "france",
            "color": "hsl(250, 70%, 50%)",
            "data": [
                // { "x": "00:00", "y": 200 },
                // { "x": "01:00", "y": 210 },
                // { "x": "02:00", "y": 160 },
                // { "x": "03:00", "y": 130 },
                // { "x": "04:00", "y": 90 },
                { "x": "05:00", "y": 100 },
                { "x": "06:00", "y": 140 },
                { "x": "07:00", "y": 250 },
                { "x": "08:00", "y": 300 },
                { "x": "09:00", "y": 180 },
                { "x": "10:00", "y": 170 },
                { "x": "11:00", "y": 210 },
                { "x": "12:00", "y": 190 },
                { "x": "13:00", "y": 220 },
                { "x": "14:00", "y": 240 },
                { "x": "15:00", "y": 180 },
                { "x": "16:00", "y": 130 },
                { "x": "17:00", "y": 100 },
                { "x": "18:00", "y": 120 },
                // { "x": "19:00", "y": 190 },
                // { "x": "20:00", "y": 210 },
                // { "x": "21:00", "y": 260 },
                { "x": "22:00", "y": 230 },
                { "x": "23:00", "y": 180 }
            ]
        },
        {
            "id": "us",
            "color": "hsl(29, 70%, 50%)",
            "data": [
                { "x": "00:00", "y": 130 },
                { "x": "01:00", "y": 140 },
                { "x": "02:00", "y": 150 },
                { "x": "03:00", "y": 160 },
                // { "x": "04:00", "y": 170 },
                // { "x": "05:00", "y": 130 },
                // { "x": "06:00", "y": 140 },
                // { "x": "07:00", "y": 210 },
                // { "x": "08:00", "y": 220 },
                // { "x": "09:00", "y": 300 },
                { "x": "10:00", "y": 290 },
                { "x": "11:00", "y": 200 },
                { "x": "12:00", "y": 230 },
                { "x": "13:00", "y": 240 },
                { "x": "14:00", "y": 170 },
                { "x": "15:00", "y": 180 },
                { "x": "16:00", "y": 190 },
                { "x": "17:00", "y": 160 },
                { "x": "18:00", "y": 220 },
                { "x": "19:00", "y": 280 },
                { "x": "20:00", "y": 250 },
                { "x": "21:00", "y": 210 },
                { "x": "22:00", "y": 200 },
                { "x": "23:00", "y": 240 }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(159, 70%, 50%)",
            "data": [
                { "x": "00:00", "y": 140 },
                { "x": "01:00", "y": 160 },
                // { "x": "02:00", "y": 130 },
                // { "x": "03:00", "y": 120 },
                { "x": "04:00", "y": 140 },
                { "x": "05:00", "y": 180 },
                { "x": "06:00", "y": 230 },
                { "x": "07:00", "y": 240 },
                { "x": "08:00", "y": 170 },
                { "x": "09:00", "y": 220 },
                { "x": "10:00", "y": 260 },
                { "x": "11:00", "y": 230 },
                { "x": "12:00", "y": 200 },
                // { "x": "13:00", "y": 210 },
                { "x": "14:00", "y": 190 },
                { "x": "15:00", "y": 180 },
                { "x": "16:00", "y": 170 },
                { "x": "17:00", "y": 210 },
                { "x": "18:00", "y": 220 },
                { "x": "19:00", "y": 230 },
                { "x": "20:00", "y": 240 },
                { "x": "21:00", "y": 200 },
                { "x": "22:00", "y": 180 },
                { "x": "23:00", "y": 190 }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(218, 70%, 50%)",
            "data": [
                { "x": "00:00", "y": 190 },
                { "x": "01:00", "y": 130 },
                { "x": "02:00", "y": 140 },
                { "x": "03:00", "y": 160 },
                // { "x": "04:00", "y": 120 },
                // { "x": "05:00", "y": 170 },
                // { "x": "06:00", "y": 150 },
                // { "x": "07:00", "y": 220 },
                // { "x": "08:00", "y": 240 },
                { "x": "09:00", "y": 230 },
                { "x": "10:00", "y": 190 },
                { "x": "11:00", "y": 160 },
                { "x": "12:00", "y": 180 },
                { "x": "13:00", "y": 150 },
                { "x": "14:00", "y": 200 },
                { "x": "15:00", "y": 190 },
                { "x": "16:00", "y": 170 },
                { "x": "17:00", "y": 160 },
                { "x": "18:00", "y": 210 },
                { "x": "19:00", "y": 220 },
                { "x": "20:00", "y": 180 },
                { "x": "21:00", "y": 200 },
                // { "x": "22:00", "y": 250 },
                { "x": "23:00", "y": 230 }
            ]
        }
    ];
    

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
                type: 'time',
                format: '%H:%M',
                precision: 'hour',
            }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            xFormat="time:%H:%M"
            axisBottom={{
                format: '%I:%M %p',
                tickValues: 'every 1 hour',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: 'time',
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableArea={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default Test;
