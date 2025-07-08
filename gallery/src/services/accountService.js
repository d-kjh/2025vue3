import axios from 'axios';
axios.defaults.baseURL = '/api/v1';

export const join = (args) => {
  return axios.post('/account/join', args).catch((e) => e.response);
};

export const login = (args) => {
  return axios.post('/account/login', args).catch((e) => e.response);
};

export const check = () => {
  return axios.get('/account/check').catch((e) => e.response);
};

export const logout = () => {
  return axios.post('/account/logout').catch((e) => e.response);
};
