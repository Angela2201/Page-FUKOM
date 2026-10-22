import axios, { AxiosError } from 'axios';

export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});


// Interceptores de salida para las peticiones SSR:
api.interceptors.request.use(
  (config) => {
      console.log('Peticion SSR a', config.url);
      return config;
  },
  (error) => {
      console.error('Error en la peticion SSR: ', error);
      return Promise.reject(error);
  }
);


// Interceptores de entrada para las respuestas SSR:
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const message =
      error.response?.data?.message ??
      'Ocurrió un error. Inténtalo de nuevo.';
    return Promise.reject(new ApiError(message, error.response?.status));
  },
);
