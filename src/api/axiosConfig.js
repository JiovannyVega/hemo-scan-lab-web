import axios from 'axios';
import API_ENDPOINTS from './apiEndpoints';

const axiosInstance = axios.create({
    baseURL: 'https://hemo-scan-api-production.up.railway.app/api', // Cambia esto a la URL base de tu API
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para agregar el token JWT
axiosInstance.interceptors.request.use((config) => {
    const excludedEndpoints = [API_ENDPOINTS.AUTH.LOGIN, API_ENDPOINTS.AUTH.REGISTER, API_ENDPOINTS.LABS.GET_LABS];
    if (!excludedEndpoints.includes(config.url)) {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
