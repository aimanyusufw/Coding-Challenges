// Codewars 8
// Title : String repeat
// Instructions : Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Challange Url : https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
// Level : 8kyu

// Method : 1
// var summation = function (num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i;
//   }
//   return total;
// };

// Method : 2
const summation = (num) =>
  [...Array(num)].map((_, i) => i + 1).reduce((a, b) => a + b);

// Other Users Method
// const summation = (n) => (n * (n + 1)) / 2;

// Result or debug
console.log(summation(1));
console.log(summation(2));
console.log(summation(8));
