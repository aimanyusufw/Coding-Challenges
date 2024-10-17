// Codewars 10
// Title : Find the party outlier
// Instructions : Write a method that takes the array as an argument and returns this "outlier" N.
// Challange Url : https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// Level : 6kyu

// Method : 1
function findOutlier(N) {
  // Declare classification numbers
  const even = [];
  const odd = [];

  // Classification numbers
  for (let i = 0; i < N.length; i++) {
    N[i] % 2 === 0 ? even.push(N[i]) : odd.push(N[i]);
  }

  //   Retunr the result
  return even.length > 1 ? odd[0] : even[0];
}

// Method : 2

// Other Users Method
// function findOutlier(int) {
//   var even = int.filter((a) => a % 2 == 0);
//   var odd = int.filter((a) => a % 2 !== 0);
//   return even.length == 1 ? even[0] : odd[0];
// }

// Result or debug
console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
