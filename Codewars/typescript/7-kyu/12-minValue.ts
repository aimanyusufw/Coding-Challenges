// Codewars 12
// Title :  Form the minimum
// Question :   Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Challange Url :  https://www.codewars.com/kata/5ac6932b2f317b96980000ca
// Level : 7kyu

// Method : 1
// export const minValue = (values: number[]): number => {
//   const filterUnique: number[] = [];
//   for (let i = 0; i < values.length; i++) {
//     if (!filterUnique.includes(values[i])) {
//       filterUnique.push(values[i]);
//     }
//   }
//   return Number(filterUnique.sort((a, b) => a - b).join(""));
// };

// Method : 2
export const minValue = (v: number[]): number =>
  Number([...new Set(v)].sort((a, b) => a - b).join(""));

// Other Users Method
// export const minValue = (values: Array<number>): number => {
//   return +[...new Set(values)].sort().join("");
// };
