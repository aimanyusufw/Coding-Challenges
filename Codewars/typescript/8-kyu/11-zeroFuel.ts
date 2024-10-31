// Codewars 11
// Title :
// Question :
// Challange Url :
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
