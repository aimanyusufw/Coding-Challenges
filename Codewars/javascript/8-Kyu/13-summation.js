// Codewars 13
// Title : Grasshopper - Summation
// Instructions : Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
// Challange Url : https://www.codewars.com/kata/55d24f55d7dd296eb9000030
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
