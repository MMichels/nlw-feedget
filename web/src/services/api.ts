import axios, { AxiosInstance } from 'axios';

const env =  import.meta.env;

export const api : AxiosInstance= axios.create({
    baseURL: env.VITE_API_URL
})