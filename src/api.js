import axios from "axios";

const api = axios.create({
    baseURL: 'https://ifbbpro-ranking.herokuapp.com'
});

export default api;