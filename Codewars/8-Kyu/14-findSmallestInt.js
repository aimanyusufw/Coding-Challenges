// Codewars 14
// Title : Find the smallest integer in the array
// Instructions : Given an array of integers your solution should find the smallest integer.
// Challange Url : https://www.codewars.com/kata/55a2d7ebe362935a210000b2/
// Level : 8kyu

// Method : 1
// function findSmallestInt(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// Method : 2
const findSmallestInt = (arr) => Math.min(...arr);

// Other Users Method
// const findSmallestInt = (args) =>
//   args.reduce((acc, prev) => (acc < prev ? acc : prev));

// Result or debug
console.log(findSmallestInt([78, 56, 232, 12, 8]));
console.log(findSmallestInt([78, 56, 232, 12, 18]));
console.log(findSmallestInt([78, 56, 232, 412, 228]));
console.log(findSmallestInt([78, 56, 232, 12, 0]));
console.log(findSmallestInt([1, 56, 232, 12, 8]));
