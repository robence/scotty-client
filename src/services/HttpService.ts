/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosRequestConfig } from 'axios';

class HttpService {
  private config: AxiosRequestConfig = {};

  public addConfiguration(config: AxiosRequestConfig): void {
    this.config = config;
  }

  public get(url: string): Promise<any> {
    return (
      axios
        /* eslint-disable-next-line */
        //@ts-ignore
        .get(url, this.config)
        .then((response: any) => response.data)
        .catch((error: Error) => Promise.reject(error))
    );
  }

  /* eslint-disable-next-line class-methods-use-this */
  public post(url: string, data: any): Promise<any> {
    return axios
      .post(url, data, this.config)
      .then((response) => response.data)
      .catch((error) => {
        return Promise.reject(error.response.data.error);
      });
  }

  /* eslint-disable-next-line class-methods-use-this */
  public delete(url: string): Promise<any> {
    return axios
      .delete(url)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error));
  }
}

const instance = new HttpService();
export default instance;
