// Codewars 9
// Title : Counting Duplicates
// Instructions : Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// Challange Url : https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
// Level : 6kyu

// Method : 1
// function duplicateCount(s) {
//   const lowerString = s.toLowerCase();
//   let word = {};
//   let duplicated = 0;
//   for (let i = 0; i < lowerString.length; i++) {
//     if (word[lowerString[i]] === undefined) {
//       word[lowerString[i].toLowerCase()] = 0;
//     }
//     word[lowerString[i]]++;
//   }
//   for (let key in word) {
//     if (word[key] > 1) {
//       duplicated++;
//     }
//   }
//   return duplicated;
// }

// Method : 2
const duplicateCount = (s) =>
  s
    .toLowerCase()
    .split("")
    .filter(
      (val, i, arr) => arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    ).length;

// Other Users Method
// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("")
//       .match(/([^])\1+/g) || []
//   ).length;
// }

// Result or debug
console.log(duplicateCount("hello"));
console.log(duplicateCount(""));
console.log(duplicateCount("aabbcdee"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
