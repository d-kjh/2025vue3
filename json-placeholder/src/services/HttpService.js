import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

class HttpService {
  async postFindAll() {
    const res = await axios.get('/posts');
    return res.data;
  }

  async postCommentFindAll(postId) {
    const res = await axios.get(`/posts/${postId}/comments`);
    return res.data;
  }

  async commentSave(jsonBody) {
    const res = await axios.post('comments', jsonBody);
    return res.data;
  }

  async postSave(jsonBody) {
    const res = await axios.post('/posts', jsonBody);
    return res.data;
  }
}

export default new HttpService();
