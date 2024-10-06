// Codewars 12
// Title : Categorize new member
// Instructions : Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Challange Url : https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
// Level : 7kyu

// Method : 1
// function openOrSenior(data) {
//   const result = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] > 7) {
//       result.push("Senior");
//     } else {
//       result.push("Open");
//     }
//   }
//   return result;
// }

// Method : 2
const openOrSenior = (data) =>
  data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );

// Other Users Method

// Result or debug
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
