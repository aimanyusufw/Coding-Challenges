// Codewars 5
// Title :  Weight for weight
// Question :   Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// Challange Url :  https://www.codewars.com/kata/55c6126177c9441a570000cc/train/typescript
// Level : 5kyu

// Method : 1
// export function orderWeight(str: string): string {
//   const stringArray = str.split(" ");
//   const reduceString = stringArray.map((n) =>
//     n
//       .split("")
//       .map(Number)
//       .reduce((a, b) => a + b, 0)
//   );
//   for (let i = 0; i < stringArray.length; i++) {
//     for (let j = 0; j < stringArray.length - i - 1; j++) {
//       if (
//         reduceString[j] > reduceString[j + 1] ||
//         (reduceString[j] === reduceString[j + 1] &&
//           stringArray[j] > stringArray[j + 1])
//       ) {
//         [reduceString[j], reduceString[j + 1]] = [
//           reduceString[j + 1],
//           reduceString[j],
//         ];
//         [stringArray[j], stringArray[j + 1]] = [
//           stringArray[j + 1],
//           stringArray[j],
//         ];
//       }
//     }
//   }

//   return stringArray.join(" ");
// }

// Method : 2
export const orderWeight = (s: string): string => {
  return s
    .split(" ")
    .sort((a, b) => {
      const weightA = a
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);
      const weightB = b
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0);

      if (weightA !== weightB) {
        return weightA - weightB;
      }

      return a.localeCompare(b);
    })
    .join(" ");
};

// Other Users Method
// export function orderWeight(s: string): string {
//   function weight(a: string): number {
//     return a.split("").reduce((sum, digit) => sum + +digit, 0);
//   }

//   function compare(a: string, b: string): number {
//     let weightDiff = weight(a) - weight(b);
//     return weightDiff ? weightDiff : a > b ? 1 : -1;
//   }

//   return s.split(" ").sort(compare).join(" ");
// }
