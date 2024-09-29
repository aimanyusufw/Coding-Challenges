// Codewars 7
// Title : Get the Middle Character
// Instructions : You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// Challange Url : https://www.codewars.com/kata/56747fd5cb988479af000028
// Level : 7kyu

// Method : 1
// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
//   } else {
//     return s[Math.floor(s.length / 2)];
//   }
// }

// Method 2
const getMiddle = (s) =>
  s.length % 2 === 0
    ? `${s[s.length / 2 - 1]}${s[s.length / 2]}`
    : s[Math.floor(s.length / 2)];

// Other Users Method
// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

// Result or debug
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
