// Codewars 11
// Title :  Roman Numerals Encoder
// Question :   Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Challange Url :  https://www.codewars.com/kata/51b62bf6a9c58071c600001b
// Level : 7kyu

// Method : 1
// export function solution(number: number): string {
//   const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const syms = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   let roman = "";
//   let i = 0;
//   while (number > 0) {
//     while (number >= val[i]) {
//       roman += syms[i];
//       number -= val[i];
//     }
//     i++;
//   }
//   return roman;
// }

// Method : 2
export const solution = (num: number): string => {
  var roman: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = "";

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
};

// Other Users Method
