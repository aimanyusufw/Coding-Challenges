// Codewars 9
// Title :  Which are in?
// Question :   Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Challange Url :  Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
// Level : 7kyu

// Method : 1
// export function inArray(a1: string[], a2: string[]): string[] {
//   const result = [];
//   for (let i = 0; i < a1.length; i++) {
//     for (let j = 0; j < a2.length; j++) {
//       if (a2[j].includes(a1[i])) {
//         result.push(a1[i]);
//         break;
//       }
//     }
//   }
//   return result.sort();
// }

// Method : 2
export const inArray = (a1: string[], a2: string[]): string[] =>
  a1.filter((s) => a2.some((s2) => s2.includes(s))).sort();

// Other Users Method
// export function inArray(a1: string[], a2: string[]): string[] {
//   return a1.filter((word) => a2.join(" ").includes(word)).sort();
// }
