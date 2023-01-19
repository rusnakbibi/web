import { UserInterface as IUser } from '../interfaces';

export class User {
  constructor(private data: IUser.IUserProps) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: IUser.IUserProps): void {
    Object.assign(this.data, update);
  }
}