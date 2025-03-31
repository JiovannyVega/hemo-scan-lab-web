import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';

export const getLabs = async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.LABS.GET_LABS);
    return response.data;
};

export const getLabById = async (id) => {
    const response = await axiosInstance.get(API_ENDPOINTS.LABS.GET_LAB_BY_ID.replace(':id', id));
    return response.data;
};
