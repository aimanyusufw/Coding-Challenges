// Codewars 9
// Title : Remove First and Last Character
// Instructions : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
// Challange Url : https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/
// Level : 8kyu

// Method : 1
// function removeChar(str) {
//   const result = [];
//   const arrStr = str.split("");
//   for (let i = 1; i < arrStr.length - 1; i++) {
//     result.push(arrStr[i]);
//   }
//   return result.join("");
// }

// Method : 2
const removeChar = (s) => s.slice(1, -1);

// Other Users Method
// const removeChar = (str) => str.replace(/^.|.$/g, "");

// Result ot debug
console.log(removeChar("Hello"));
console.log(removeChar("world"));
