// Codewars 7
// Title :  Integers : Rcreations One
// Question :   Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
// Challange Url :  https://www.codewars.com/kata/55aa075506463dac6600010d/train/typescript
// Level : 5kyu

// Method : 1
export function listSquared(m: number, n: number): number[][] {
  const result: number[][] = [];

  function sumSquareDevisior(num: number): number {
    let sum = 0;
    for (let i = 0; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        const devisor1 = i;
        const devisor2 = num / i;

        sum += devisor1 ** 2;
        if (devisor1 !== devisor2) {
          sum += devisor2 ** 2;
        }
      }
    }
    return sum;
  }

  for (let i = m; i < n; i++) {
    const sum = sumSquareDevisior(i);

    if (Number.isInteger(Math.sqrt(sum))) {
      result.push([i, sum]);
    }
  }

  return result;
}

// Method : 2

// Other Users Method
// export function listSquared(m: number, n: number): number[][] {
//   function getDivisorsSquaredSum(p: number): number {
//     let divisorsSquaredSum = 0;
//     const sqrtP = Math.sqrt(p);

//     for (let i = 1; i <= sqrtP; i++) {
//       if (p % i === 0) {
//         divisorsSquaredSum += i ** 2;
//         const complement = p / i;
//         if (i !== complement) divisorsSquaredSum += complement ** 2;
//       }
//     }
//     return divisorsSquaredSum;
//   }

//   const list: number[][] = [];

//   for (let i = m; i <= n; i++) {
//     const divisorsSquaredSum = getDivisorsSquaredSum(i);
//     if (Number.isInteger(Math.sqrt(divisorsSquaredSum)))
//       list.push([i, divisorsSquaredSum]);
//   }

//   return list;
// }
