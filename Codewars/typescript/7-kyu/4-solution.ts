// Codewars 4
// Title :  Sort Numbers
// Question :   Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// Challange Url :  https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
// Level : 7kyu

// Method : 1
// export function solution(numbers: number[]): number[] {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length - 1 - i; j++) {
//       if (numbers[j] > numbers[j + 1]) {
//         let temp = numbers[j];
//         numbers[j] = numbers[j + 1];
//         numbers[j + 1] = temp;
//       }
//     }
//   }

//   return numbers;
// }

// Method : 2
export const solution = (numbers: number[]): number[] =>
  numbers.sort((a, b) => a - b);

// Other Users Method
// export function solution(nums: number[]): number[] {
//   return nums ? nums.sort((a, b) => a - b) : [];
// }
