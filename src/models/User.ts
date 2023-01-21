import axios, { AxiosResponse } from 'axios';

import { UserInterface } from '../interfaces';
import { EventingModel } from './index'

export class User {
  public events: EventingModel = new EventingModel();

  private apiUrl = 'http://localhost:3000';
  constructor(private data: UserInterface.IUserProps) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserInterface.IUserProps): void {
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    const res = await axios.get(`${this.apiUrl}/users/${this.get('id')}`) as AxiosResponse;
    this.set(res.data);
  }

  async save(): Promise<void> {
    const id = this.get('id');
    if (id) {
      await axios.put(`${this.apiUrl}/users/${id}`, this.data);
    } else {
      await axios.post(`${this.apiUrl}/users`, this.data);
    }
  }
}