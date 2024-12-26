import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL+'/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthHeader = (token: string) => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export default api;
