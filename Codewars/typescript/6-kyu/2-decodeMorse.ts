// Codewars 2
// Title :  Decode the morse code
// Question :   In this kata you have to write a simple Morse code decoder.
// Challange Url :  https://www.codewars.com/kata/54b724efac3d5402db00065e/
// Level : 7kyu

import { MORSE_CODE } from "./morse-code";

// Method : 1
// export function decodeMorse(morseCode: string) {
//   const arrayChar = morseCode.toUpperCase().split(" ");
//   const morseCodes: Record<string, string> = MORSE_CODE;
//   let decoded = "";
//   let previousEmpty = false;

//   for (let i = 0; i < arrayChar.length; i++) {
//     if (arrayChar[i] === "") {
//       if (!previousEmpty) {
//         decoded += " ";
//         previousEmpty = true;
//       }
//     } else {
//       decoded += morseCodes[arrayChar[i]] || "";
//       previousEmpty = false;
//     }
//   }
//   return decoded;
// }

// Method : 2
export const decodeMorse = (morseCode: string) => {
  const morseCodes: Record<string, string> = MORSE_CODE;

  return morseCode
    .trim()
    .split("  ")
    .map((word) =>
      word
        .split(" ")
        .map((char) => morseCodes[char] || "")
        .join("")
    )
    .join(" ");
};

// Other Users Method
// export function decodeMorse(morseCode: string): string {
//   return morseCode
//     .trim()
//     .split("   ")
//     .map((morseWord) =>
//       morseWord
//         .split(" ")
//         .map((morseCode) => MORSE_CODE[morseCode])
//         .join("")
//     )
//     .join(" ");
// }
