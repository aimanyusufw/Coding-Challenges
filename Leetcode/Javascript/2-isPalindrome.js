// Leetcode 2
// Title : Palindrome Number
// Instructions : Given an integer x, return true if x is a palindrome, and false otherwise.
// Challange Url : https://leetcode.com/problems/two-sum/
// Level : Easy

// Method : 1
const isPalindrome = (x) =>
  x.toString() === x.toString().split("").reverse().join("");

// Other Users Method

// Result or debug
console.log(isPalindrome(121));
console.log(isPalindrome(423));
console.log(isPalindrome(98589));
