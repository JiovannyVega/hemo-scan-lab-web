import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';
import axios from 'axios'

export const login = async (credentials) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    const { token, refreshToken, user } = response.data.data;

    // Guardar el token y el refreshToken en el almacenamiento local
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario en el almacenamiento local

    return user; // Retornar los datos del usuario
};

export const register = async (userData) => {
    try {
        const response = await axios.post('/api/register', userData)
        return response.data
    } catch (error) {
        throw error
    }
};
