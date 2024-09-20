// Codewars 3
// Title : Return Negative
// Instructions : In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Challange Url : https://www.codewars.com/kata/55685cd7ad70877c23000102
// Level : 8kyu

// Method : 1
// function makeNegative(num) {
//   if (num > 0) {
//     return num * -1;
//   } else {
//     return num;
//   }
// }

// Method : 2
// const makeNegative = (num) => (num > 0 ? num * -1 : num);

// Other Users Method
const makeNegative = (n) => -Math.abs(n);

// Result ot debug
console.log(makeNegative(2));
console.log(makeNegative(1));
console.log(makeNegative(5));
console.log(makeNegative(-9));
console.log(makeNegative(0.12));
console.log(makeNegative(42));
