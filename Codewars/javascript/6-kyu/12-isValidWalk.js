// Codewars 12
// Title : Take a ten minutes walk
// Instructions : so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Challange Url : https://www.codewars.com/kata/54da539698b8a2ad76000228
// Level : 6kyu

// Method : 1
// function isValidWalk(walk) {
//   let directions = { w: 0, s: 0, n: 0, e: 0 };
//   for (let i = 0; i < walk.length; i++) {
//     directions[walk[i]]++;
//   }
//   let isBackToStart =
//     directions.n === directions.s && directions.w === directions.e;
//   return walk.length === 10 && isBackToStart;
// }

// Method : 2
const isValidWalk = (w) =>
  w.length === 10 &&
  w.filter((l) => l === "s").length === w.filter((l) => l === "n").length &&
  w.filter((l) => l === "w").length === w.filter((l) => l === "e").length;

// Other Users Method
// function isValidWalk(walk) {
//   var res = { n: 0, w: 0, s: 0, e: 0 };
//   walk.forEach((c) => res[c]++);
//   return walk.length === 10 && res.n == res.s && res.e == res.w;
// }

// Result or debug
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
