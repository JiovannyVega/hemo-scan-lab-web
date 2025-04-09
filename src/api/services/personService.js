import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';

export const getAllPersons = async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.PERSONS.GET_PERSONS);
    return response.data;
}

export const getPersons = async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.PERSONS.LIST)
    return response.data
}