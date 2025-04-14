import axios from 'axios';
const clientAPI = axios.create({
    // TODO - Buscar das variáveis globais
    baseURL: "http://localhost:6060",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

});


export default clientAPI;