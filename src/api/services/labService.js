import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';

export const getLabs = async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_LABS);
    return response.data;
};
