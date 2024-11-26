import axios from 'axios';

export const GetOpdIpdConversionRate = async (locationId: any) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetOPDIPDConversionData?locationId=${locationId}&loginId=1`);
        return response;

    } catch (error: any) {
        throw new Error(`GetOpdIpdConversionRate error: ${error?.message}`);
    }
}