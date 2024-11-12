// Codewars 19
// Title :  Remove duplicate words
// Question :   Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
// Challange Url :  https://www.codewars.com/kata/5b39e3772ae7545f650000fc
// Level : 7kyu

// Method : 1
// export function removeDuplicateWords(s: string): string {
//   const words: string[] = [];
//   const stringArray = s.split(" ");
//   for (let i = 0; i < stringArray.length; i++) {
//     if (!words.includes(stringArray[i])) words.push(stringArray[i]);
//   }
//   return words.join(" ");
// }

// Method : 2
export const removeDuplicateWords = (s: string): string =>
  [...new Set(s.split(" "))].join(" ");

// Other Users Method
// export function removeDuplicateWords(s: string): string {
//   return s
//     .split(" ")
//     .filter((x, i, a) => a.indexOf(x) === i)
//     .join(" ");
// }
