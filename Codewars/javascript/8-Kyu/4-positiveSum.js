// Codewars 4
// Title : Sum of positive
// Instructions : You get an array of numbers, return the sum of all of the positives ones.
//                Note: if there is nothing to sum, the sum is default to 0.
// Challange Url : https://www.codewars.com/kata/5715eaedb436cf5606000381
// Level : 8kyu

// Method : 1
// function positiveSum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] > 0 ? (total += arr[i]) : total + 0;
//   }
//   return total;
// }

// Method : 2
const positiveSum = (arr) =>
  arr.length > 0 ? arr.reduce((acc, cur) => (cur < 0 ? acc : acc + cur), 0) : 0;

// Other Users Method
// const positiveSum = (arr) =>
//   arr.reduce((acc, cur) => (cur < 0 ? acc : acc + cur), 0);

// Result ot debug
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
