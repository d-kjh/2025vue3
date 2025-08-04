import axios from './httpRequester';

const path = '/order';

export const addOrder = (args) =>
  axios.post(path, args).catch((e) => e.response);

export const getOrders = () => axios.get(path).catch((e) => e.response);

export const getDetail = (orderId) =>
  axios.get(`${path}/${orderId}`).catch((e) => e.response);
