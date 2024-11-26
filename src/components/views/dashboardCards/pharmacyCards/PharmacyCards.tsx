import { useEffect, useState } from 'react';
import { PharmacyItem, PharmacyItemCont, PharmacyItemValue } from './PharmacyCards.styles';
import { PharmacyOpeningStockSer } from '../../../../services/pharmacyServices/PharmacyServices';
import { GetCurrentDate, GetOneWeekFromToday, GetYesterday } from '../../../../utils/Date';
import Alert from '@mui/material/Alert';

export default function PharmacyCards(props: any) {

  const { data, selectedLoc, selectedFilter, vendorReturnStock } = props;

  const [openingStock, setOpeningStock] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const openingStockRes: any = await PharmacyOpeningStockSer(getTimeRange(selectedFilter));
        setOpeningStock(openingStockRes?.data);
      } catch (err: any) {
        console.log("PharmacyOpeningStockSer API error", err);
      }
    }
    getData();
  }, [selectedFilter])

  const getTimeRange = (selectedFilter: any) => {
    if (selectedFilter === 'Today') {
      return GetCurrentDate();
    } else if (selectedFilter === 'Yesterday') {
      return GetYesterday();
    } else if (selectedFilter === 'Weekly') {
      return GetOneWeekFromToday();
    } else {
      console.warn("Invalid time range");
    }
  }

  const selectedLocationItem = data && data?.find((loc: any) => loc.locationID === selectedLoc.locId);
  const openingStockItem = openingStock && openingStock?.find((loc: any) => loc.location_id === selectedLoc.locId);
  const VendorStockItem = vendorReturnStock && vendorReturnStock?.find((loc: any) => loc.location_id === selectedLoc.locId);

  if (!selectedLocationItem) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Alert style={{ padding: '0px', fontSize: '13px' }} severity="info">{`In ${selectedLoc?.locName} no pharmacy data is found..`}</Alert>
    </div>
  }

  const { deadStock, nearExpiry, slowMoving, fastMoving } = selectedLocationItem;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: '10px', display: 'flex', gap: 5, alignItems: 'center' }}>
        <PharmacyItemCont style={{ backgroundColor: '#d8f3dc' }}>
          <PharmacyItem>Dead Stock</PharmacyItem>
          <PharmacyItemValue>{deadStock}</PharmacyItemValue>
        </PharmacyItemCont>
        <PharmacyItemCont style={{ backgroundColor: '#a7c7e7' }}>
          <PharmacyItem>Near Expiry</PharmacyItem>
          <PharmacyItemValue>{nearExpiry}</PharmacyItemValue>
        </PharmacyItemCont>
        <PharmacyItemCont style={{ backgroundColor: '#e6e6fa' }}>
          <PharmacyItem>Slow Moving</PharmacyItem>
          <PharmacyItemValue>{slowMoving}</PharmacyItemValue>
        </PharmacyItemCont>
      </div>
      <div style={{ padding: '5px 10px', display: 'flex', gap: 10, alignItems: 'center' }}>
        <PharmacyItemCont style={{ backgroundColor: '#f5f5dc' }}>
          <PharmacyItem>Fast Moving</PharmacyItem>
          <PharmacyItemValue>{fastMoving}</PharmacyItemValue>
        </PharmacyItemCont>
        <PharmacyItemCont style={{ backgroundColor: '#c1c8b7' }}>
          <PharmacyItem>Opening Stock</PharmacyItem>
          <PharmacyItemValue>{openingStockItem?.openingStock}</PharmacyItemValue>
        </PharmacyItemCont>
        <PharmacyItemCont style={{ backgroundColor: '#ffdab9' }}>
          <PharmacyItem>Vendor Return</PharmacyItem>
          <PharmacyItemValue>{VendorStockItem?.returnValue}</PharmacyItemValue>
        </PharmacyItemCont>
      </div>
    </div>
  );
}