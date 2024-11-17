// Codewars 3
// Title :  Build Tower
// Question :   Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// Challange Url :  https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// Level : 7kyu

// Method : 1
// export const towerBuilder = (nFloors: number): string[] => {
//   const result = [];
//   let temp = 1;
//   for (let i = 0; i < nFloors; i++) {
//     const n = nFloors * 2 - temp - 1;
//     result.push(" ".repeat(n / 2) + "*".repeat(temp) + " ".repeat(n / 2));
//     temp += 2;
//   }
//   return result;
// };

// Method : 2
export const towerBuilder = (nF: number): string[] => {
  let temp = 1;
  return [...Array(nF)].map((d, i) => {
    const n = nF * 2 - temp - 1;
    const string = " ".repeat(n / 2) + "*".repeat(temp) + " ".repeat(n / 2);
    temp += 2;
    return string;
  });
};

// Other Users Method
// export const towerBuilder = (nFloors: number): string[] => {
//   return Array.from({ length: nFloors }, (_, index) => {
//     const spaces = " ".repeat(nFloors - 1 - index);
//     return `${spaces}${"*".repeat(index * 2 + 1)}${spaces}`;
//   });
// };
