import axios, { AxiosPromise } from 'axios';

import { APISyncInterface } from '../interfaces';

export class APISyncModel<T extends APISyncInterface.IHasId> {
  constructor(public apiUrl: string) { }

  async fetch(id: number): AxiosPromise {
    return await axios.get(`${this.apiUrl}/${id}`);
  }

  async save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return await axios.put(`${this.apiUrl}/${id}`, data);
    } else {
      return await axios.post(this.apiUrl, data);
    }
  }
}