import { UserModel } from './models';

const user = new UserModel({ name: 'New Record', age: 50 });

user.events.on('change', () => {
  console.log('change#1')
});

user.events.trigger('change');
