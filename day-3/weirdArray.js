// Arrays are very different in JavaScript

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
// OUTPUT: object

// What are you thinking about 'arr'
// You think 'arr' is an array over here? Wll, You're wrong
// Array doesn't exist in JavaScript
// Array is a syntactic sugar over object
// Array is an object after all (a pure object)

let testArray = [43, 67, 899];
console.log(testArray);
// OUTPUT: [43, 67, 899]

testArray[-1] = "poulami";
testArray.name = "diptaa";
testArray["whatTheF***"] = function () {
  console.log("Yes this is also possible");
};

console.log(testArray);
// See the output below, that's why array is an pure object
/*
OUTPUT: {
  0: 43,
  1: 67,
  2: 899,
  -1: "poulami",
  "name": "diptaa",
  "whatTheF***": function () { console.log("Yes this is also possible"); }
}
*/
