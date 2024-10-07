// Codewars 15
// Title : Creadit Card Mask
// Instructions : Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Challange Url : https://www.codewars.com/kata/5412509bd436bd33920011bc/
// Level : 7kyu

// Method : 1
// function maskify(cc) {
//   if (cc.length <= 4) return cc;
//   let maskedCC = "";
//   for (let i = 0; i < cc.length; i++) {
//     maskedCC += cc.length - (i + 1) >= 4 ? "#" : cc[i];
//   }
//   return maskedCC;
// }

// Method 2
// const maskify = (cc) =>
//   cc
//     .split("")
//     .map((data, i) => (cc.length - (i + 1) >= 4 ? "#" : data))
//     .join("");

// Other Users Method
const maskify = (cc) => cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);

// Result or debug
console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
console.log(maskify("1111"));
