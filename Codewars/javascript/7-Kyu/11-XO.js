// Codewars 11
// Title : Exes and Ohs
// Instructions : Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Challange Url : https://www.codewars.com/kata/55908aad6620c066bc00002a
// Level : 7kyu

// Method : 1
// function XO(str) {
//   let oAmount = 0;
//   let xAmount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() == "x") {
//       xAmount++;
//     } else if (str[i].toLowerCase() == "o") {
//       oAmount++;
//     }
//   }
//   return xAmount === oAmount;
// }

// Method 2
// const XO = (str) =>
//   str.toLowerCase().split("x").length === str.toLowerCase().split("o").length;

// Other Users Method
const XO = (s) => s.replace(/x/gi, "").length === s.replace(/o/gi, "").length;

// Result or debug
console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
console.log(XO("spsps"));
