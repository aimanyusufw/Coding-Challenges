// Codewars 13
// Title : Shortest word
// Instructions : Simple, given a string of words, return the length of the shortest word(s).
// Challange Url : https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// Level : 7kyu

// Method : 1
// function findShort(s) {
//   const strArray = s.split(" ");
//   let shortestWord = strArray[0];
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i].length < shortestWord.length) {
//       shortestWord = strArray[i];
//     }
//   }
//   return shortestWord.length;
// }

// Method 2
const findShort = (s) =>
  s.split(" ").reduce((a, c) => (c.length < a.length ? c : a)).length;

// Other Users Method
// function findShort(s) {
//   return Math.min(...s.split(" ").map((s) => s.length));
// }

// Result or debug
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));
