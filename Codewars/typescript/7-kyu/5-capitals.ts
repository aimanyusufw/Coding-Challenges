// Codewars 5
// Title : Find the capitals
// Question :   Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Challange Url :  https://www.codewars.com/kata/539ee3b6757843632d00026b/
// Level : 7kyu

// Method : 1
// export function capitals(word: string): number[] {
//   const indexCapitals = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       indexCapitals.push(word.indexOf(word[i]));
//     }
//   }
//   return indexCapitals;
// }

// Method : 2
export const capitals = (w: string): number[] =>
  w
    .split("")
    .filter((c) => c === c.toUpperCase())
    .map((c) => w.indexOf(c));

// Other Users Method
// export function capitals(word: string): Array<number> {
//   return word
//     .split("")
//     .filter((symbol) => symbol.toUpperCase() === symbol)
//     .map((element) => word.indexOf(element));
// }
