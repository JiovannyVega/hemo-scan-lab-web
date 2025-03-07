import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';

export const getUser = async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.GET_USER);
    return response.data;
};
