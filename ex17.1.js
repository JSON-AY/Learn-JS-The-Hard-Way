// Exercise 17.1: Sequences and For Loops

/* 
Most programming languages have ways of storing data in a computer.
For some languages that storage is just a raw memory location.
However, in modern languages you're provided with ways to store data
called "Data Structures". A data structure takes strings, ints and other data 
structures and organizes them in useful ways. 

In this exercise we will use the data structure referred to as a "list" or an "array"
which depends on the language you're using. 

For Example:

let shoes = ["hiking", "cross-training", "running"];

You can even put other arrays within an array. For example:

let shoeInventory = [ ["Adidas", 50], ["Reebok", 30], ["Nike", 60] ];

Storing arrays inside arrasy inside data structures is very common. 

Accessing Data Inside Arrays

// get the Adidas shoe count

let adidas = shoeInventory[0];
let adidas_count = adidas[1];

// or you could do it in one statement

let count_of_adidas = shoeInventory[0][1];

^ This essentially says get the 0 element of shoeInventory (Adidas) and then get the 1 element
  of that element (50)

// For Loops

Once you have an array you typically want to go through the elements in that array. You can do
this by using one of the following:

1. Use a while-loop and then index into it
2. Use a for-loop and index into it
3. Use a for-of loop and get each element automatically. 

The third option should be used as much as possible as it takes less work. 
*/

let pigments = ["perinone", "cadmium", "titanium", "ultramarine", "napthol"];

let i = 0;
// you've seen this already
while(i < pigments.length) {
    console.log(`while ${i}=${pigments[i]}`);
    i++
}

// you can do the above in one move like this

for(let i = 0; i < pigments.length; i++) {
    console.log(`for ${i}=${pigments[i]}`);
}

// but this is the easiest of all

for(paint of pigments) {
    console.log(`for-of ${paint}`);
}

/* To setup a while-loop you need to remember:

1. Set up i = 0
2. Test i < pigments.length
3. Increment i++

The while-loop is known for making it hard to remember to do all of these actions.

The for-loop has sections seperated by ";" for each part. That means:
for(let i = 0; i < pigments.length; i++) 
^ Which means let i = 0 is the setup i < pigments.length and i++ is your increment.

The for-of loop is the best one to use when going through an array. It does all of the 
above for you and gives you each element in a new variable named "paint".

It also reads more like English where you would say "For each paint in my Array of pigments..."
*/