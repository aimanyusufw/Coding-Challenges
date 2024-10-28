// Codewars 2
// Title : Count of positives / sum of negatives
// Question : Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// Challange Url : https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// Level : 8kyu

// Method : 1
// export function countPositivesSumNegatives(
//   input: Array<number>
// ): Array<number> {
//   const positiveNumbers = [];
//   const negativeNumbers = [];

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       positiveNumbers.push(input[i]);
//     } else {
//       negativeNumbers.push(input[i]);
//     }
//   }

//   return [positiveNumbers.length, negativeNumbers.reduce((a, c) => a + c, 0)];
// }

// Method : 2
export const countPositivesSumNegatives = (n: any): Array<number> =>
  n && n.length > 0
    ? [
        n.filter((num: number) => num > 0).length,
        n
          .filter((num: number) => num < 0)
          .reduce((a: number, c: number) => a + c, 0),
      ]
    : [];

// Other Users Method
// export function countPositivesSumNegatives(input: Array<number> | null) {
//     return input && input.length > 0 ? [
//       input.filter((n) => n > 0).length,
//       input.filter((n) => n < 0).reduce((n1, n2) => n1 + n2, 0)
//     ]: []
//   };
