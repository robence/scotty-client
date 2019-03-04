import axios from 'axios';

class HttpService {
  constructor() {
    this.config = {};
  }

  get(url) {
    return axios
      .get(url, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  post(url, data) {
    return axios
      .post(url, data, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  put(url, data) {
    return axios
      .put(url, data, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  delete(url) {
    return axios
      .delete(url, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }
}

const instance = new HttpService();
export default instance;
