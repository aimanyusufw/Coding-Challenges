// Codewars 5
// Title : You onlu need one - beginner
// Question :   You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Challange Url :  https://www.codewars.com/kata/57cc975ed542d3148f00015b
// Level : 8kyu

// Method : 1
// export function check(a: (number | string)[], x: number | string): boolean {
//   let isContent = false;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === x) {
//       isContent = true;
//     }
//   }
//   return isContent;
// }

// Method : 2
export const check = (a: (number | string)[], x: number | string): boolean =>
  a.indexOf(x) >= 0 ? true : false;

// Other Users Method
// export const check = (a: any[], x: any): boolean => {
//   return a.includes(x);
// };
