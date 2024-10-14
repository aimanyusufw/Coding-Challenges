// Codewars 7
// Title : Create Phone Number
// Instructions : Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Challange Url : https://www.codewars.com/kata/525f50e3b73515a6db000b83
// Level : 6kyu

// Method : 1
// function createPhoneNumber(numbers) {
//   const areaCode = numbers.slice(0, 3).join("");
//   const centralOfficeCode = numbers.slice(3, 6).join("");
//   const lineNumber = numbers.slice(6).join("");
//   const finallString = `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;

//   return finallString;
// }

// Method : 2
const createPhoneNumber = (n) =>
  `(${n.slice(0, 3).join("")}) ${n.slice(3, 6).join("")}-${n
    .slice(6)
    .join("")}`;

// Other Users Method
// const createPhoneNumber = (n) =>
//   "(xxx) xxx-xxxx".replace(/x/g, () => n.shift());

// Result or debug
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
