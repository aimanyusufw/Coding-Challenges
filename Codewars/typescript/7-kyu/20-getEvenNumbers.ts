// Codewars 20
// Title :  JavaScript Array fillter
// Question :   The solution would work like the following
// Challange Url :  https://www.codewars.com/kata/514a6336889283a3d2000001
// Level : 7kyu

// Method : 1
// export const getEvenNumbers = (numbersArray: number[]): number[] => {
//   const evenNumbers = [];
//   for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 2 === 0) {
//       evenNumbers.push(numbersArray[i]);
//     }
//   }
//   return evenNumbers;
// };

// Method : 2
export const getEvenNumbers = (nA: number[]): number[] =>
  nA.filter((d) => d % 2 === 0);

// Other Users Method
// export const getEvenNumbers = (numbersArray: number[]): number[] =>
//   numbersArray.filter((el) => el % 2 === 0);
