import { useState, useEffect } from 'react';
import { Button, ButtonContainer, Container, Icon, IconWrapper, Label, NavButton, Percentage, SubContainer, Total } from './OpdIpdConversion.styles';
import ConversionImg from '../../../images/opdIpdCvnImg.png';
import { GetAllHospitalsLocation } from '../../../../services/censusServices/CensusServices';
import { GetOpdIpdConversionRate } from '../../../../services/opdIpdConversionServices/opdIpdConversionDervices';

export default function OpdIpdConversion(props: any) {

    const { selectedLoc } = props;

    const [allHospitalsLoc, setAllHospitalsLoc] = useState<any>([]);
    const [startIndex, setStartIndex] = useState(0);
    const visibleButtons = 3;

    const [percentage, setPercentage] = useState<any>(0);
    const [total, setTotal] = useState<any>(0); // last date opd_count
    const [difference, setDifference] = useState<any>(0); // last Date admittedondate

    // const [conversionData, setConversiondata] = useState<any>([]);
    // const [selectedLoc, setSelectedLoc] = useState<any>({
    //     locName: 'HPR[RMC]',
    //     locId: 1
    // })

    useEffect(() => {
        const getData = async () => {
            try {
                const locationRes: any = await GetAllHospitalsLocation();
                setAllHospitalsLoc(locationRes?.data);
            } catch (err: any) {
                console.log("GetAllHospitalsLocation API error", err);
            }

            try {
                const conversionRes: any = await GetOpdIpdConversionRate(selectedLoc.locId);
                // const sortedData: any = conversionRes?.data?.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
                // calculateIpdPercentage(sortedData);
                calculateIpdPercentage(conversionRes?.data);
            } catch (err: any) {
                console.log("GetOpdIpdConversionRate API error", err);
            }
        }
        getData();
    }, [selectedLoc]);

    const calculateIpdPercentage = (data: any) => {
        if (data.length < 2) {
            window.alert("Incorrect data comparison");
            return;
        }
        const lastDate = data[data.length - 1];
        const previousDate = data[data.length - 2];

        const ipdDifference = Math.abs(lastDate.ipd_count - previousDate.ipd_count);

        // Check if opd_count is 0 to avoid NaN
        const ipdPercentage = lastDate.opd_count === 0 ? "0.00" : ((lastDate.admittedondate / lastDate.opd_count) * 100).toFixed(2);

        setDifference(lastDate.admittedondate);
        setTotal(lastDate.opd_count);
        setPercentage(ipdPercentage);
    };

    // Calculate the the percentage according to the date , if multiple dates willc come
    // const calculateIpdPercentage = (data: any) => {
    //     console.log("data", data);

    //     if (data.length < 2) return window.alert("Insufficient data for comparison");

    //     // Step 1: Group data by date
    //     const dataByDate = data.reduce((acc: any, entry: any) => {
    //         if (!acc[entry.date]) {
    //             acc[entry.date] = [];
    //         }
    //         acc[entry.date].push(entry);
    //         return acc;
    //     }, {});

    //     // Step 2: Sort dates in descending order (latest date first)
    //     const sortedDates = Object.keys(dataByDate).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

    //     // Step 3: Ensure there are at least two distinct dates for comparison
    //     if (sortedDates.length < 2) return window.alert("Not enough distinct dates for comparison");

    //     // Step 4: Get IPD counts for the latest and previous dates
    //     const latestDateEntries = dataByDate[sortedDates[0]];
    //     const previousDateEntries = dataByDate[sortedDates[1]];

    //     // Step 5: Calculate the sum of IPD counts for each date
    //     const latestIpdCount = latestDateEntries.reduce((sum: number, entry: any) => sum + entry.ipd_count, 0);
    //     const previousIpdCount = previousDateEntries.reduce((sum: number, entry: any) => sum + entry.ipd_count, 0);

    //     // Step 6: Calculate IPD difference and percentage
    //     const ipdDifference = Math.abs(latestIpdCount - previousIpdCount);
    //     const ipdPercentage = ((ipdDifference / latestIpdCount) * 100).toFixed(2);

    //     // Step 7: Set values (assuming setDifference, setTotal, setPercentage are available)
    //     setDifference(ipdDifference);
    //     setTotal(latestIpdCount);
    //     setPercentage(ipdPercentage);
    // };


    // const handleLeftClick = () => {
    //     setStartIndex((prev) => Math.max(prev - 1, 0));
    // };

    // const handleRightClick = () => {
    //     setStartIndex((prev) => Math.min(prev + 1, allHospitalsLoc.length - visibleButtons));
    // };

    // const handleButtonClick = (locationID: any, name: any) => {
    //     setSelectedLoc({
    //         locName: name,
    //         locId: locationID
    //     })
    // }

    const visibleLocations = allHospitalsLoc.slice(startIndex, startIndex + visibleButtons);

    return (
        // <Container>
        //     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        //         <IconWrapper style={{ height: '90px', width: '90px' }}>
        //             <Icon style={{ height: '50px', width: '50px' }} image={ConversionImg} />
        //         </IconWrapper>
        //         <div>
        //             <Percentage>{percentage}%</Percentage>
        //             <Label>IPD/OPD</Label>
        //             {/* <Total>{difference}/{total}</Total> */}
        //             <Total>{difference}/{total}</Total>
        //         </div>
        //     </div>
        //     <ButtonContainer>
        //         <NavButton onClick={handleLeftClick} disabled={startIndex === 0}>
        //             {'<'}
        //         </NavButton>
        //         {visibleLocations.map((loc: any) => (
        //             <Button isActive={loc.locationID === selectedLoc.locId} key={loc.locationID} onClick={() => handleButtonClick(loc.locationID, loc.name)}>
        //                 {loc.name}
        //             </Button>
        //         ))}
        //         <NavButton
        //             onClick={handleRightClick}
        //             disabled={startIndex + visibleButtons >= allHospitalsLoc.length}
        //         >
        //             {'>'}
        //         </NavButton>
        //     </ButtonContainer>
        // </Container>

        <Container>
            <SubContainer>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid transparent' }}>
                    <Label>IPD/OPD</Label>
                    {/* <Total>{difference}/{total}</Total> */}
                    <Total>{difference}/{total}</Total>
                </div>
                <div style={{ border: '1px solid transparent' }}>
                    <Percentage>{percentage}%</Percentage>
                </div>
            </SubContainer>
        </Container>
    );
}