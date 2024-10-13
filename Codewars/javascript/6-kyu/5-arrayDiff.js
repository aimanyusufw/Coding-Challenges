// Codewars 5
// Title : Array.diff
// Instructions : Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// Challange Url : https://www.codewars.com/kata/523f5d21c841566fde000009
// Level : 6kyu

// Method : 1
// function arrayDiff(a, b) {
//   const finalArray = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       finalArray.push(a[i]);
//     }
//   }
//   return finalArray;
// }

// Method : 2
const arrayDiff = (a, b) =>
  a
    .map((data) => (!b.includes(data) ? data : undefined))
    .filter((data) => data !== undefined);

// Other Users Method
// function arrayDiff(a, b) {
//   return a.filter((e) => !b.includes(e));
// }

// Result or debug
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
