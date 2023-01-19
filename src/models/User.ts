import { UserInterface as IUser } from '../interfaces';

export class User {

  events: { [key: string]: IUser.TCallBack[] } = {};

  constructor(private data: IUser.IUserProps) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: IUser.IUserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: IUser.TCallBack): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }
}