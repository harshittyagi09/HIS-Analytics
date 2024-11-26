import axios from 'axios';

// Api to get all hospitals location with its id
export const GetAllHospitalsLocation = async () => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetRGlocations`);
        return response;

    } catch (error: any) {
        throw new Error(`GetAllHospitalsLocation error: ${error?.message}`);
    }
}

export const GetCensusData = async () => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    try {
        const response = await axios.get(`${baseURL}/api/RamaReport/GetIPDCensus`);
        return response;

    } catch (error: any) {
        throw new Error(`GetCensusData error: ${error?.message}`);
    }
}