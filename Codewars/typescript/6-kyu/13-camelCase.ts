// Codewars 13
// Title : CamelCase method
// Question :   Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
// Challange Url :  https://www.codewars.com/kata/587731fda577b3d1b0001196
// Level : 7kyu

// Method : 1
// export function camelCase(str: string): string {
//   let camelCase = "";
//   const spltString = str.split(" ");
//   for (let i = 0; i < spltString.length; i++) {
//     const indexString = spltString[i];
//     camelCase += indexString.slice(0, 1).toUpperCase() + indexString.slice(1).toLowerCase();
//   }
//   return camelCase;
// }

// Method : 2
export const camelCase = (s: string): string =>
  s
    .split(" ")
    .map((sub) => sub.slice(0, 1).toUpperCase() + sub.slice(1).toLowerCase())
    .join("");

// Other Users Method
// export function camelCase(str: string): string {
//   return str
//     .split(" ")
//     .map((s: string): string => s.charAt(0).toUpperCase() + s.slice(1))
//     .join("");
// }
