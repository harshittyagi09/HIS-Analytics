import axios from 'axios';

/**  Api to get pharmacy data of credit_cash and received _cash
 * Pharmacy horizontal Bar Graph
*/
export const GetPharmacyDataSingleDay = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetDashboardSingleDayPharmacyData?loginId=1&dateFrom=${timeRange.fromDate}&dateTo=${timeRange.toDate}`);
        return response;

    } catch (error: any) {
        throw new Error(`GetPharmacyDataSingleDay error: ${error?.message}`);
    }
}

/** Api to get pharmacy data of deadStock, nearExpiry, slowMoving, fastMoving
 *  Pharmacy Cards
*/
export const GetPharmaItemsAnalysisSer = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetPharmacyItemAnalysis`);
        return response;

    } catch (error: any) {
        throw new Error(`GetPharmaItemsAnalysisSer error: ${error?.message}`);
    }
}

/**
 * Api to get pharmacy openinmg stock data
 */

export const PharmacyOpeningStockSer = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetOpeningStockData?dateFrom=${timeRange}`);
        return response;

    } catch (error: any) {
        throw new Error(`PharmacyOpeningStockSer error: ${error?.message}`);
    }
}

/**
 * Api to get vendor return data
 */

export const PharmacyVendorReturnStockSer = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetPharmacyVendorReturnData?loginId=1&dateFrom=${timeRange.fromDate}&dateTo=${timeRange.toDate}`);
        return response;

    } catch (error: any) {
        throw new Error(`PharmacyVendorReturnStockSer error: ${error?.message}`);
    }
}