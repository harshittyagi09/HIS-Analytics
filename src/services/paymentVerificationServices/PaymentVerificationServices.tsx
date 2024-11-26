import axios from 'axios';

export const PaymentVerificationSer = async (timeRange: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetPaymentVerificationDataForDashboard?loginId=1&dateFrom=${timeRange.fromDate}&dateTo=${timeRange.toDate}`);
        // const response = await axios.get(`${baseURL}/api/RamaReport/GetPaymentVerificationDataForDashboard?loginId=1&dateFrom=11/20/2024&dateTo=11/20/2024`);
        return response;

    } catch (error: any) {
        throw new Error(`PaymentVerificationSer error: ${error?.message}`);
    }
}