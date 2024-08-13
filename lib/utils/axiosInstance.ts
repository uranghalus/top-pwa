import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL! + '/api', // Base URL untuk API Next.js Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
