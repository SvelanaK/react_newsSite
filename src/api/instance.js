import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.headers.Authorization = localStorage.getItem('accessToken');
  return newConfig;
});

export default instance;
