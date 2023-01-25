import { UserList } from './views/UserList';
import { CollectionModel } from './models/Collection';
import { UserInterface } from './interfaces';
import { User } from './models/User';

const users = new CollectionModel(
  'http://localhost:3000/users',
  (json: UserInterface.IUserProps) => {
    return User.buildUser(json);
  }
)

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();