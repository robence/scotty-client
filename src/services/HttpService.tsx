import axios from 'axios';

class HttpService {
  config: object;

  constructor() {
    this.config = {};
  }

  get(url: string) {
    return axios
      .get(url, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  post(url: string, data: any) {
    return axios
      .post(url, data, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  put(url: string, data: any) {
    return axios
      .put(url, data, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  delete(url: string) {
    return axios
      .delete(url, this.config)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }
}

const instance = new HttpService();
export default instance;
