// Codewars 1
// Title :  Testing 1-2-3
// Question :   Write a function which takes a list of strings and returns each line prepended by the correct number.
// Challange Url :  https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/
// Level : 7kyu

// Method : 1
// export function number(array: string[]): string[] {
//   const testingArray = [];
//   for (let i = 0; i < array.length; i++) {
//     testingArray.push(`${i + 1}: ${array[i]}`);
//   }
//   return testingArray;
// }

// Method : 2
export const number = (a: string[]): string[] =>
  a.map((data, i) => `${i + 1}: ${data}`);

// Other Users Method
// export function number(array: string[]): string[] {
//   let newArr: string[] = [];
//   array.forEach((elem, index) => {
//     newArr.push(`${index + 1}: ${elem}`);
//   });
//   return newArr;
// }
