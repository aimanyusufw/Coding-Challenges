// Codewars 4
// Title :  Fake Binnary
// Question :   Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Challange Url :  https://www.codewars.com/kata/57eae65a4321032ce000002d
// Level : 8kyu

// Method : 1
// export function fakeBin(str: string): string {
//   let binnay = "";
//   for (let i = 0; i < str.length; i++) {
//     if (parseInt(str[i]) >= 5) {
//       binnay += "1";
//     } else {
//       binnay += "0";
//     }
//   }
//   return binnay;
// }

// Method : 2
export const fakeBin = (s: string): string =>
  s
    .split("")
    .map((n) => (parseInt(n) >= 5 ? "1" : "0"))
    .join("");

// Other Users Method
// export const fakeBin = (x:string):string => x.replace(/\d/g, n => Number(n) < 5 ? '0' : '1');
