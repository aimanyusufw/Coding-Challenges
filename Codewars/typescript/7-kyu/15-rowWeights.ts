// Codewars 15
// Title :  Row weights
// Question :   Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Challange Url :  https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
// Level : 7kyu

// Method : 1
// export function rowWeights(arr: number[]): number[] {
//   let tim1 = 0;
//   let tim2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       tim1 += arr[i];
//     } else {
//       tim2 += arr[i];
//     }
//   }
//   return [tim1, tim2];
// }

// Method : 2
export const rowWeights = (a: number[]): number[] => [
  a.reduce((a, b, i) => (i % 2 == 0 ? a + b : a + 0), 0),
  a.reduce((a, b, i) => (i % 2 !== 0 ? a + b : a + 0), 0),
];

// Other Users Method
// export const rowWeights = (arr: number[]) =>
//   [0, 1].map((n) =>
//     arr.filter((_, i) => i % 2 === n).reduce((acc, x) => acc + x, 0)
//   );
