import { AxiosPromise } from 'axios';

export interface MainModelAttributes<T> {
  set(value: T): void;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}