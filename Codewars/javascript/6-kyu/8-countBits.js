// Codewars 8
// Title : Bit Counting
// Instructions : Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Challange Url : https://www.codewars.com/kata/526571aae218b8ee490006f4
// Level : 6kyu

// Method : 1
// var countBits = function (n) {
//   const binner = [];
//   let binnerAmount = 0;
//   for (let i = n; i !== 0; i = Math.floor(i / 2)) {
//     binner.push(i % 2);
//   }
//   for (let i = 0; i < binner.length; i++) {
//     binnerAmount += binner[i];
//   }
//   return binnerAmount;
// };

// Method : 2
const countBits = (n) => {
  const binner = [0];
  for (let i = n; i !== 0; i = Math.floor(i / 2)) {
    binner.push(i % 2);
  }
  return binner.reduce((a, c) => a + c);
};

// Other Users Method
// countBits = (n) => n.toString(2).split("0").join("").length;

// Result or debug
console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(999281));
