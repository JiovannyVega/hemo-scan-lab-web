const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login', // Autentica al usuario y devuelve un token
        REGISTER: '/auth/register', // Registra un nuevo usuario
    },
    USER: {
        GET_USER: '/user', // Obtiene la información del usuario actual
        UPDATE_USER: '/user/update', // Actualiza la información del usuario
        DELETE_USER: '/user/delete', // Elimina la cuenta del usuario
    },
    LABS: {
        GET_LABS: '/labs', // Obtiene la lista de todos los laboratorios
        GET_LAB_BY_ID: '/labs/:id', // Obtiene un laboratorio por su ID
        CREATE_LAB: '/labs/create', // Crea un nuevo laboratorio
        UPDATE_LAB: '/labs/update/:id', // Actualiza un laboratorio existente
        DELETE_LAB: '/labs/delete/:id', // Elimina un laboratorio
    },
};

export default API_ENDPOINTS;