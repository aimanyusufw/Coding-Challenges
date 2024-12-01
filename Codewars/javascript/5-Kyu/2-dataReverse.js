// Codewars 2
// Title :  Data reverse
// Instructions :   A stream of data is received and needs to be reversed.
// Challange Url :  https://www.codewars.com/kata/569d488d61b812a0f7000015
// Level : 5kyu

// Method : 1
export function dataReverse(data) {
  const result = [];
  for (let i = 0; i < data.length; i += 8) {
    result.push(data.slice(i, i + 8));
  }
  return result.reverse().join().split(",").map(Number);
}

// Method 2

// Other Users Method
// const dataReverse = (data) => {
//   const bytes = [];
//   for (let i = 0; i < data.length; i += 8) {
//     bytes.unshift(...data.slice(i, i + 8));
//   }
//   return bytes;
// };
