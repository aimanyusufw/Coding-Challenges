// Codewars 15
// Title :  If you can't sleep, just count sheep!!
// Question :   Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// Challange Url :  https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
// Level : 8kyu

// Method : 1
// export function countSheep(num: number): string {
//   const sheeps = [];
//   for (let i = 0; i < num; i++) {
//     sheeps.push(`${i + 1} sheep...`);
//   }
//   return sheeps.join("");
// }

// Method : 2
export const countSheep = (n: number): string =>
  [...Array(n)].map((_, i) => `${i + 1} sheep...`).join("");

// Other Users Method
// export function countSheep(n: number): string {
//   return Array.from({ length: n }, (_, i) => `${i + 1} sheep...`).join("");
// }
