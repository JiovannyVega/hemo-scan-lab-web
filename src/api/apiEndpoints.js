const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/user/login', // Autentica al usuario y devuelve un token
        REGISTER: '/user/register', // Registra un nuevo usuario
    },
    USER: {
        GET_USER: '/user', // Obtiene la información del usuario actual
        UPDATE_USER: '/user/update', // Actualiza la información del usuario
        DELETE_USER: '/user/delete', // Elimina la cuenta del usuario
    },
    LABS: {
        GET_LABS: '/lab', // Obtiene la lista de todos los laboratorios
        GET_LAB_BY_ID: '/lab/:id', // Obtiene un laboratorio por su ID
        CREATE_LAB: '/lab/create', // Crea un nuevo laboratorio
        UPDATE_LAB: '/lab/update/:id', // Actualiza un laboratorio existente
        DELETE_LAB: '/lab/delete/:id', // Elimina un laboratorio
    },
    PERSONS: {
        GET_PERSONS: '/person', // Obtiene la lista de todas las personas
        GET_PERSON_BY_ID: '/person/:id', // Obtiene una persona por su ID
        CREATE_PERSON: '/person/create', // Crea una nueva persona
        UPDATE_PERSON: '/person/update/:id', // Actualiza una persona existente
        DELETE_PERSON: '/person/delete/:id', // Elimina una persona
    },
    ANALYSIS: {
        GET_ANALYSIS: '/analysis', // Obtiene la lista de todos los análisis
        GET_ANALYSIS_BY_ID: '/analysis/:id', // Obtiene un análisis por su ID
        CREATE_ANALYSIS: '/analysis/create', // Crea un nuevo análisis
        UPDATE_ANALYSIS: '/analysis/update/:id', // Actualiza un análisis existente
        DELETE_ANALYSIS: '/analysis/delete/:id', // Elimina un análisis
    },
};

export default API_ENDPOINTS;