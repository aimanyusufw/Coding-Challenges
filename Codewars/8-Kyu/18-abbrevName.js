// Codewars 18
// Title : Abbreviate a Two Word Name
// Instructions : Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// Challange Url : https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/
// Level : 8kyu

// Method : 1
// function abbrevName(name) {
//   const arrName = name.split(" ");
//   let abbrev = [];
//   for (let i = 0; i < arrName.length; i++) {
//     abbrev.push(arrName[i][0].toUpperCase());
//   }
//   return abbrev.join(".");
// }

// Method : 2
// const abbrevName = (n) =>
//   n
//     .split(" ")
//     .map((data) => data[0].toUpperCase())
//     .join(".");

// Other Users Method
const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();

// Result or debug
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
