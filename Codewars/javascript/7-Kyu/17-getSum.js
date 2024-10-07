// Codewars 17
// Title : Beginner Series #3 Sum of Numbers
// Instructions : Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Challange Url : https://www.codewars.com/kata/55f2b110f61eb01779000053
// Level : 7kyu

// Method : 1
// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   } else {
//     let sum = 0;
//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//       sum += i;
//     }
//     return sum;
//   }
// }

// Method : 2
const getSum = (a, b) => ((a + b) * (Math.abs(a - b) + 1)) / 2;

// Other Users Method
// function getSum(a, b) {
//   return ((Math.abs(a - b) + 1) * (a + b)) / 2;
// }

// Result or debug
console.log(getSum(0, 1));
console.log(getSum(0, -1));
console.log(getSum(1, 1));
console.log(getSum(2, 2));
