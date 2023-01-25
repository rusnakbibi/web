import axios, { AxiosResponse } from 'axios';
import { EventingModel } from './Eventing';

export class CollectionModel<T, K> {
  models: T[] = [];
  events: EventingModel = new EventingModel();

  constructor(
    public apiUrl: string,
    public deserialize: (json: K) => T,
  ) { }

  get on(): (eventName: string, callback: () => void) => void {
    return this.events.on;
  }

  get trigger(): (eventName: string) => void {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.apiUrl).then((res: AxiosResponse) => {
      res.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger('change');
    });

  }
}