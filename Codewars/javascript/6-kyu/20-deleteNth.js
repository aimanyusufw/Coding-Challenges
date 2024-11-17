// Codewars 20
// Title :  Delete occurrences of an element if it occurs more than n times
// Instructions :   Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// Challange Url :  https://www.codewars.com/kata/554ca54ffa7d91b236000023
// Level : 6kyu

// Method : 1
// export function deleteNth(arr, n) {
//   const deleted = [];
//   let nAppear = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!nAppear[arr[i]]) {
//       deleted.push(arr[i]);
//       nAppear[arr[i]] = 1;
//     } else if (nAppear[arr[i]] && nAppear[arr[i]] < n) {
//       deleted.push(arr[i]);
//       nAppear[arr[i]] += 1;
//     }
//   }
//   return deleted;
// }

// Method : 2
export const deleteNth = (arr, n) => {
  const count = {};
  return arr.filter((item) => {
    count[item] = (count[item] || 0) + 1;
    return count[item] <= n;
  });
};

// Other Users Method
// const deleteNth = (a, x) => {
//     let m = {};
//     return a.filter( v => (m[v] = m[v]+1||1) <= x );
//   }
