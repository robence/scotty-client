import axios from 'axios';

export default class HttpService {
  static get(url: string): Promise<any> {
    return (
      axios
        /* eslint-disable-next-line */
        //@ts-ignore
        .get(url, { crossdomain: true, mode: 'no-cors' })
        .then((response: any) => response.data)
        .catch((error: Error) => Promise.reject(error))
    );
  }

  static post(url: string, data: any): Promise<any> {
    return axios
      .post(url, data)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }

  static delete(url: string): Promise<any> {
    return axios
      .delete(url)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }
}
