// Codewars 5
// Title :  Build a pile of cubes
// Question :   Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.
// Challange Url :  https://www.codewars.com/kata/5592e3bd57b64d00f3000047
// Level : 7kyu

// Method : 1
// export function findNb(m: number): number {
//   let volume = 0;
//   for (let i = 0; volume < m; i++) {
//     volume += i ** 3;
//     if (volume === m) return i;
//   }
//   return -1;
// }

// Method : 2
export function findNb(m: number): number {
  const sqrtM = Math.sqrt(m);
  if (!Number.isInteger(sqrtM)) return -1;
  let n = Math.floor((-1 + Math.sqrt(1 + 8 * sqrtM)) / 2);
  return ((n * (n + 1)) / 2) ** 2 === m ? n : -1;
}

// Other Users Method
// export function findNb(m: number): number {
//   var n = 0;
//   while (m > 0) m -= Math.pow(++n, 3);
//   return m ? -1 : n;
// }
