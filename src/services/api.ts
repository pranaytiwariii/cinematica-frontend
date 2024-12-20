import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const auth = {
  register: async (email: string, password: string) => {
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};

export const locations = {
  create: async (locationData: any) => {
    const response = await api.post('/locations', locationData);
    return response.data;
  },

  toggleLike: async (locationId: string) => {
    const response = await api.post(`/locations/${locationId}/toggle-like`);
    return response.data;
  },

  getUserLocations: async () => {
    const response = await api.get('/locations/user-locations');
    return response.data;
  }
};

export default api;