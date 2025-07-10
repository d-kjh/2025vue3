import axios from './httpRequester';

const path = '/order';

export const addOrder = (args) =>
  axios.post(path, args).catch((e) => e.response);
