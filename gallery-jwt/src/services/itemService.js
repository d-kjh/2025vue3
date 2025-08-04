import axios from './httpRequester';

export const getItems = () => {
  return axios.get('/item').catch((e) => e.response);
};
