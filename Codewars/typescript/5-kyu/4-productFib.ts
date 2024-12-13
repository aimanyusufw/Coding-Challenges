// Codewars 4
// Title :  Product of consecutive number
// Question :   Your function takes an integer (prod) and returns an array/tuple (check the function signature/sample tests for the return type in your language)
// Challange Url :  https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/typescript
// Level : 5kyu

// Method : 1
export const productFib = (prod: number): [number, number, boolean] => {
  let fib1 = 0;
  let fib2 = 1;
  while (fib1 * fib2 < prod) {
    const next = fib1 + fib2;
    fib1 = fib2;
    fib2 = next;
  }
  return [fib1, fib2, fib1 * fib2 === prod];
};

// Method : 2
// export const productFib = (prod: number): [number, number, boolean] => {
//   const nums = [0, 1];
//   while (prod > nums[0] * nums[1]) {
//     [nums[0], nums[1]] = [nums[1], nums[0] + nums[1]];
//   }
//   const [a, b] = nums;
//   return [a, b, a * b === prod];
// };

// Other Users Method
// export const productFib = (prod: number): [number, number, boolean] => {
//   let a = 0,
//     b = 1;
//   while (a * b < prod) {
//     b += a;
//     a = b - a;
//   }
//   return [a, b, a * b === prod];
// };
