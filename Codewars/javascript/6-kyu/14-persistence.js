// Codewars 1
// Title : Presistent bugger
// Instructions : Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// Challange Url : https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
// Level : 6kyu

// Method : 1
function persistence(num) {
  if (num < 10) return 0;
  let final_digit = num;
  let total_try = 0;
  while (final_digit >= 10) {
    final_digit = final_digit
      .toString()
      .split("")
      .map(Number)
      .reduce((a, c) => a * c);
    total_try++;
  }

  return total_try;
}

// Method : 2

// Other Users Method
function persistence(num, cnt = 0) {
  let arrayNum = num.toString().split("");
  return arrayNum.length === 1
    ? cnt
    : persistence(
        arrayNum.reduce((x, y) => x * y),
        ++cnt
      );
}

// Result or debug
console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
