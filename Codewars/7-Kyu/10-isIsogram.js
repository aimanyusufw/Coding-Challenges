// Codewars 10
// Title : isogram
// Instructions : An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Challange Url : https://www.codewars.com/kata/54ba84be607a92aa900000f1
// Level : 7kyu

// Method : 1
// function isIsogram(str) {
//   let isogramString = "";
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i].toLowerCase();
//     if (isogramString.includes(currentChar)) {
//       return false;
//     }
//     isogramString += currentChar;
//   }
//   return true;
// }

// Method 2
function isIsogram(str) {
  return new Set(str.toLowerCase()).size == str.length;
}

// Other Users Method
// function isIsogram(str) {
//   return !str.match(/([a-z]).*\1/i);
// }

// Result or debug
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
