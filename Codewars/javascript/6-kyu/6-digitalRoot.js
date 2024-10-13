// Codewars 6
// Title : Sum of Digits / Digital Root
// Instructions : Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Challange Url : https://www.codewars.com/kata/541c8630095125aba6000c00
// Level : 6kyu

// Method : 1
// function digitalRoot(n) {
//   function reduceAll(s) {
//     let total = 0;
//     for (let i = 0; i < s.length; i++) {
//       total += s[i];
//     }
//     return total;
//   }
//   let digit = reduceAll(Array.from(String(n), Number));
//   for (let i = 0; i < String(digit).length; i++) {
//     digit = reduceAll(Array.from(String(digit), Number));
//   }
//   return digit;
// }

// Method : 2

// Other Users Method
function digitalRoot(n) {
  return ((n - 1) % 9) + 1;
}

// Result or debug
console.log(digitalRoot(16));
console.log(digitalRoot(456));
console.log(digitalRoot(7652));
console.log(digitalRoot(98192));
console.log(digitalRoot(939495));
