import { UserInterface } from '../interfaces';
import { APISyncModel } from './APISync';
import { AttributesModel } from './Attributes';
import { EventingModel } from './Eventing';
import { MainModel } from './Main';
import { CollectionModel } from './Collection';

const rootUrl = 'http://localhost:3000/users';
export class User extends MainModel<UserInterface.IUserProps> {
  static buildUser(attrs: UserInterface.IUserProps): User {
    return new User(
      new AttributesModel<UserInterface.IUserProps>(attrs),
      new EventingModel(),
      new APISyncModel<UserInterface.IUserProps>(rootUrl),
    );
  }

  static buildUserCollection(): CollectionModel<User, UserInterface.IUserProps> {
    return new CollectionModel<User, UserInterface.IUserProps>(
      'http://localhost:3000/users',
      (json: UserInterface.IUserProps) => User.buildUser(json),
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
