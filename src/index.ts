import { UserModel } from './models';

const user = new UserModel({ name: 'myName', age: 20 });

user.on('change', () => {
  console.log('change 1');
})
user.on('change', () => {
  console.log('change 2');
})
user.on('click', () => {
  console.log('click was triggered');
})

user.trigger('click');