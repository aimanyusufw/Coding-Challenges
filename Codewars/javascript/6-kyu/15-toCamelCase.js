// Codewars 15
// Title :
// Instructions :
// Challange Url :
// Level : 6kyu

// Method : 1
function toCamelCase(str) {
  if (str === "") return "";
  const strArray = str.replace(/[^a-zA-Z ]/g, " ").split(" ");
  const capitalizeArr = [];
  for (let i = 0; i < strArray.length; i++) {
    capitalizeArr.push(
      `${i == 0 ? strArray[i][0] : strArray[i][0].toUpperCase()}${strArray[
        i
      ].slice(1)}`
    );
  }
  return capitalizeArr.join("");
}

// Method : 2
const toCamelCase = (s) =>
  s
    .replace(/[^a-zA-Z]/g, " ")
    .split(" ")
    .map((a, i) => (i === 0 ? a : a[0].toUpperCase() + a.slice(1)))
    .join("");

// Other Users Method
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

// Result or debug
console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
