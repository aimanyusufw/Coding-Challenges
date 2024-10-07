// Codewars 3
// Title : Square Every Digit
// Instructions : Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// Challange Url : https://www.codewars.com/kata/546e2562b03326a88e000020
// Level : 7kyu

// Method : 1
// function squareDigits(num) {
//   const arrNum = num.toString().split("").map(Number);
//   const squareArrNumber = [];
//   for (let i = 0; i < arrNum.length; i++) {
//     squareArrNumber.push(arrNum[i] * arrNum[i]);
//   }
//   return parseInt(squareArrNumber.join(""));
// }

// Method 2
const squareDigits = (n) =>
  parseInt(
    n
      .toString()
      .split("")
      .map((data) => data * data)
      .join("")
  );

// Other Users Method
// function squareDigits(num) {
//   return +num
//     .toString()
//     .split("")
//     .map((i) => i * i)
//     .join("");
// }

// Result or debug
console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
