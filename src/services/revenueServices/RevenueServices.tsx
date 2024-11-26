import axios from 'axios';

// Api to get the revenue of every location for today, yesterday timeRange

export const GetRevenueData = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetDashboardTimeFrameHospitalData?loginId=1&dateFrom=${timeRange.fromDate}&dateTo=${timeRange.toDate}`);
        return response;

    } catch (error: any) {
        throw new Error(`GetRevenueData error: ${error?.message}`);
    }
}

export const GetWeeklyRevenueData = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetDashboardSelectRevenueData?loginId=1&dateFrom=${timeRange.fromDate}&dateTo=${timeRange.toDate}`);
        return response;

    } catch (error: any) {
        throw new Error(`GetWeeklyRevenueData error: ${error?.message}`);
    }
}