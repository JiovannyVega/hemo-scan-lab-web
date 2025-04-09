import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';

// Fetch all analyses
export const getAllAnalysis = async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.ANALYSIS.GET_ANALYSIS);
    return response.data;
};

// Fetch analysis by ID
export const getAnalysisById = async (id) => {
    const response = await axiosInstance.get(API_ENDPOINTS.ANALYSES.GET_ANALYSIS_BY_ID.replace(':id', id));
    return response.data;
};  