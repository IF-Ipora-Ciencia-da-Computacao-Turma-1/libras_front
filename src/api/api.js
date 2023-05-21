import axios from 'axios';

const api = axios.create({
 baseURL: 'https://url-api/public/api/',

});

export default api;