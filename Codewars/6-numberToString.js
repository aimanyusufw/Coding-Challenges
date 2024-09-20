// Codewars 6
// Title : Convert a Number to a String!
// Instructions : We need a function that can transform a number (integer) into a string.
//                What ways of achieving this do you know?
// Challange Url : https://www.codewars.com/kata/5265326f5fda8eb1160004c8/
// Level : 8kyu

// Method : 1
// function numberToString(num) {
//   return num.toString();
// }

// Method : 2
// const numberToString = (num) => num.toString();

// Other Users Method
const numberToString = (num) => `${num}`;

// Result ot debug
console.log(numberToString(1234));
console.log(numberToString(2345));
console.log(numberToString(0));
console.log(numberToString(-100));
