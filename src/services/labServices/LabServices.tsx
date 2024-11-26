import axios from 'axios';

export const RadiologyAndPathSer = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetRadiologyAndPathologySummaryForDashboard?loginId=1&dateFrom=${timeRange.fromDate}&dateTo=${timeRange.toDate}`);
        return response;

    } catch (error: any) {
        throw new Error(`RadiologyAndPathSer error: ${error?.message}`);
    }
}