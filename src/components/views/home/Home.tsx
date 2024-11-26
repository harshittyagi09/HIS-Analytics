import { useEffect, useState } from 'react';
import MedisuiteGraph from '../charts/medisuite/MedisuiteGraph';
import RevenueGraph from '../charts/revenue/RevenueGraph';
import { GetMedisuiteDeptsData } from '../../../services/medisuiteServices/MedisuiteServices';
import Dummy from '../charts/medisuite/Dummy';
import { GetRevenueData, GetWeeklyRevenueData } from '../../../services/revenueServices/RevenueServices';
import { GetPharmacyDataSingleDay, GetPharmaItemsAnalysisSer, PharmacyVendorReturnStockSer } from '../../../services/pharmacyServices/PharmacyServices';
import PharmacyGraph from '../charts/pharmacy/PharmacyGraph';
import OpdIpdConversion from '../dashboardCards/OpdIpdConversion/OpdIpdConversion';
import Census from '../dashboardCards/census/Census';
import { GetCurrentDate, GetOneMonthFromToday, GetOneWeekFromToday, GetYesterday } from '../../../utils/Date';
import { Dropdown } from '../../common/dropdown/Dropdown';
import { PaymentVerificationSer } from '../../../services/paymentVerificationServices/PaymentVerificationServices';
import { PaymentVerificationBarGraph } from '../charts/paymentVerification/PaymentVerificationBarGraph';
import { LabRevenue } from '../charts/labRevenue/LabRevenue';
import { RadiologyAndPathSer } from '../../../services/labServices/LabServices';
import { ImsCapexAndOpexSer } from '../../../services/imsServices/ImsServices';
import ImsOpexStock from '../charts/imsCharts/ImsOpexStock';
import ImsCapexStock from '../charts/imsCharts/ImsCapexStock';
import PharmacyCards from '../dashboardCards/pharmacyCards/PharmacyCards';
import { GetAllHospitalsLocation } from '../../../services/censusServices/CensusServices';
import { Button, ButtonContainer, NavButton } from './Home.styles';

export default function Home() {

  const [medisuiteDeptData, setMedisuiteDeptData] = useState<any>([]);
  const [revenueData, setRevenueData] = useState<any>([]);
  const [pharmacyData, setPharmacyData] = useState<any>([]);
  const [selectedFilter, setSelectedFilter] = useState<any>('Today');
  const [paymentVerificationData, setPaymentVerificationData] = useState<any>([]);
  const [radioAndPathData, setRadioAndPathData] = useState<any>([]);
  const [capexAndOpexData, setCapexAndOpexData] = useState<any>(null);
  const [pharmacyItemData, setPharmacyItemData] = useState<any>(null);
  const [allHospitalsLoc, setAllHospitalsLoc] = useState<any>([]);
  const [vendorReturnStock, setVendorReturnStock] = useState<any>([]);
  const [selectedLoc, setSelectedLoc] = useState<any>({
    locName: 'HPR[RMC]',
    locId: 1
  })

  const filterOptions: any = [
    "Today",
    "Yesterday",
    // "Tommorrow",
    "Weekly",
    // "Monthly",
    // "Custom"
  ];

  useEffect(() => {

    const getData = async () => {

      try {
        const locationRes: any = await GetAllHospitalsLocation();
        setAllHospitalsLoc(locationRes?.data);
      } catch (err: any) {
        console.log("GetAllHospitalsLocation API error", err);
      }

      try {
        const res: any = await GetMedisuiteDeptsData(getTimeRange(selectedFilter));
        setMedisuiteDeptData(res?.data);
      } catch (err: any) {
        console.log("GetMedisuiteDeptsData api err", err);
      }

      try {
        const res: any = selectedFilter === 'Weekly' ? await GetWeeklyRevenueData(getTimeRange(selectedFilter)) : await GetRevenueData(getTimeRange(selectedFilter))
        setRevenueData(res?.data);

      } catch (err: any) {
        console.log("GetRevenueData api err", err);
      }

      try {
        const res: any = await GetPharmacyDataSingleDay(getTimeRange(selectedFilter));
        setPharmacyData(res?.data);

      } catch (err: any) {
        console.log("GetPharmacyDataSingleDay api err", err);
      }

      try {
        const res: any = await PaymentVerificationSer(getTimeRange(selectedFilter));
        setPaymentVerificationData(res?.data);
      } catch (err: any) {
        console.log("PaymentVerificationSer api err", err);
      }

      try {
        const res: any = await RadiologyAndPathSer(getTimeRange(selectedFilter));
        setRadioAndPathData(res?.data);
      } catch (err: any) {
        console.log("RadiologyAndPathSer api err", err);
      }

      try {
        const res: any = await ImsCapexAndOpexSer(getTimeRange(selectedFilter));
        setCapexAndOpexData(res?.data);
      } catch (err: any) {
        console.log("ImsCapexAndOpexSer api err", err);
      }

      try {
        const res: any = await GetPharmaItemsAnalysisSer(getTimeRange(selectedFilter));
        setPharmacyItemData(res?.data);
      } catch (err: any) {
        console.log("GetPharmaItemsAnalysisSer api err", err);
      }

      try {
        const openinvendorRtnStockRes: any = await PharmacyVendorReturnStockSer(getTimeRange(selectedFilter));
        setVendorReturnStock(openinvendorRtnStockRes?.data);
      } catch (err: any) {
        console.log("PharmacyOpeningStockSer API error", err);
      }
    }
    getData();
  }, [selectedFilter])

  function transformData(data: any) {
    const departments: any = {};

    data.forEach(({ hospital, opd, ipd, ot, admittedOnDate, dischargedOnDate, casReg }: any) => {

      if (!departments["OPD"]) {
        departments["OPD"] = { department: "OPD" };
      }
      if (!departments["IPD"]) {
        departments["IPD"] = { department: "IPD" };
      }
      if (!departments["OT"]) {
        departments["OT"] = { department: "OT" };
      }
      if (!departments["ADM"]) {
        departments["ADM"] = { department: "ADM" };
      }
      if (!departments["DIS"]) {
        departments["DIS"] = { department: "DIS" };
      }
      if (!departments["CASE REG"]) {
        departments["CASE REG"] = { department: "CASE REG" };
      }

      departments["OPD"][hospital] = opd;
      departments["IPD"][hospital] = ipd;
      departments["OT"][hospital] = ot;
      departments["ADM"][hospital] = admittedOnDate;
      departments["DIS"][hospital] = dischargedOnDate;
      departments["CASE REG"][hospital] = casReg;
    });

    return Object.values(departments);
  }

  const transformedDepartments = transformData(medisuiteDeptData);

  const formattedData = revenueData.reduce((acc: any[], { hospital, createdon, cash_recieved }: any, index: number) => {
    const colorPalette = ['#91D9BD', '#8CA1CD', '#E4B19A', '#D66473', '#C6CC8A', '#CC7BEF', '#EB4A4A'];

    const time = new Date(createdon).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });

    let hospitalEntry = acc.find(item => item.id === hospital);

    if (!hospitalEntry) {
      const color = colorPalette[index % colorPalette.length];

      hospitalEntry = {
        id: hospital,
        color,
        data: []
      };
      acc.push(hospitalEntry);
    }

    hospitalEntry.data.push({ x: time, y: cash_recieved });
    return acc;
  }, []);

  function convertToChartData(jsonData: any) {
    const getDayFromDate = (dateString: any) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const hospitalMap: Record<string, { id: string; color: string; data: { x: string; y: number }[] }> = {};

    jsonData.forEach((item: any) => {
      const hospitalId = item.hospital;
      const day = getDayFromDate(item.createdon);

      if (!hospitalMap[hospitalId]) {
        hospitalMap[hospitalId] = {
          id: hospitalId,
          color: randomColor(),
          data: []
        };
      }

      hospitalMap[hospitalId].data.push({ x: day, y: item.cash_recieved });
    });

    return Object.values(hospitalMap);
  }

  const selectedLocation = (locId: any) => {
    const location: any = paymentVerificationData?.find((loc: any) => loc.location_id === locId);
    return location;
  }

  const getTimeRange = (selectedFilter: any) => {
    if (selectedFilter === 'Today') {
      return {
        fromDate: GetCurrentDate(),
        toDate: GetCurrentDate()
      }
    } else if (selectedFilter === 'Yesterday') {
      return {
        fromDate: GetYesterday(),
        toDate: GetYesterday()
      }
    }
    // else if (selectedFilter === 'Tommorrow') {
    //   return {
    //     fromDate: GetTomorrow(),
    //     toDate: GetTomorrow()
    //   }
    // }
    else if (selectedFilter === 'Weekly') {
      return {
        fromDate: GetOneWeekFromToday(),
        toDate: GetCurrentDate()
      }
    } else if (selectedFilter === 'Monthly') {
      return {
        fromDate: GetOneMonthFromToday(),
        toDate: GetCurrentDate()
      }
    } else if (selectedFilter === 'Custom') {
      return {
        fromDate: GetCurrentDate(),
        toDate: GetCurrentDate()
      }
    } else {
      window.alert("Something went wrong.....");
    }
  }

  const handleFiltersChange = (event: any) => {
    const selectedFilter: any = event.target.value;
    setSelectedFilter(selectedFilter);
  }

  const handleButtonClick = (locationID: any, name: any) => {
    setSelectedLoc({
      locName: name,
      locId: locationID
    })
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px' }}>
        <Dropdown initialySelected={selectedFilter} handleFiltersChange={handleFiltersChange} dropdown='homeFilter' options={filterOptions} />
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', border: '1px solid transparent', justifyContent: '' }}>
        <div style={{ width: '60%', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ border: '1px solid transparent', display: 'flex' }}>
            <div style={{ width: '35%', padding: '10px', border: '1px solid transparent' }}>
              <Census selectedLoc={selectedLoc} />
              <OpdIpdConversion selectedLoc={selectedLoc} />
            </div>
            <div style={{ width: '65%', padding: '10px', margin: '5px' }}>
              <div style={{ padding: '10px 10px 0px 10px', color: 'black', fontSize: '15px', fontWeight: '700', textAlign: 'center' }}>Pharmacy Item Analysis</div>
              <PharmacyCards selectedLoc={selectedLoc} data={pharmacyItemData} selectedFilter={selectedFilter} vendorReturnStock={vendorReturnStock} />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            {allHospitalsLoc.map((loc: any) => (
              <Button isActive={loc.locationID === selectedLoc.locId} key={loc.locationID} onClick={() => handleButtonClick(loc.locationID, loc.name)}>
                {loc.name}
              </Button>
            ))}
          </div>
        </div>
        <div style={{ width: '40%', padding: '10px', margin: '5px', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '10px 10px 0px 20px', color: 'black', fontSize: '15px', fontWeight: '700' }}>Pharmacy Revenue</div>
          <div style={{ width: '100%', height: '220px' }}><PharmacyGraph timeRange={getTimeRange(selectedFilter)} data={pharmacyData} /></div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%', padding: '10px', margin: '5px', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '10px 10px 0px 20px', color: 'black', fontSize: '15px', fontWeight: '700' }}>OPD Billing</div>
          <div style={{ width: '100%', height: '300px' }}><MedisuiteGraph data={transformedDepartments} /></div>
        </div>
        <div style={{ width: '60%', padding: '10px', margin: '5px', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '10px 10px 0px 20px', color: 'black', fontSize: '15px', fontWeight: '700' }}>Total Revenue</div>
          <div style={{ width: '100%', height: '300px', border: '1px solid transparent' }}>
            <RevenueGraph selectedFilter={selectedFilter} data={selectedFilter === 'Weekly' ? convertToChartData(revenueData) : formattedData} />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '60%', padding: '10px', margin: '5px', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '10px 10px 0px 20px', color: 'black', fontSize: '15px', fontWeight: '700' }}>Lab Revenue</div>
          <div style={{ width: '100%', height: '300px', border: '1px solid transparent' }}>
            <LabRevenue data={radioAndPathData} />
          </div>
        </div>
        <div style={{ width: '40%', padding: '10px', margin: '5px', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '10px 10px 0px 20px', color: 'black', fontSize: '15px', fontWeight: '700' }}>Payment Verification</div>
          <div style={{ width: '100%', height: '300px', border: '1px solid transparent' }}>
            {paymentVerificationData && <PaymentVerificationBarGraph data={paymentVerificationData} />}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%', padding: '10px', margin: '5px', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '10px 10px 0px 20px', color: 'black', fontSize: '15px', fontWeight: '700' }}>IMS Capex Stock</div>
          <div style={{ width: '100%', height: '300px', border: '1px solid transparent' }}>
            {capexAndOpexData && <ImsCapexStock opexData={capexAndOpexData?.data} />}
          </div>
        </div>
        <div style={{ width: '50%', padding: '10px', margin: '5px', borderRadius: '10px', boxShadow: ' 0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '10px 10px 0px 20px', color: 'black', fontSize: '15px', fontWeight: '700' }}>IMS Opex Stock</div>
          <div style={{ width: '100%', height: '300px', border: '1px solid transparent' }}>
            {capexAndOpexData && <ImsOpexStock opexData={capexAndOpexData?.data} />}
          </div>
        </div>
      </div>
    </>
  );
}