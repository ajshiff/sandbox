// javascript variables that point to objects are pass by value.
// However, the value passed is not the whole object, rather the address
// to that object. 

// javascript primatives are also pass by value, but their value is passed is
// the 

class thing {
    constructor (setValue) {
        this.value = setValue;
    }
}

var thing1 = new thing('taco'); // thing1 has a address to an instance of the thing object
var thing2 = thing1; // thing2 has the address to thing1's address, which leads it to thing1's thing object

function test(something) {            // If variables are passed by reference,
    something = new thing('burrito'); // then the variable that is passed in, when called,
    console.log(something.value);     // should print burrito too...**
}                                     

console.log(thing1.value); // taco
console.log(thing2.value); // taco
test(thing1);              // burrito
console.log(thing1.value); // taco
console.log(thing2.value); // taco

// **...but it doesn't.
// Therefore, something isn't a reference to thing1, 
// but rather recieves the value, which is an address

// To say an object is pass by reference is incorrect.
// Rather, you are passing by value an address to an object.