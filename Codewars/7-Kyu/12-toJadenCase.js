// Codewars 12
// Title : Jaden Casing Strings
// Instructions : Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Challange Url : https://www.codewars.com/kata/5390bac347d09b7da40006f6
// Level : 7kyu

// Method : 1
// String.prototype.toJadenCase = function () {
//   const strArray = this.split(" ");
//   let jadenCaseString = [];
//   for (let i = 0; i < strArray.length; i++) {
//     jadenCaseString.push(
//       strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1)
//     );
//   }
//   return jadenCaseString.join(" ");
// };

// Method 2
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((data) => data[0].toUpperCase() + data.slice(1))
    .join(" ");
};

// Other Users Method
// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, function (x) {
//     return x.toUpperCase();
//   });
// };

// Result or debug
const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
