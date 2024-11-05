// Codewars 17
// Title : Your order please
// Instructions :   Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Challange Url :  https://www.codewars.com/kata/55c45be3b2079eccff00010f
// Level : 6kyu

// Method : 1
// function order(words) {
//   if (!words) return "";

//   const sortedWords = words.split(" ").sort((a, b) => {
//     let numA = a.match(/\d/)[0];
//     let numB = b.match(/\d/)[0];
//     return numA - numB;
//   });

//   return sortedWords.join(" ");
// }

// Method : 2
const order = (words) =>
  words
    .split(" ")
    .sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0])
    .join(" ");

// Other Users Method
// function order(words) {
//   return (
//     words &&
//     words
//       .split(" ")
//       .map((word) => word.match(/\d/) + word)
//       .sort()
//       .map((word) => word.slice(1))
//       .join(" ")
//   );
// }

// Result or debug
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
