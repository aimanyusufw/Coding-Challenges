// Codewars 16
// Title :  Leap years
// Question :   In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
// Challange Url :  https://www.codewars.com/kata/526c7363236867513f0005ca
// Level : 7kyu

// Method : 1
// export function isLeap(year: number): boolean {
//   let isLeap = false;
//   if (year % 4 === 0 && year % 100 !== 0) {
//     if (year % 400 === 0) {
//       isLeap = true;
//     }
//   }
//   return isLeap;
// }

// Method : 2
export function isLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Other Users Method
// export function isLeap(year: number): boolean {
//   return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
// }
