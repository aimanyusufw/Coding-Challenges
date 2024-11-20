// Codewars 6
// Title :  Valid braces
// Question :   Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
// Challange Url :  https://www.codewars.com/kata/5277c8a221e209d3f6000b56
// Level : 7kyu

// Method : 1
// export function validBraces(braces: string) {
//   const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
//   const stack = [];
//   for (const char of braces) {
//     if (Object.values(pairs).includes(char)) {
//       stack.push(char);
//     } else if (Object.keys(pairs).includes(char)) {
//       if (!stack.length || stack[stack.length - 1] !== pairs[char]) {
//         return false;
//       }
//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// }

// Method : 2

// Other Users Method
export function validBraces(braces: string): boolean {
  [...braces].forEach(
    () =>
      (braces = braces.replace("()", "").replace("{}", "").replace("[]", ""))
  );
  return !braces;
}
