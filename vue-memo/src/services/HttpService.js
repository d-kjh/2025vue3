import axios from 'axios';

export class HttpService {
  addItem(item) {
    axios
      .post('http://localhost:8080/memo', item)
      .then((res) => console.log('성공', res))
      .catch((err) => console.log('실패', err));
  }

  async getItems() {
    return await axios.get('http://localhost:8080/memo');
  }
}
