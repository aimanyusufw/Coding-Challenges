// Codewars 7
// Title : Convert boolean values to strings 'Yes' or 'No'.
// Instructions : Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// Challange Url : https://www.codewars.com/kata/53369039d7ab3ac506000467
// Level : 8kyu

// Method : 1
// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

// Method : 2
const boolToWord = (bool) => (bool ? "Yes" : "No");

// Other Users Method
// function boolToWord(bool) {
//   return ["No", "Yes"][+bool];
// }

// Result ot debug
console.log(boolToWord(true));
console.log(boolToWord(false));
console.log(boolToWord(null));
console.log(boolToWord(undefined));
console.log(boolToWord("String"));
