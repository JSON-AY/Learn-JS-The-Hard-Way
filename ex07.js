// Exercise 7

// REQUIRES: npm install readline-sync
// readline-sync is a small library that someone else wrote.
// There are a lot of these libraries availiable that other people
// have created and you need to be concious of the license 
// because it may not be free. 
// readline-sync is licensed by MIT.

const readline = require('readline-sync');

let name = readline.question("What's your name? ");
let age = readline.question("What's your age? ");
let eyes = readline.question("What's your eye color? ");

console.log(`Your name is: ${name}`);
console.log(`Your age is: ${age}`);
console.log(`Your eyes are: ${eyes}`);
