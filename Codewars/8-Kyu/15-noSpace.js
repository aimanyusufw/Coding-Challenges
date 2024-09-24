// Codewars 15
// Title : Remove String Spaces
// Instructions : Write a function that removes the spaces from the string, then return the resultant string.
// Challange Url : https://www.codewars.com/kata/57eae20f5500ad98e50002c5
// Level : 8kyu

// Method : 1
// function noSpace(x) {
//   let arrString = x.split(" ");
//   let result = "";
//   for (let i = 0; i < arrString.length; i++) {
//     if (result !== " ") {
//       result += arrString[i];
//     }
//   }
//   return result;
// }

// Method : 2
const noSpace = (x) => x.split(" ").join("");

// Other Users Method
// const noSpace = (x) => x.replace(/\s/g, "");

// Result or debug
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     "));
