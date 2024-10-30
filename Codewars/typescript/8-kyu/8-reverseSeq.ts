// Codewars 8
// Title :  Reversed squance
// Question :   Build a function that returns an array of integers from n to 1 where n>0.
// Challange Url :  https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Level : 8kyu

// Method : 1
// export const reverseSeq = (n: number): number[] => {
//   const squance = [];
//   for (let i = n; i > 0; i--) {
//     squance.push(i);
//   }
//   return squance;
// };

// Method : 2
export const reverseSeq = (n: number): number[] =>
  [...Array(n)].map((_, i) => i + 1).reverse();

// Other Users Method
// export const reverseSeq = (n: number): number[] => {
//   // return Array.from({ length: n }, (_, i) => n - i);
// };
