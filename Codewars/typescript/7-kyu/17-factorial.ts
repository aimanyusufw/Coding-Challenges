// Codewars 17
// Title :  Factorial
// Question :   Yor task is to writer function factorial
// Challange Url :  https://www.codewars.com/kata/57a049e253ba33ac5e000212/
// Level : 7kyu

// Method : 1
// export function factorial(n: number): number {
//   let result = 1;
//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// }

// Method : 2
// export const factorial = (n: number): number =>
//   [...Array(n)].reduce((a, c, i) => a * (i + 1), 1);

// Other Users Method
export function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
