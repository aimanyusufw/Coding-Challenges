// Codewars 7
// Title :  Are they the "same"?
// Question :   Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
// Challange Url :  https://www.codewars.com/kata/550498447451fbbd7600041c
// Level : 7kyu

// Method : 1
export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 === null || a2 === null) return false;
  if (a1?.length !== a2?.length) return false;
  const squared = a1.map((n) => n ** 2);
  return (
    squared.sort((a, b) => a - b).toString() ===
    a2.sort((a, b) => a - b).toString()
  );
}

// Method : 2

// Other Users Method
// export function comp(a1: number[] | null, a2: number[] | null): boolean {
//   if (!(a1 && a2) || a1.length !== a2.length) return false;
//   return (
//     a1
//       .map((x) => x * x)
//       .sort()
//       .toString() === a2.sort().toString()
//   );
// }
