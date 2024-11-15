// Codewars 1
// Title :  Find the unique number
// Question :   There is an array with some numbers. All numbers are equal except for one. Try to find it!
// Challange Url :  https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// Level : 7kyu

// Method : 1
export function findUniq(arr: number[]): number {
  const hashArray: Record<number, number> = {};
  let uniqueNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (hashArray[arr[i]] !== undefined) {
      hashArray[arr[i]]++;
    } else {
      hashArray[arr[i]] = 1;
    }
  }
  for (const key in hashArray) {
    if (hashArray[key] === 1) {
      uniqueNumber = Number(key);
    }
  }
  return uniqueNumber;
}

// Method : 2

// Other Users Method
// export function findUniq(arr: Array<number>): number {
//   var arr = arr.sort();
//   return arr[0] == arr[1] ? arr.pop() : arr[0];
// }
