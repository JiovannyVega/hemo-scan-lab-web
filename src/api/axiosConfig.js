import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'localhost:3000/', // Cambia esto a la URL base de tu API
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
