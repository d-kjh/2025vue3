import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

class HttpService {
  async save(json) {
    const res = await axios.post('', json);
    console.log(res);
    return res.data;
  }
  async listAll(item) {
    const res = await axios.get('', { item });
    return res.data;
  }
}

export default new HttpService();
