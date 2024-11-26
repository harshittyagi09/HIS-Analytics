import { useState, useEffect } from 'react';
import { Button, ButtonContainer, Container, Icon, IconWrapper, Label, NavButton, Percentage, SubContainer, Total } from './Cencus.styles';
import ConversionImg from '../../../images/opdIpdCvnImg.png';
import { GetAllHospitalsLocation, GetCensusData } from '../../../../services/censusServices/CensusServices';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function OpdIpdConversion(props: any) {

  const { selectedLoc } = props;

  const [allHospitalsLoc, setAllHospitalsLoc] = useState<any>([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleButtons = 2;

  const [percentage, setPercentage] = useState<any>(0);
  const [admCount, setAdmCount] = useState<any>(0);
  const [censusCount, setCensusCount] = useState<any>(0);

  // const [selectedLoc, setSelectedLoc] = useState<any>({
  //   locName: 'HPR[RMC]',
  //   locId: 1
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
        const censusRes: any = await GetCensusData();
        calculateCensusPercentage(censusRes?.data);
      } catch (err: any) {
        console.log("GetOpdIpdConversionRate API error", err);
      }
    }
    getData();
  }, [selectedLoc]);

  const calculateCensusPercentage = (data: any) => {

    if (!data.length) return window.alert("No data available");

    const selectedEntry = data.find((entry: any) => entry.locationID === selectedLoc.locId);

    if (!selectedEntry) {
      // return window.alert(`No data found for location ID ${selectedLoc.locId}`);
      return 0.00
    }

    const { admissionPatientCount, censusPatientCount } = selectedEntry;

    // if (censusPatientCount === 0) {
    //   return console.warn(`Census count is 0 for location ID ${selectedLoc.locId}, unable to calculate percentage.`);
    // }

    const percentage = ((censusPatientCount / admissionPatientCount) * 100).toFixed(2);
    setPercentage(percentage);
    setAdmCount(admissionPatientCount);
    setCensusCount(censusPatientCount);
  };

  // const handleLeftClick = () => {
  //   setStartIndex((prev) => Math.max(prev - 1, 0));
  // };

  // const handleRightClick = () => {
  //   setStartIndex((prev) => Math.min(prev + 1, allHospitalsLoc.length - visibleButtons));
  // };

  // const handleButtonClick = (locationID: any, name: any) => {
  //   setSelectedLoc({
  //     locName: name,
  //     locId: locationID
  //   })
  // }

  // const visibleLocations = allHospitalsLoc.slice(startIndex, startIndex + visibleButtons);

  return (
    // <Container>
    //   <SubContainer>
    //     <IconWrapper style={{ height: '90px', width: '90px' }}>
    //       <Icon style={{ height: '50px', width: '50px' }} image={ConversionImg} />
    //     </IconWrapper>
    //     <div>
    //       <Percentage>{percentage}%</Percentage>
    //       <Label>IPD Census</Label>
    //       <Total>{censusCount}/{admCount}</Total>
    //     </div>
    //   </SubContainer>
    //   <ButtonContainer>
    //     <NavButton onClick={handleLeftClick} disabled={startIndex === 0}>
    //       {/* {'<'} */} <ArrowLeftIcon />
    //     </NavButton>
    //     {visibleLocations.map((loc: any) => (
    //       <Button isActive={loc.locationID === selectedLoc.locId} key={loc.locationID} onClick={() => handleButtonClick(loc.locationID, loc.name)}>
    //         {loc.name}
    //       </Button>
    //     ))}
    //     <NavButton
    //       onClick={handleRightClick}
    //       disabled={startIndex + visibleButtons >= allHospitalsLoc.length}
    //     >
    //       {/* {'>'} */} <ArrowRightIcon />
    //     </NavButton>
    //   </ButtonContainer>
    // </Container>

    <Container>
      <SubContainer>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid transparent' }}>
          <Label>Census</Label>
          <Total>{censusCount}/{admCount}</Total>
        </div>
        <div style={{ border: '1px solid transparent' }}>
          <Percentage>{percentage}%</Percentage>
        </div>
      </SubContainer>
    </Container>
  );
}