// Codewars 8
// Title : You're square
// Instructions : Given an integral number, determine if it's a square number:
// Challange Url : https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// Level : 7kyu

// Method : 1
// function isSquare(n) {
//   if (n < 0) return false;
//   for (let i = 0; i * i <= n; i++) {
//     if (i * i === n) {
//       return true;
//     }
//   }
//   return false;
// }

// Method 2
const isSquare = (n) => Number.isInteger(Math.sqrt(n));

// Other Users Method
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

// Result or debug
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(2));
console.log(isSquare(4));
console.log(isSquare(5));
console.log(isSquare(25));
console.log(isSquare(36));
