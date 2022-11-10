/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios';

import { IUser } from '../interfaces';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const getUserMe = async () => {
  try {
    const { data } = await api.get<IUser>('/user/me');
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const shareVideo = async (formData: FormData) => {
  try {
    const { data } = await api.post('/video/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const login = async (provider: string) => {
  try {
    const { data } = await api.get(
      `/oauth/${provider}?redirect_client_url=${import.meta.env.VITE_CLIENT_URL}`,
    );
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const logout = async () => {
  try {
    const { data } = await api.get('/oauth/disconnect');
    return data;
  } catch (error) {
    console.log({ error });
  }
};

api.interceptors.response.use(
  (response) => response,
  // eslint-disable-next-line consistent-return
  async (error) => {
    const originalRequest = error.config;
    if (
      error.config.url !== '/oauth/refreshtoken' &&
      error.response.status === 401 &&
      originalRequest._retry !== true
    ) {
      originalRequest._retry = true;
      try {
        await api.get('/oauth/refreshtoken');
        return api(originalRequest);
      } catch (err) {
        console.log({ err });
        localStorage.removeItem('logged');
      }
    }
    return Promise.reject(error);
  },
);

export default api;
