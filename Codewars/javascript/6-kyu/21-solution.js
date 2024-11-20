// Codewars 21
// Title :  Break camelCase
// Instructions :   Complete the solution so that the function will break up camel casing, using a space between words.
// Challange Url :  https://www.codewars.com/kata/5208f99aee097e6552000148
// Level : 6kyu

// Method : 1
export function solution(string) {
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      finalString += " " + string[i];
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}

// Method : 2
// export function solution(string) {
//   return string.split(/(?=[A-Z])/).join(" ");
// }

// Other Users Method
// const solution = (string) => string.replace(/[A-Z]/g, " $&");
