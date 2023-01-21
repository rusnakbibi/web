import { EventingInterface } from "../interfaces";

export class Eventing {
  events: { [key: string]: EventingInterface.TCallBack[] } = {};

  on(eventName: string, callback: EventingInterface.TCallBack): void {
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