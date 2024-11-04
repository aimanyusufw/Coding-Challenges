// Codewars 2
// Title :  Don't give me five
// Question :   In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.
// Challange Url :  https://www.codewars.com/kata/5813d19765d81c592200001a/
// Level : 7kyu

// Method : 1
// export function dontGiveMeFive(start: number, end: number): number {
//   const numbersWithoutFive = [];
//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes("5")) numbersWithoutFive.push(i);
//   }
//   return numbersWithoutFive.length;
// }

// Method : 2
// export const dontGiveMeFive = (s: number, e: number): number =>
//   [...Array(e - s + 1)]
//     .map((_, i) => ((s + i).toString().includes("5") ? "" : s + i))
//     .filter((e) => e !== "").length;

// Other Users Method
export function dontGiveMeFive(start: number, end: number): number {
  return [...Array(end - start + 1)].filter((_, i) => !/5/.test(start + i + ""))
    .length;
}
