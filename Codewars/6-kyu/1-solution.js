// Codewars 1
// Title : Multiples of 3 or 5
// Instructions : Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Challange Url : https://www.codewars.com/kata/514b92a657cdc65150000006
// Level : 7kyu

// Method : 1
// function solution(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   const multiples3 = [];
//   const multiples5 = [];
//   for (let i = 0; i < n; i++) {
//     if (i % 3 === 0) {
//       multiples3.push(i);
//     }
//     if (i % 5 === 0) {
//       multiples5.push(i);
//     }
//   }
//   const multiples = new Set([...multiples3, ...multiples5]);
//   return [...multiples].reduce((a, c) => a + c);
// }

// Method 2

// Other Users Method
const solution = (n) =>
  n >= 0
    ? Array.from({ length: n }, (_, i) =>
        i % 3 == 0 || i % 5 == 0 ? i : 0
      ).reduce((x, y) => x + y)
    : 0;

// Result or debug
console.log(solution(10));
console.log(solution(24));
