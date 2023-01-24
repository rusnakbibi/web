import { UserForm } from './views/UserForm';
import { UserModel } from './models'

const user = UserModel.buildUser({ name: 'NAME', age: 25 });

const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}

