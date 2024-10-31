// Codewars 11
// Title : Will you make it
// Question :   Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Challange Url :  https://www.codewars.com/kata/5861d28f124b35723e00005e
// Level : 8kyu

// Method : 1
// export const zeroFuel = (
//   distance: number,
//   mpg: number,
//   fuelLeft: number
// ): boolean => {
//   let isPosibble = false;
//   const possibleDistance = mpg * fuelLeft;
//   if (possibleDistance >= distance) {
//     isPosibble = true;
//   }
//   return isPosibble;
// };

// Method : 2
export const zeroFuel = (d: number, mpg: number, fl: number): boolean =>
  mpg * fl >= d;

// Other Users Method
// export const zeroFuel = (
//   distance: number,
//   mpg: number,
//   fuelLeft: number
// ): boolean => {
//   const distanceParcourable: number = mpg * fuelLeft;

//   return distanceParcourable >= distance;
// };
