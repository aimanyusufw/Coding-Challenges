// Codewars 6
// Title :  Perimeter of squares in a rectangle
// Question :   Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing: alternative text
// Challange Url :  https://www.codewars.com/kata/559a28007caad2ac4e000083/train/typescript
// Level : 5kyu

// Method : 1
export function perimeter(n: number): number {
  const fib = [1, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib.reduce((a, b) => a + b) * 4;
}

// Method : 2

// Other Users Method
// export const perimeter = (n: number): number => {
//   let fibSum = 0;
//   let prevFib = 0;
//   let curFib = 1;
//   for (let i = 0; i <= n; i++) {
//     fibSum += curFib;
//     [prevFib, curFib] = [curFib, prevFib + curFib];
//   }
//   return fibSum * 4;
// };
