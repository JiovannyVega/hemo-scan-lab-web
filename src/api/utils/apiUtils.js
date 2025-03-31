export const handleApiError = (error) => {
    if (error.response) {
        // El servidor respondió con un estado fuera del rango 2xx
        console.error('Error de respuesta:', error.response.data.message);
    } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error('Error de solicitud:', error.request);
    } else {
        // Algo pasó al configurar la solicitud
        console.error('Error:', error.message);
    }
};
