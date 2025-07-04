import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/memo_test';

class HttpService {
  async save(item) {
    const res = await axios.post('', item);
    return res.data;
  }

  async memoAll(params) {
    const res = await axios.get('', { params });
    return res.data;
  }
  async memoOne(id) {
    const res = await axios.get(`/${id}`);
    return res.data;
  }

  async update(item) {
    const res = await axios.put('', item);
    return res.data;
  }

  async delete(params) {
    const res = await axios.delete('', { params });
    return res.data;
  }
}

export default new HttpService();
