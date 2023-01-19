import { UserModel } from './models';

const user = new UserModel({ name: 'myName', age: 20 });

user.on('change', () => { })
user.on('change', () => { })
user.on('click', () => { })

console.log(user);