// Codewars 21
// Title :  Maximum Length Difference
// Question :   You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z.
// Challange Url :  https://www.codewars.com/kata/5663f5305102699bad000056/
// Level : 7kyu

// Method : 1
export const mxdiflg = (a1: string[], a2: string[]): number => {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  const len_a1 = a1.map((s) => s.length).sort((a, b) => a - b);
  const len_a2 = a2.map((s) => s.length).sort((a, b) => a - b);

  return Math.max(
    Math.abs(len_a1[0] - len_a2[a2.length - 1]),
    Math.abs(len_a2[0] - len_a1[a1.length - 1])
  );
};

// Method : 2

// Other Users Method
// export const mxdiflg = (a1:string[], a2:string[]): number => {
//     if (!a1.length || !a2.length) return -1
//     a1 = a1.sort((a, b) => a.length - b.length)
//     a2 = a2.sort((a, b) => a.length - b.length)
//     return Math.max(
//       Math.abs(a1[a1.length - 1].length - a2[0].length),
//       Math.abs(a2[a2.length - 1].length - a1[0].length)
//     )
//   }
