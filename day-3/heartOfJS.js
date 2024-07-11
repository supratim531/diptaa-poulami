// Function Declaration OR Function Statement
// In other words a simple function declaration
function example1() {
  console.log("Hi");
}

// Function Expression
// In other words when we store a function inside a variable
var example2 = function () {
  console.log("Hello");
};

// Anonymous Function
// In other words when a function has no name and can only be stored inside a variable
var example3 = function () {
  console.log("World");
};

// Named Function Expression
// Same like example3 but here you can mention a name to the function
var example4 = function example4Self() {
  console.log("Hello World");
};

// Arrow Function
// In other words an easy way to write a function in JavaScript (easier syntax to write)
let example5 = () => {
  console.log("Arrow function came with ECMAScript 2015 OR ES6");
};

/*
- NOTE -
Function is known as First Class Citizen OR First Class Function...
Because functions can be used by any means everywhere in JavaScript -

1. Creation at Runtime: They can be created and used at runtime.
2. Passable as Parameters: They can be passed as parameters to another functions.
3. Returnable from Functions: They can be returned from another functions.
4. Assignable to Variables: They can be assigned to variables.
5. Storable in Data Structures: They can be stored in data structures like arrays, objects, etc.
*/
