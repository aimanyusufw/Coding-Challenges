// Codewars 14
// Title :   Flaten and short an array
// Question :      Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
// Challange Url :  https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
// Level : 7kyu

// Method : 1
// export function flattenAndSort(inputArray: number[][]):number[] {
//   const shoted = inputArray.flat();
//   for (let i = 0; i < shoted.length; i++) {
//     for (let j = 0; j < shoted.length - i - 1; j++) {
//       if (shoted[j] > shoted[j + 1]) {
//         const temp = shoted[j];
//         shoted[j] = shoted[j + 1];
//         shoted[j + 1] = temp;
//       }
//     }
//   }
//   return shoted;
// }

// Method : 2
export const flattenAndSort = (a: number[][]): number[] =>
  a.flat().sort((a, b) => a - b);

// Other Users Method
// export const flattenAndSort = (a: number[][]): number[] =>
//   [].concat(...a).sort((a, b) => a - b);
