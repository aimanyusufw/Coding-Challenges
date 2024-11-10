// Codewars 13
// Title :   Alternate capitalization
// Question :    Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// Challange Url :   https://www.codewars.com/kata/59cfc000aeb2844d16000075
// Level : 7kyu

// Method : 1
// export function capitalize(s: string): [string, string] {
//   let evenString: string = "";
//   let oddString: string = "";
//   for (let i = 0; i < s.length; i++) {
//     if (i % 2 == 0) {
//       oddString += s[i].toLowerCase();
//       evenString += s[i].toUpperCase();
//     } else {
//       oddString += s[i].toUpperCase();
//       evenString += s[i].toLowerCase();
//     }
//   }
//   return [evenString, oddString];
// }

// Method : 2
export const capitalize = (s: string): [string, string] => [
  s
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
    .join(""),
  s
    .split("")
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join(""),
];

// Other Users Method
// export const capitalize = (s: string) => [
//     [...s].map((l, i) => i % 2 ? l : l.toUpperCase()).join(''),
//     [...s].map((l, i) => i % 2 ? l.toUpperCase() : l).join(''),
//   ];
