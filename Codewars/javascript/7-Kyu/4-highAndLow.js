// Codewars 4
// Title : Highest and Lowest
// Instructions : In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Challange Url : https://www.codewars.com/kata/554b4ac871d6813a03000035/train
// Level : 7kyu

// Method : 1
// function highAndLow(numbers) {
//   const arrayNumbers = numbers.split(" ").map((data) => parseInt(data));
//   const l = Math.min(...arrayNumbers);
//   const h = Math.max(...arrayNumbers);
//   return h + " " + l;
// }

// Method 2
const highAndLow = (n) =>
  Math.max(...n.split(" ").map(Number)) +
  " " +
  Math.min(...n.split(" ").map(Number));

// Other Users Method
// const highAndLow = (numbers) =>
//   `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;

// Result or debug
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
