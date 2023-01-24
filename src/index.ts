import { UserEdit } from './views/UserEdit';
import { UserModel } from './models'

const user = UserModel.buildUser({ name: 'NAME', age: 25 });

const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}

