// Codewars 8
// Title : Opposite number
// Instructions : Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
// Challange Url : https://www.codewars.com/kata/56dec885c54a926dcd001095
// Level : 8kyu

// Method : 1
// function opposite(number) {
//   return (number -= number * 2);
// }

// Method : 2
const opposite = (n) => (n -= n * 2);

// Other Users Method
// const opposite = (number) => -number;

// Result ot debug
console.log(opposite(24));
console.log(opposite(12));
console.log(opposite(-112));
