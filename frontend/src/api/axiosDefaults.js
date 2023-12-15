import axios from 'axios';

axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const baseURL = axios.defaults.baseURL;

export const axiosReq = axios.create();
export const axiosRes = axios.create();