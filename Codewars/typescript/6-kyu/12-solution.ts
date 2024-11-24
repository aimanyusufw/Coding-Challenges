// Codewars 12
// Title :  Roman Numerals Decoder
// Question :   Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
// Challange Url :  https://www.codewars.com/kata/51b6249c4612257ac0000005
// Level : 7kyu

// Method : 1
export function solution(roman: string): number {
  const romanToInt: { [key: string]: number } = {
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
  let number = 0;
  let i = 0;

  while (i < roman.length) {
    if (i + 1 < roman.length && romanToInt[roman.substring(i, i + 2)]) {
      number += romanToInt[roman.substring(i, i + 2)];
      i += 2;
    } else {
      number += romanToInt[roman[i]];
      i++;
    }
  }

  return number;
}

// Method : 2

// Other Users Method
// export function solution(roman: string): number {
//   const symbols: any = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   return roman
//     .split("")
//     .map((e) => symbols[e])
//     .reduce((p, c) => (p < c ? c - p : c + p));
// }
