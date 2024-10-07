// Codewars 17
// Title : Convert a String to a Number!
// Instructions : We need a function that can transform a string into a number. What ways of achieving this do you know?
// Challange Url : https://www.codewars.com/kata/544675c6f971f7399a000e79/
// Level : 8kyu

// Method : 1
// function stringToNumber(str) {
//   return parseInt(str);
// }

// Method : 2
const stringToNumber = (s) => parseInt(s);

// Other Users Method
// var stringToNumber = function (str) {
//   return +str;
// };

// Result or debug
console.log(stringToNumber("1234"));
console.log(stringToNumber("605"));
console.log(stringToNumber("1405"));
console.log(stringToNumber("-7"));
