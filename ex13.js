// Exercise 13: Creating a JS Module

// A module is just a way to add a feature, or capability, to your own code. 
// Usually a module is code someone else wrote that you want to use, like the ' fs' module.

const geometry = require('./geometry');

let area51 = geometry.area(2.8);
let circ2 = geometry.circumference(6);

console.log(`Area: ${area51}, Circumference: ${circ2}`);