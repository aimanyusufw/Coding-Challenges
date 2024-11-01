// Codewars 18
// Title :  Reversed words
// Question :   Your task is to make two functions ( max and min, or maximum and minimum, etc.
// Challange Url :  https://www.codewars.com/kata/51c8991dee245d7ddf00000e
// Level : 8kyu

// Method : 1
// export function reverseWords(str: string): string {
//   const splitString = str.split(" ");
//   const reversed = [];
//   for (let i = splitString.length; i > 0; i--) {
//     reversed.push(splitString[i - 1]);
//   }
//   return reversed.join(" ");
// }

// Method : 2
export const reverseWords = (s: string): string =>
  s.split(" ").reverse().join(" ");

// Other Users Method
// export function reverseWords(str: string) {
//   return String(str.split(" ").reverse().join(" "));
// }
