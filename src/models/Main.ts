import { AxiosResponse } from 'axios';

import { MainModelInterface, APISyncInterface } from '../interfaces';

export class MainModel<T extends APISyncInterface.IHasId> {
  constructor(
    private attributes: MainModelInterface.MainModelAttributes<T>,
    private events: MainModelInterface.Events,
    private sync: MainModelInterface.Sync<T>,
  ) { }

  on = this.events.on;
  trigger = this.events.trigger;
  getAttribute = this.attributes.get;

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.getAttribute('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        console.log(res);
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}