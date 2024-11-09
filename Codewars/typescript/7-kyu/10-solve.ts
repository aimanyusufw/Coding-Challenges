// Codewars 10
// Title :  Fix Srting Case
// Question :   In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on
// Challange Url :  https://www.codewars.com/kata/5b180e9fedaa564a7000009a
// Level : 7kyu

// Method : 1
// export function solve(s: string) {
//   let uppercaseCount = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (/^[A-Z]*$/.test(s[i])) {
//       uppercaseCount++;
//     }
//   }
//   return uppercaseCount > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
// }

// Method : 2
export const solve = (s: string): string =>
  s.replace(/[A-Z]/g, "").length >= s.length / 2
    ? s.toLowerCase()
    : s.toUpperCase();

// Other Users Method
// export function solve(s: string): string {
//   return (s.match(/[a-z]/g) || []).length >= s.length / 2
//     ? s.toLowerCase()
//     : s.toUpperCase();
// }
