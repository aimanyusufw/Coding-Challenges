// Codewars 13
// Title : Replace with alphabet position
// Instructions : In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// Challange Url : https://www.codewars.com/kata/546f922b54af40e1e90001da
// Level : 6kyu

// Method : 1
// function alphabetPosition(str) {
//   str = str
//     .toLowerCase()
//     .replace(/[^a-z]/g, "")
//     .split(" ")
//     .join("");
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let stringPosition = [];
//   for (let i = 0; i < str.length; i++) {
//     stringPosition.push(alphabet.indexOf(str[i]) + 1);
//   }
//   return stringPosition.join(" ");
// }

// Method : 2
const alphabetPosition = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((c) => "abcdefghijklmnopqrstuvwxyz".indexOf(c) + 1)
    .join(" ");

// Other Users Method
// let alphabetPosition = (text) =>
//   text
//     .toUpperCase()
//     .replace(/[^A-Z]/g, "")
//     .split("")
//     .map((ch) => ch.charCodeAt(0) - 64)
//     .join(" ");

// Result or debug
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
console.log(alphabetPosition("><j0x_&*"));
