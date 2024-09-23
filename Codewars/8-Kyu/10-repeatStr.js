// Codewars 10
// Title : String repeat
// Instructions : Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Challange Url : https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
// Level : 8kyu

// Method : 1
// function repeatStr(n, s) {
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(s);
//   }
//   return result.join("");
// }

// Method : 2
const repeatStr = (n, s) => s.repeat(n);

// Other Users Method
// const repeatStr = (n, s) => Array(n + 1).join(s);

// Result ot debug
console.log(repeatStr(5, "Hello"));
console.log(repeatStr(3, "Hel "));
console.log(repeatStr(6, "*"));
