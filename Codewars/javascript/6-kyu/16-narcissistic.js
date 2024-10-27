// Codewars 16
// Title : Does my number look big in this?
// Instructions : Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
// Challange Url : https://www.codewars.com/kata/5287e858c6b5a9678200083c
// Level : 6kyu

// Method : 1
function narcissistic(value) {
  const arrNumber = value.toString().split("").map(Number);
  let sumArray = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    sumArray = sumArray + arrNumber[i] ** arrNumber.length;
  }
  return sumArray === value;
}

// Method : 2
const narcissistic = (v) =>
  Array.from(String(v), Number).reduce(
    (a, c) => a + c ** v.toString().length,
    0
  ) === v;

// Other Users Method
function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function (p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}

// Result or debug
console.log(narcissistic(7));
console.log(narcissistic(153));
console.log(narcissistic(122));
console.log(narcissistic(487));
console.log(narcissistic(407));
