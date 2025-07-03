import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api/memo';

class HttpService {
  // save메소드 구현해주세요
  async save(jsonBody) {
    const res = await axios.post('', jsonBody);
    return res.data;
  }

  async findAll(params) {
    const res = await axios.get('', { params });
    return res.data;
  }

  async findById(id) {
    const res = await axios.get(`/${id}`);
    return res.data;
  }

  async modify(jsonBody) {
    const res = await axios.put('', jsonBody);
    return res.data;
  }

  async deleteById(params) {
    const res = await axios.delete('', { params });
    return res.data;
  }
}

export default new HttpService();
