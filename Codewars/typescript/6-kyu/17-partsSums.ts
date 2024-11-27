// Codewars 17
// Title :  Sum of parts
// Question :   Let us consider this example (array written in general format):
// Challange Url :  https://www.codewars.com/kata/5ce399e0047a45001c853c2b
// Level : 6kyu

// // Method : 1
export function partsSums(ls: number[]): number[] {
  const result: number[] = new Array(ls.length + 1);
  let totalSum = ls.reduce((a, b) => a + b, 0); // Hitung total sum awal
  result[0] = totalSum;

  for (let i = 0; i < ls.length; i++) {
    totalSum -= ls[i];
    result[i + 1] = totalSum;
  }

  return result;
}

// Method : 2
// export function partsSums(ls: number[]): number[] {
//   const result = [];
//   for (let i = 0; i < ls.length; i++) {
//     const sum = ls.slice(i).reduce((a, b) => a + b);
//     result.push(sum);
//   }
//   return [...result, 0];
// }

// Other Users Method
// export function partsSums(ls: number[]): number[] {
//   let total = ls.reduce((acc, cur) => acc + cur, 0);
//   return [...[total], ...ls.map((num) => (total -= num))];
// }
