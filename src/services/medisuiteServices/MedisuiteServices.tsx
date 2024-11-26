import axios from 'axios';

// Api to get the hospital departments data [ OPD, IPD, OT, Addmission, Case Reg]

export const GetMedisuiteDeptsData = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetDashboardSingleDayHospitalData?loginId=1&dateFrom=${timeRange.fromDate}&dateTo=${timeRange.toDate}`);
        return response;

    } catch (error: any) {
        throw new Error(`GetMedisuiteDeptsData error: ${error?.message}`);
    }
}