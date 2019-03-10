// Exercise 13: Creating your own module
// This exercise demonstrates how to create your own JS Module. 

const area = (r) => Math.PI * r ** 2;
const circumference = (r) => 2 * Math.PI * r;

module.exports = {
	area: area,
	circumference: circumference
}

/* The {} syntax starts an "object" in JS which is a container user named value,
   or key and value, pairs. On the left is the key, on the right is the value. 

   In this example the key is just the name of the function again and the value is the 
   actual function that we called previously. Every module system needs a way to tell 
   the computer what is accessible to people who use the module. In JS you have to 
   explicitly say what is accessible, whereas in other programming languages this isn't 
   always neccessary. 

   We tell the computer what is accessible by setting "module.exports" to an object which
   lists out what you are "exporting".
*/