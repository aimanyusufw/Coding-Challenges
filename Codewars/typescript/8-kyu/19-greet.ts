// Codewars 19
// Title :  Jenny's secret message
// Question :   Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different
// Challange Url :  https://www.codewars.com/kata/55225023e1be1ec8bc000390
// Level : 8kyu

// Method : 1
// export function greet(name: string) {
//   if (name === "Johnny") return "Hello, my love!";
//   return `Hello, ${name}!`;
// }

// Method : 2
export const greet = (name: string): string =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

// Other Users Method
