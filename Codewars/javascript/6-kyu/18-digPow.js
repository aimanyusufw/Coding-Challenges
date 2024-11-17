// Codewars 18
// Title :  Playing with digits
// Instructions : Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// Challange Url :  https://www.codewars.com/kata/5552101f47fc5178b1000050
// Level : 6kyu

// Method : 1
export function digPow(n, p) {
  const arrayN = n.toString().split("").map(Number);
  let sum = 0;
  for (let i = 0; i < arrayN.length; i++) {
    sum += arrayN[i] ** p;
    p++;
  }
  return sum % n === 0 ? sum / n : -1;
}

// Method : 2

// Other Users Method
// function digPow(n, p) {
//   var x = String(n)
//     .split("")
//     .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
//   return x % n ? -1 : x / n;
// }
