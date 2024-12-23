// Codewars 3
// Title :  Scramblies
// Instructions :   Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Challange Url :  https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
// Level : 5kyu

// Method : 1
export function scramble(str1, str2) {
  const charCount = {};
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str2) {
    if (!charCount[char] || charCount[char] <= 0) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

// Method 2

// Other Users Method
// export function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((arr, cur) => {
//     arr[cur] ? arr[cur]++ : (arr[cur] = 1);
//     return arr;
//   }, {});
//   return str2.split("").every((character) => --occurences[character] >= 0);
// }
