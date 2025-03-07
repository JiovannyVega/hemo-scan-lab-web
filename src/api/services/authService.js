import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';

export const login = async (credentials) => {
    const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, credentials);
    return response.data;
};

export const register = async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.REGISTER, userData);
    return response.data;
};
