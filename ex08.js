let name = process.argv[2];
let age = process.argv[3];
let eyes = process.argv[4];

console.log(`Your name is: ${name}`);
console.log(`Your age is: ${age}`);
console.log(`Your eyes are: ${eyes}`);

// This exercise shows how you can use the argv to take console input from
// the command line and then feed it into code. The reason that you have to pass
// the increasing numbers starting from number 2, is due to the fact that
// node and the JS file are considered in the count. Meaning -- 
// node[0] ex08.js[1] name[2] age[3] eyes[4]
// The way that you call this file is by doing this:
// node ex08.js Josh 33 Blue

/* This will output:
Your name is: Josh
Your age is: 33
Your eyes are: Blue
*/
