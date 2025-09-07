import reverseString, { double, User, USER_ROLE } from './Practice-05.js';

console.log(double(4));              // 8
console.log(reverseString("abc"));   // cba

const u = new User(1, "Alice");
console.log(u.name);                 // Alice
console.log(USER_ROLE);              // adminn