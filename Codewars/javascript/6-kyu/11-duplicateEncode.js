// Codewars 11
// Title : Duplicate encoder
// Instructions : The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
// Challange Url : https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// Level : 6kyu

// Method : 1
// function duplicateEncode(s) {
//   const str = s.toLowerCase();
//   const charCount = {};
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   let result = "";
//   for (let char of str) {
//     if (charCount[char] > 1) {
//       result += ")";
//     } else {
//       result += "(";
//     }
//   }
//   return result;
// }

// Method : 2
// const duplicateEncode = (s) =>
//   s
//     .toLowerCase()
//     .split("")
//     .map((data) => (s.toLowerCase().split(data).length > 2 ? ")" : "("))
//     .join("");

// Other Users Method
const duplicateEncode = (s) => {
  s = s.toLowerCase();
  return s.replace(/./g, (m) => (s.indexOf(m) == s.lastIndexOf(m) ? "(" : ")"));
};

// Result or debug
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("success"));
console.log(duplicateEncode("(( @"));
