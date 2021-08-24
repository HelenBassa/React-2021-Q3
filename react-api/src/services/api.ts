import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/',
  timeout: 5000,
  headers: {
    'X-Api-Key': '4471c1e7059f41878bbee05b20651b37',
  },
});

export default axiosInstance;
