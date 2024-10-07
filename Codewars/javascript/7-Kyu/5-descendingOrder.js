// Codewars 5
// Title : Descending Order
// Instructions : Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Challange Url : https://www.codewars.com/kata/5467e4d82edf8bbf40000155/
// Level : 7kyu

// Method : 1
// function descendingOrder(n) {
//   const arrayNumbers = n.toString().split("").map(Number);
//   const shortArray = arrayNumbers.sort((a, b) => a - b).reverse();
//   return +shortArray.join("");
// }

// Method 2
const descendingOrder = (n) =>
  +n
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => a - b)
    .reverse()
    .join("");

// Other Users Method
function descendingOrder(n) {
  return +(n + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
}

// Result or debug
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
