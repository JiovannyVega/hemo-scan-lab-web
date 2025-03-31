import axiosInstance from '../axiosConfig';
import API_ENDPOINTS from '../apiEndpoints';

export const login = async (credentials) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    const { token, refreshToken, user } = response.data.data;

    // Guardar el token y el refreshToken en el almacenamiento local
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario en el almacenamiento local
    console.log(response);

    return user; // Retornar los datos del usuario
};

export const register = async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    return response.data;
};
