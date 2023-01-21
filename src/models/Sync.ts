import axios, { AxiosResponse, AxiosPromise } from 'axios';

import { SyncInterface } from '../interfaces';

export class Sync<T extends SyncInterface.IHasId> {
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