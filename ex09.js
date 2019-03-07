// https://nodejs.org/api/fs.html

const fs = require("fs");

let contents = fs.readFileSync("test.txt"); 

console.log("Contents:");
console.log(contents.toString());

// using a callback

console.log("-------------------");
// readFile is called but nothing is actually done with it yet.
fs.readFile("test.txt", (err, data) => {
// When JavaScript is ready, it will output the contents of this file.
    console.log(data.toString());
});

// The => is referred to as the "Fat Arrow". 
// You can look at the fat arrow like this: "Whenever you get something readFile command, 
// I want you to call this chunck of code and give me error and data."" This is called a "callback".