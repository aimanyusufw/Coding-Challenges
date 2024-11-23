// Codewars 1
// Title :  Moving zeros to the end
// Instructions :   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// Challange Url :  https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Level : 7kyu

// Method : 1
// function moveZerosToEnd(arr) {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[index] = arr[i];
//       index++;
//     }
//   }
//   for (let i = index; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }

// Method 2
export const moveZeros = (arr) => [
  ...arr.filter((n) => n !== 0),
  ...arr.filter((n) => n === 0),
];

// Other Users Method
// function moveZeros(arr) {
//   return arr.sort((a, b) => (b === 0 ? -1 : 0));
// }
