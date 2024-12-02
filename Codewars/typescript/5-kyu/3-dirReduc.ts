// Codewars 3
// Title :  Direction Reducation
// Question :   Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
// Challange Url :  https://www.codewars.com/kata/550f22f4d758534c1100025a
// Level : 6kyu

// Method : 1
export function dirReduc(arr: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const last = result[result.length - 1];
    if (
      (arr[i] === "NORTH" && last === "SOUTH") ||
      (arr[i] === "SOUTH" && last === "NORTH") ||
      (arr[i] === "WEST" && last === "EAST") ||
      (arr[i] === "EAST" && last === "WEST")
    ) {
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// Method : 2

// Other Users Method
// export function dirReduc(arr: string[]): string[] {
//   const opposites: { [item: string]: string } = {
//     SOUTH: "NORTH",
//     NORTH: "SOUTH",
//     WEST: "EAST",
//     EAST: "WEST",
//   };
//   let stack = [];
//   for (let dir of arr) {
//     stack[stack.length - 1] === opposites[dir] ? stack.pop() : stack.push(dir);
//   }
//   return stack;
// }
