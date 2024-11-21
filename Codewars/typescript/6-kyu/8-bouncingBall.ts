// Codewars 8
// Title :  Bouncing balls
// Question :   A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
// Challange Url :  https://www.codewars.com/kata/5544c7a5cb454edb3c000047
// Level : 7kyu

// Method : 1
export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  let bounceCount = 0;
  while (h > window) {
    bounceCount++;
    h *= bounce;
    if (h > window) {
      bounceCount++;
    }
  }
  return bounceCount;
}

// Method : 2

// Other Users Method
// export function bouncingBall(
//   h: number,
//   bounce: number,
//   window: number
// ): number {
//   if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
//     return -1;
//   }
//   let bounceCount = 0;
//   while (h > window) {
//     bounceCount++;
//     h *= bounce;
//     if (h > window) {
//       bounceCount++;
//     }
//   }
//   return bounceCount;
// }
