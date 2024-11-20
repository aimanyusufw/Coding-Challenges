// Codewars 22
// Title : Consecutive String
// Instructions :   You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// Challange Url :  https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// Level : 6kyu

// Method : 1
export function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let longest = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    const string = strarr.slice(i, i + k).join("");
    if (string.length > longest.length) {
      longest = string;
    }
  }
  return longest;
}

// Method : 2

// Other Users Method
// function longestConsec(strarr, k) {
//     if( strarr.length==0 || k> strarr.length || k <1 ) return "";
//     let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
//         i = lens.indexOf( Math.max(...lens) );
//     return strarr.slice(i,i+k).join('')
//   }
