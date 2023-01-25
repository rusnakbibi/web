import { UserInterface } from '../interfaces';
import { User } from '../models/User';
import { CollectionView } from './CollectionView';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';


export class UserList extends CollectionView<User, UserInterface.IUserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
    // new UserForm(itemParent, model).render();
  }
}