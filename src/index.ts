import { UserModel } from './models';

const user = new UserModel({ name: 'myName', age: 20 });

user.set({ name: 'Ivan' });

console.log(user.get('name'));
console.log(user.get('age'));