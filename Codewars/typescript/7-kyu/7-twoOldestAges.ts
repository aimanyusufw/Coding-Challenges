// Codewars 7
// Title :  Two Oldest ages
// Question :   The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array.
// Challange Url :  https://www.codewars.com/kata/511f11d355fe575d2c000001/
// Level : 7kyu

// Method : 1
// export function twoOldestAges(ages: number[]): number[] {
//   for (let i = 0; i < ages.length; i++) {
//     for (let j = 0; j < ages.length - i - 1; j++) {
//       if (ages[j] > ages[j + 1]) {
//         const temp = ages[j + 1];
//         ages[j + 1] = ages[j];
//         ages[j] = temp;
//       }
//     }
//   }

//   return ages.slice(ages.length - 2);
// }

// Method : 2
// export const twoOldestAges = (a: number[]): number[] =>
//   a.sort((a, b) => a - b).slice(a.length - 2);

// Other Users Method
export const twoOldestAges = (a: number[]): number[] =>
  a.sort((a, b) => a - b).slice(-2);
