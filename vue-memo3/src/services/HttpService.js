import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/api';

class Httpservice {
  async postMemo(item) {
    console.log('postMemo - item: ', item);
  }

  async getMemoList(params) {
    // get메소드 호출시, 2번째 인자는 객체를 보내고
    // 객체의 params 속성에 객체를 보내면
    // 자동으로 쿼리스트링으로 변환해준다.
    console.log('getMemoList - params: ', params);
    const res = await axios.get('/memo', { params });
    console.log('getMemoList - res.data:', res.data);
    return res.data;
  }

  async getMemo(id) {
    console.log('getMemo - id: ', id);
  }

  async putMemo(item) {
    console.log('putMemo - item', item);
  }

  async deleteMemo(params) {
    console.log('deleteMemo - params:', params);
    const res = await axios.delete('/memo', { params });
    return res.data;
  }
}

export default new Httpservice();
