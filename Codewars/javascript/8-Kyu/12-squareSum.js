// Codewars 12
// Title : Square(n) Sum
// Instructions : Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Challange Url : https://www.codewars.com/kata/515e271a311df0350d00000f
// Level : 8kyu

// Method : 1
// function squareSum(numbers) {
//   if (numbers.length < 1) return 0;
//   const arrSquare = [];
//   for (let i = 0; i < numbers.length; i++) {
//     arrSquare.push(numbers[i] * numbers[i]);
//   }
//   return eval(arrSquare.join("+"));
// }

// Method : 2
// const squareSum = (numbers) =>
//   numbers.map((number) => number * number).reduce((acc, cur) => acc + cur, 0);

// Other Users Method
const squareSum = (numbers) => numbers.reduce((acc, cur) => acc + cur * cur, 0);

// Result ot debug
console.log(squareSum([2, 4]));
console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
