import axios from './httpRequester';

export const join = (args) => {
  return axios.post('/account/join', args).catch((e) => e.response);
};

export const login = (args) => {
  return axios.post('/account/login', args).catch((e) => e.response);
};

export const logout = () => {
  return axios.post('/account/logout').catch((e) => e.response);
};

export const reissue = () => {
  return axios.post('/account/reissue').catch((e) => e.response);
};
