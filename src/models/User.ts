import { UserInterface } from '../interfaces';
import { EventingModel, SyncModel } from './index'

const rootUrl = 'http://localhost:3000/users';
export class User {
  public events: EventingModel = new EventingModel();
  public sync: SyncModel<UserInterface.IUserProps> = new SyncModel<UserInterface.IUserProps>(rootUrl);

  constructor(private data: UserInterface.IUserProps) { }

  get(propName: string): (string | number | undefined) {
    return this.data[propName as keyof UserInterface.IUserProps];
  }

  set(update: UserInterface.IUserProps): void {
    Object.assign(this.data, update);
  }
}