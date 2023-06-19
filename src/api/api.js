import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apiif.murillocastro.com.br/public/api/',
});

export default api;

