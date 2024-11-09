// Codewars 9
// Title :  Summing a numbers's digits
// Question :   Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// Challange Url :  https://www.codewars.com/kata/52f3149496de55aded000410/
// Level : 7kyu

// Method : 1
// export function sumDigits(n: number): number {
//   let sum = 0;
//   const arrayNumbers = n
//     .toString()
//     .replace(/[^0-9]/g, "")
//     .split("")
//     .map(Number);

//   for (let i = 0; i < arrayNumbers.length; i++) {
//     sum = sum + arrayNumbers[i];
//   }
//   return sum;
// }

// Method : 2
export const sumDigits = (n: number): number =>
  n
    .toString()
    .replace(/[^0-9]/g, "")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

// Other Users Method
// export function sumDigits(number: number): number {
//   return [...(Math.abs(number) + "")]
//     .map(Number)
//     .reduce((sum, cur) => sum + cur, 0);
// }
