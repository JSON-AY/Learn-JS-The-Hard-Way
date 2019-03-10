// Exercise 10: Files, Args, Variables, Oh My


const fs = require('fs');

let file_to_open = process.argv[2];

/*  To call this process type 'node ex10.js file_to_open.txt'

    If I pass '1' to process.argv rather than '2', it will cause the code 
    to open this file since it's place holder is '1' and 'node' is at '0'.
    If I pass '0' to process.argv it will attempt to open node.exe and read
    the contents of it. 
    
    This is called an "off by one error" and this is pretty common when
    you fail to call the correct position. Programming for the most part
    starts counting at 0 so, you need to remember to keep this in mind. 
*/
let file_contents = fs.readFileSync(file_to_open);

console.log(`The file named ${file_to_open} contains:`);
console.log(file_contents.toString());