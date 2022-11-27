import Axios from 'axios';

const baseURL = "http://localhost:5000/"
const api = Axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    Accept: '*/*',
    // token: 'Ezstore@123',
    // Authorization: Cookies.get('node_token') || '',
    // 'x-access-token': Cookies.get('token') || ''
  },
});

export default api;
