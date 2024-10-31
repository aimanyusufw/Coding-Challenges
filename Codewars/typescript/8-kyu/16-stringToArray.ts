// Codewars 16
// Title :  Convert a string to an array
// Question :   Write a function to split a string and convert it into an array of words
// Challange Url :  https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
// Level : 8kyu

// Method : 1
// export function stringToArray(s: string): string[] {
//   const words = [];
//   let word = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       words.push(word);
//       word = "";
//     } else {
//       word += s[i];
//     }
//   }
//   if (word) {
//     words.push(word);
//   }
//   return words;
// }

// Method : 2
export function stringToArray(s: string): string[] {
  return s.split(" ");
}

// Other Users Method
// export function stringToArray(s: string): string[] {
// 	return s.split(/\s/);
// }
