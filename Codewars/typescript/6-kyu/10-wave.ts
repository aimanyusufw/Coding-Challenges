// Codewars 10
// Title :  Maxican Wave
// Question :   In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// Challange Url :  https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
// Level : 7kyu

// Method : 1
// export function wave(str: string): Array<string> {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       result.push(
//         [str.slice(0, i), str.slice(i + 1)].join(str[i].toUpperCase())
//       );
//     }
//   }
//   return result;
// }

// Method : 2
export const wave = (str: string): Array<string> =>
  str
    .split("")
    .map((s, i) =>
      s === " " ? null : str.slice(0, i) + s.toUpperCase() + str.slice(i + 1)
    )
    .filter((s): s is string => s != null);

// Other Users Method
// export function wave(str: string): Array<string> {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === " ") {
//       continue;
//     }
//     result.push(
//       str.substring(0, i) + str.charAt(i).toUpperCase() + str.substring(i + 1)
//     );
//   }
//   return result;
// }
