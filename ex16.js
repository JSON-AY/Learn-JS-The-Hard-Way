// Exercise 16: While Loops

// If statements combine jumps by using tests to skip over blocks of code.
// This is refered to as "branching", as in following the different branches of a tree.

// The first loop to learn is the while-loop, which repeats a block of code as long
// as the test is true. 

// For Example the psuedo code below demonstrates the while loop concept:

/* 

    count = 20
    log("count=", count)
    count = count - 1
    if(count >0) goto line 2
*/

let count = 5;

while(count > 0) {
    console.log(`count down ${count}`);
    count--;
}

// What value is count right here?

while(count < 10) {
    if(count % 2 == 0) {
        console.log(count, "EVEN");
    } else {
        console.log(count, "ODD");
    }

    count++;
}

/* The "--" and "++" are new concepts. These operators kind of work like this:
   count-- is like stating: count = count - 1  
   count++ is like stating: count = count + 1 
*/