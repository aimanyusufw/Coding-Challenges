// Codewars 12
// Title :  Count by X
// Question :   Return the results as an array or list ( depending on language ).
// Challange Url :  https://www.codewars.com/kata/5513795bd3fafb56c200049e
// Level : 8kyu

// Method : 1
// export function countBy(x: number, n: number): number[] {
//   const count = [];
//   let currentNumber = x;
//   for (let i = 0; i < n; i++) {
//     count.push(currentNumber);
//     currentNumber = x + currentNumber;
//   }
//   return count;
// }

// Method : 2
export const countBy = (x: number, n: number) =>
  [...Array(n)].map((_, i) => (i + 1) * x);

// Other Users Method
// export function countBy(x: number, n: number): number[] {
//   return Array.from({ length: n }, (_, i) => x * i + x);
// }
