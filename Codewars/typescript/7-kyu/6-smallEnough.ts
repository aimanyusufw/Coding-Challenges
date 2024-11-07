// Codewars 6
// Title :  Small enough? - Beginner
// Question :   You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true
// Challange Url :  https://www.codewars.com/kata/57cc981a58da9e302a000214/
// Level : 7kyu

// Method : 1
// export function smallEnough(array: number[], limit: number): boolean {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > limit) {
//       return false;
//     }
//   }
//   return true;
// }

// Method : 2
export const smallEnough = (a: number[], l: number): boolean =>
  !a.map((n) => (n > l ? 1 : 0)).includes(1);

// Other Users Method
// export function smallEnough(a: number[], limit: number): boolean {
//   return a.every((x) => x <= limit);
// }
