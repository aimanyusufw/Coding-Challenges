// Codewars 14
// Title : Recatangel to square
// Question :   The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
// Challange Url :  https://www.codewars.com/kata/55466989aeecab5aac00003e
// Level : 7kyu

// Method : 1
export const sqInRect = (l: number, w: number): null | number[] => {
  if (l == w) return null;
  const square = [];
  while (l > 0 && w > 0) {
    const side = Math.min(l, w);
    square.push(side);
    if (w >= l) {
      w -= side;
    } else {
      l -= side;
    }
  }
  return square;
};

// Method : 2

// Other Users Method
// export function sqInRect(a: number, b: number): null | number[] {
//   if (a == b) return null;
//   if (a > b) [a, b] = [b, a];
//   const out: number[] = [];
//   while (a) {
//     out.push(...Array((b / a) | 0).fill(a));
//     [a, b] = [b % a, a];
//   }
//   return out;
// }
