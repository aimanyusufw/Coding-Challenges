// Codewars 11
// Title :  Maximum multiple
// Question :   Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Challange Url :  https://www.codewars.com/kata/5aba780a6a176b029800041c/
// Level : 7kyu

// Method : 1
// export function maxMultiple(divisor: number, bound: number): number {
//   const res = Math.floor(bound / divisor) * divisor;
//   return res;
// }

// Method : 2
export const maxMultiple = (d: number, b: number): number =>
  Math.floor(b / d) * d;

// Other Users Method
// export function maxMultiple(divisor: number, bound: number) {
//   return bound - (bound % divisor);
// }
