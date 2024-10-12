// Codewars 3
// Title : Find the odd int
// Instructions : Given an array of integers, find the one that appears an odd number of times.
// Challange Url : https://www.codewars.com/kata/54da5a58ea159efa38000836
// Level : 6kyu

// Method : 1
function findOdd(A) {
  const numbers = {};
  for (let i = 0; i < A.length; i++) {
    if (numbers[A[i]] === undefined) {
      numbers[A[i]] = 1;
    }
    numbers[A[i]]++;
  }
  for (let key in numbers) {
    if (numbers[key] % 2 == 0) return parseInt(key);
  }
  return null;
}

// Method : 2
// const findOdd = (A) => A.reduce((acc, cur) => acc ^ cur);

// Other Users Method

// Result or debug
console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
