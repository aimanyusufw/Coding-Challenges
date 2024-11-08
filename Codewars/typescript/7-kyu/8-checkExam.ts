// Codewars 8
// Title :  Check the exam
// Question :   The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer,
// Challange Url :  https://www.codewars.com/kata/5a3dd29055519e23ec000074
// Level : 7kyu

// Method : 1
// export function checkExam(array1: string[], array2: string[]): number {
//   let points = 0;
//   for (let i = 0; i < array1.length; i++) {
//     if (array2[i] === array1[i]) {
//       points += 4;
//     } else if (array2[i] == "") {
//       continue;
//     } else {
//       points -= 1;
//     }
//   }

//   return points > 0 ? points : 0;
// }

// Method : 2
export const checkExam = (a1: string[], a2: string[]): number => {
  let points = 0;
  a1.map((d, i) =>
    d === a2[i] ? (points += 4) : a2[i] === "" ? (points += 0) : (points -= 1)
  );
  return points > 0 ? points : 0;
};

// Other Users Method
// export function checkExam(array1: string[], array2: string[]): number {
//   return Math.max(
//     0,
//     array2.reduce((a, b, i) => a + (b == "" ? 0 : b === array1[i] ? 4 : -1), 0)
//   );
// }
