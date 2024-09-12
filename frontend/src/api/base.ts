import axios from 'axios';

export const backendURL = `http://${BACKEND_HOST}:${BACKEND_PORT}`;

const axiosInstance = axios.create({
  baseURL: backendURL,
  headers: {
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
});

export default axiosInstance;
