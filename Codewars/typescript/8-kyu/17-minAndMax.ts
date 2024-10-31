// Codewars 17
// Title :  Find Maximum and minimum values of a list
// Question :   Your task is to make two functions ( max and min, or maximum and minimum, etc.
// Challange Url :  https://www.codewars.com/kata/577a98a6ae28071780000989
// Level : 8kyu

// Method : 1
// export const min = (list: number[]): number => {
//   let min = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (min > list[i]) {
//       min = list[i];
//     }
//   }
//   return min;
// };

// export const max = (list: number[]): number => {
//   let max = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (max < list[i]) {
//       max = list[i];
//     }
//   }
//   return max;
// };

// Method : 2
export const min = (l: number[]): number => Math.min(...l);
export const max = (l: number[]): number => Math.max(...l);

// Other Users Method
// export const min = ($: number[]): number => $.sort((a, b) => a - b)[0];
// export const max = ($: number[]): number => $.sort((a, b) => b - a)[0];
