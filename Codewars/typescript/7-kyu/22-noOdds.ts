// Codewars 22
// Title :  No oddities here
// Question :   Write a small function that returns the values of an array that are not odd.
// Challange Url :  https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/
// Level : 7kyu

// Method : 1
// export function noOdds(values: number[]): number[] {
//   const evenNumbers = [];
//   for (let i = 0; i < values.length; i++) {
//     if (values[i] % 2 === 0) {
//       evenNumbers.push(values[i]);
//     }
//   }
//   return evenNumbers;
// }

// Method : 2
export const noOdds = (v: number[]): number[] => v.filter((n) => n % 2 === 0);

// Other Users Method
// export function noOdds(values: number[]): number[] {
//     return values.filter(i => !(i % 2));
//   }
