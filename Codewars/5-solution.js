// Codewars 5
// Title : Reversed Strings
// Instructions : Complete the solution so that it reverses the string passed into it.
// Challange Url : https://www.codewars.com/kata/5168bb5dfe9a00b126000018/
// Level : 8kyu

// Method : 1
// function solution(str) {
//   const result = [];
//   const arrStr = str.split("");
//   for (let i = arrStr.length; i >= 0; i--) {
//     result.push(arrStr[i]);
//   }
//   return result.join("");
// }

// Method : 2
const solution = (str) => str.split("").reverse().join("");

// Other Users Method

// Result ot debug
console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));
console.log(solution("h"));
