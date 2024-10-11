// Codewars 2
// Title : Who likes it?
// Instructions : Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// Challange Url : https://www.codewars.com/kata/5266876b8f4bf2da9b000362
// Level : 6kyu

// Method : 1
// function likes(names) {
//   const repeatString = ["likes this", "like this"];
//   let finalString = "";
//   switch (names.length) {
//     case 0:
//       finalString = "no one " + repeatString[0];
//       break;
//     case 1:
//       finalString = names[0] + " " + repeatString[0];
//       break;
//     case 2:
//       finalString = names[0] + " and " + names[1] + " " + repeatString[1];
//       break;
//     case 3:
//       finalString =
//         names[0] + ", " + names[1] + " and " + names[2] + " " + repeatString[1];
//       break;
//     default:
//       finalString = `${names[0]}, ${names[1]} and ${names.length - 2} others ${
//         repeatString[1]
//       }`;
//   }
//   return finalString;
// }

// Method 2
const likes = (names) => {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

// Other Users Method
function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

// Result or debug
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Steven"]));
