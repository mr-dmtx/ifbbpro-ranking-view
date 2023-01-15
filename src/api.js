import axios from "axios";

const api = axios.create({
    baseURL: 'https://mrdmtx.pythonanywhere.com', //http://127.0.0.1:5000 ou https://mrdmtx.pythonanywhere.com
    auth: {
        username: 'ifbbprorankingapi',
        password: 'ifbbprorankingapiç'
    },
    headers: {
        'Access-Control-Allow-Headers': 'True',
      }
});

api.interceptors.request.use(async config=>{
  const res = await axios.post('https://mrdmtx.pythonanywhere.com', '', {
      auth: {
      username: 'ifbbprorankingapi',
      password: 'ifbbprorankingapiç'
    }}, 
    {
      headers: {
        'Access-Control-Allow-Headers': 'True'
    }
  });
  const token = await res.data.token;
  config.params = {token: token};
  return config;
});

export default api;