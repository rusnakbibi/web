import { View } from './View';
import { User } from '../models/User';
import { UserInterface } from '../interfaces';


export class UserShow extends View<User, UserInterface.IUserProps> {
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User name: ${this.model.getAttribute('name')}</div>
        <div>User age: ${this.model.getAttribute('age')}</div>
      </div>
    `;
  }

}