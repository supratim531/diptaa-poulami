let fruits = ["apple", "banana"];
let veggies = ["carrot", "potato"];
let refrigerator = [...fruits, ...veggies];

console.log(refrigerator);
// OUTPUT: ["apple", "banana", "carrot", "potato"]

let father = {
  age: 63,
  name: "Himanshu",
  family: "Pandya",
  nationality: "Indian",
};

let child = {
  ...father,
  age: 27,
  name: "Hardik",
};

console.log(child);
/*
OUTPUT: {
  age: 27,
  name: "Hardik",
  family: "Pandya",
  nationality: "Indian"
}
*/

let numbers = [2, 7, 55, 9, 10];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);
// OUTPUT: 55
// NOTE: remember Math.max(numbers) is never gonna return you the maxNumber

// when ... is used as a parameter of a function it is called rest parameter
function testManyParameters(...youCanPassMeAnyNumberOfArguments) {
  // I will accept all of them inside an array
  console.log(youCanPassMeAnyNumberOfArguments);
  // OUTPUT: [1, 2, 3, 4, 5]
}

testManyParameters(1, 2, 3, 4, 5);
