// Codewars 19
// Title :  Reverse or rotate
// Question :   The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
// Challange Url :  https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
// Level : 6kyu

// Method : 1
export function revRot(s: string, sz: number): string {
  if (sz <= 0 || s == "" || sz > s.length) return "";
  const chunks = [];
  for (let i = 0; i < s.length; i += sz) {
    if (i + sz <= s.length) {
      chunks.push(s.slice(i, i + sz));
    }
  }
  return chunks
    .map((chunk) => {
      const sum = chunk
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);
      if (sum % 2 === 0) {
        return chunk.split("").reverse().join("");
      } else {
        return chunk.slice(1) + chunk[0];
      }
    })
    .join("");
}

// Method : 2

// Other Users Method
// export function revRot(s: string, sz: number): string {
//   return (
//     s
//       .match(new RegExp(`.{${sz}}`, "g"))
//       ?.map((block) => {
//         const isDiv = !(
//           block.split("").reduce((sum, n) => sum + Math.pow(+n, 3), 0) % 2
//         );
//         return isDiv
//           ? block.split("").reverse().join("")
//           : block.slice(1) + block[0];
//       })
//       ?.join("") || ""
//   );
// }
