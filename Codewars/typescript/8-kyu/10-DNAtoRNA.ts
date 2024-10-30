// Codewars 10
// Title :  DNA to RNA conversion
// Question :   Create a function which translates a given DNA string into RNA.
// Challange Url :  https://www.codewars.com/kata/5556282156230d0e5e000089
// Level : 8kyu

// Method : 1
// export function DNAtoRNA(dna: string): string {
//   let finalString = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "U") {
//       finalString += "T";
//     } else if (dna[i] === "T") {
//       finalString += "U";
//     } else {
//       finalString += dna[i];
//     }
//   }
//   return finalString;
// }

// Method : 2
export const DNAtoRNA = (d: string): string =>
  d
    .split("")
    .map((c) => (c === "T" ? "U" : c === "U" ? "T" : c))
    .join("");

// Other Users Method
// export function DNAtoRNA(dna: string): string {
//   return dna.replace(/T/g, 'U');
// }
