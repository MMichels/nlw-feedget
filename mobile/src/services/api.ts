import axios, { AxiosInstance } from 'axios';


export const api: AxiosInstance = axios.create({
    baseURL: 'http://192.168.18.8:3333'
})

