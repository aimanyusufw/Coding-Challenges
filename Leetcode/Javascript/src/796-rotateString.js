// Leetcode 796
// Title : Reverse String
// Instructions : Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// Challange Url : https://leetcode.com/problems/rotate-string/
// Level : Easy

// Method : 1
// function rotateString(s, goal) {
//   let isShift = false;
//   const mergeS = s + s;
//   if (mergeS.includes(goal)) {
//     isShift = true;
//   }
//   return isShift;
// }

// Method 2
const rotateString = (s, goal) =>
  goal.length >= s.length ? `${s + s}`.includes(goal) : false;

// Other Users Method
function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  return (s + s).includes(goal);
}

// Result or debug
console.log(rotateString("abcde", "cdeab"));
