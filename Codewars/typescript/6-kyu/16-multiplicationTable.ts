// Codewars 16
// Title :  Multiplication Table
// Question :   Your task, is to create N×N multiplication table, of size provided in parameter.
// Challange Url :  https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/
// Level : 6kyu

// Method : 1
export function multiplicationTable(size: number): number[][] {
  const result: number[][] = [];
  for (let i = 1; i <= size; i++) {
    const num: number[] = [];
    for (let j = i; j < size * i + 1; j += i) {
      num.push(j);
    }
    result.push(num);
  }
  return result;
}

// Method : 2

// Other Users Method
// export function multiplicationTable(size: number): number[][] {
//   return [...Array(size)].map((_, i) =>
//     [...Array(size)].map((_, j) => (i + 1) * (j + 1))
//   );
// }
