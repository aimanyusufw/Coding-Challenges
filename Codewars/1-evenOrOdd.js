// Codewars 1
// Title : Even or Odd
// Question : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Challange Url : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Level : 8kyu

// Method : 1
// function evenOrOdd(number) {
//     return number / 2 == 0 ? "Odd" : "Even";
// }

// Method : 2
const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

// Other Users Method
// const evenOrOdd = (number) => (number % 2 ? "Even" : "Odd");

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));
