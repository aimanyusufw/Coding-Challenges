// Codewars 16
// Title : Sum of two lowest positive number
// Instructions : Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// Challange Url : https://www.codewars.com/kata/558fc85d8fd1938afb000014/
// Level : 7kyu

// Method : 1
function sumTwoSmallestNumbers(n) {
  const smallestNumbers = [Infinity, Infinity];
  for (let i = 0; i < n.length; i++) {
    if (n[i] < smallestNumbers[0]) {
      smallestNumbers[1] = smallestNumbers[0];
      smallestNumbers[0] = n[i];
    } else if (n[i] < smallestNumbers[1]) {
      smallestNumbers[1] = n[i];
    }
  }
  return smallestNumbers[0] + smallestNumbers[1];
}

// Method : 2
// const sumTwoSmallestNumbers = (n) => {
//   return n
//     .sort((a, b) => a - b)
//     .slice(0, 2)
//     .reduce((acc, cur) => acc + cur);
// };

// Other Users Method

// Result or debug
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
