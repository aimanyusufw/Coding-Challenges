// Codewars 1
// Title : Simple multiplication
// Question : This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// Challange Url :  https://www.codewars.com/kata/583710ccaa6717322c000105
// Level : 8kyu

// Method : 1
// export function simpleMultiplication(num: number): number {
//   const isEven: Boolean = num % 2 === 0;
//   const result = num * (isEven ? 8 : 9);
//   return result;
// }

// Method : 2
export const simpleMultiplication = (n: number): number => n * [8, 9][n % 2];

// Other Users Method
// export const simpleMultiplication = (x: number) => x * (8 + (x % 2));
