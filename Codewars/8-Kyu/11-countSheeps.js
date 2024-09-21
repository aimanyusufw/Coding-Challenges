// Codewars 8
// Title : Counting sheep...
// Instructions : Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Challange Url : https://www.codewars.com/kata/54edbc7200b811e956000556
// Level : 8kyu

// Method : 1
// function countSheeps(sheep) {
//   let sheepsAmount = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] === true) {
//       sheepsAmount++;
//     }
//   }
//   return sheepsAmount;
// }

// Method : 2
// const countSheeps = (sheep) => sheep.filter((s) => s === true).length;

// Other Users Method
let countSheeps = (x) => x.filter((s) => s).length;

// Result ot debug
console.log(countSheeps([]));
console.log(countSheeps([undefined]));
console.log(countSheeps([null]));
console.log(countSheeps([false]));
console.log(countSheeps([true]));
console.log(countSheeps([undefined, null, false, true]));
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
