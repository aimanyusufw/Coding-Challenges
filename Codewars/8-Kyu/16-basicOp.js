// Codewars 16
// Title : Basic Mathematical Operations
// Instructions : Your task is to create a function that does four basic mathematical operations.
// Challange Url : https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// Level : 8kyu

// Method : 1
// function basicOp(operation, value1, value2) {
//   return eval(`${value1} ${operation} ${value2}`);
// }

// Method : 2
const basicOp = (o, v1, v2) => eval(v1 + o + v2);

// Other Users Method
// let basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

// Result or debug
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 8, 9));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
