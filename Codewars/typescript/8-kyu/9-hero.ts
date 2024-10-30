// Codewars 9
// Title :  Is he gonna survive
// Question :   Return true if yes, false otherwise :)
// Challange Url :  https://www.codewars.com/kata/59ca8246d751df55cc00014c
// Level : 8kyu

// Method : 1
// export function hero(bullets: number, dragons: number): boolean {
//   const bulletNeeded = dragons * 2;
//   const isHeSurvive = bullets >= bulletNeeded;
//   return isHeSurvive;
// }

// Method : 2
export const hero = (b: number, d: number) => b >= d * 2;

// Other Users Method
// export function hero(bullets: number, dragons: number): boolean {
//   return bullets / dragons >= 2;
// }
