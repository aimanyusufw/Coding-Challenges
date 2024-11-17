// Codewars 19
// Title :  Short the odd
// Instructions :   Sort the odd
// Challange Url :  https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
// Level : 6kyu

// Method : 1
// export function sortArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i + 1; j++) {
//       for (let k = j + 1; k < array.length - j + 1; k++) {
//         if (array[j] % 2 !== 0 && array[k] % 2 !== 0) {
//           if (array[j] > array[k]) {
//             const temp = array[k];
//             array[k] = array[j];
//             array[j] = temp;
//           }
//         }
//       }
//     }
//   }
//   return array;
// }

// Method : 2
export const sortArray = (array) => {
  let oddNums = [];
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNums.push(array[i]);
    } else {
      evenNumbers.push({ value: array[i], index: i });
    }
  }
  const sorted = oddNums.sort((a, b) => a - b);
  for (let i = 0; i < evenNumbers.length; i++) {
    sorted.splice(evenNumbers[i].index, 0, evenNumbers[i].value);
  }
  return sorted;
};

// Other Users Method
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }
