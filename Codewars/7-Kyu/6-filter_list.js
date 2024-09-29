// Codewars 6
// Title : List Filtering
// Instructions : In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Challange Url : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// Level : 7kyu

// Method : 1
// function filter_list(l) {
//   const filteredList = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === "number") {
//       filteredList.push(l[i]);
//     }
//   }
//   return filteredList;
// }

// Method 2
const filter_list = (l) => l.filter((data) => typeof data === "number");

// Other Users Method
// function filter_list(l) {
//   return l.filter((e) => Number.isInteger(e));
// }

// Result or debug
console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
