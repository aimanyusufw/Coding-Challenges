// Codewars 9
// Title : Mumbling
// Instructions : This time no story, no theory. The examples below show you how to write function accum:
// Challange Url : https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// Level : 7kyu

// Method : 1
// function accum(s) {
//   const arrayString = s.split("");
//   let resutl = [];

//   for (let i = 0; i < arrayString.length; i++) {
//     resutl.push(
//       arrayString[i].toUpperCase() + arrayString[i].repeat(i).toLowerCase()
//     );
//   }

//   return resutl.join("-");
// }

// Method 2
// const accum = (s) =>
//   s
//     .split("")
//     .map((data, i) => data.toUpperCase() + data.repeat(i).toLowerCase())
//     .join("-");

// Other Users Method
const accum = (s) =>
  [...s]
    .map((val, idx) => val.toUpperCase() + val.toLowerCase().repeat(idx))
    .join(`-`);

// Result or debug
console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
