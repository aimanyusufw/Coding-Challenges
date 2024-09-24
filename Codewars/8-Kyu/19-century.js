// Codewars 19
// Title : Century From Year
// Instructions : The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Challange Url : https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// Level : 8kyu

// Method : 1
// function century(year) {
//   return Math.ceil(year / 100);
// }

// Method : 2
const century = (y) => Math.ceil(y / 100);

// Other Users Method
// function century(year) {
//   if (year <= 100) {
//     return 1;
//   }

//   let cen = parseInt(year / 100);
//   let rem = year % 100;

//   return rem === 0 ? cen : cen + 1;
// }

// Result or debug
console.log(century(1701));
console.log(century(1400));
console.log(century(89));
console.log(century(890));
console.log(century(1900));
