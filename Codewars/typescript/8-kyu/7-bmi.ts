// Codewars 7
// Title :  Calculate BMI
// Question :   Write function bmi that calculates body mass index (bmi = weight / height2).
// Challange Url :  https://www.codewars.com/kata/57a429e253ba3381850000fb
// Level : 8kyu

// Method : 1
// export function bmi(weight: number, height: number): string {
//   const bmi: number = weight / height ** 2;

//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// Method : 2
export function bmi(weight: number, height: number): string {
  const $ = weight / height ** 2;
  return $ <= 18.5
    ? "Underweight"
    : $ <= 25.0
    ? "Normal"
    : $ <= 30.0
    ? "Overweight"
    : "Obese";
}

// Other Users Method
// export const bmi = (weight: number, height: number, bmi: number = 0): string =>
//   (bmi = weight / height ** 2) > 18.5
//     ? bmi > 25
//       ? bmi > 30
//         ? "Obese"
//         : "Overweight"
//       : "Normal"
// : "Underweight";
