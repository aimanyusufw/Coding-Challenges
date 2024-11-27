// Codewars 15
// Title :  Make the deadfish swim
// Question :   Create a parser to interpret and execute the Deadfish language.
// Challange Url :  https://www.codewars.com/kata/51e0007c1f9378fa810002a9
// Level : 6kyu

// Method : 1
// export function parse(data: string): number[] {
//   let result: number[] = [];
//   let tempRes = 0;
//   for (let i = 0; i < data.length; i++) {
//     switch (data[i]) {
//       case "i":
//         tempRes++;
//         break;
//       case "d":
//         tempRes--;
//         break;
//       case "s":
//         tempRes *= tempRes;
//         break;
//       case "o":
//         result.push(tempRes);
//         break;
//       default:
//         break;
//     }
//   }
//   return result;
// }

// Method : 2
export function parse(data: string): number[] {
  let result = [];
  let tempRes = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      tempRes++;
    } else if (data[i] === "d") {
      tempRes--;
    } else if (data[i] === "s") {
      tempRes *= tempRes;
    } else if (data[i] === "o") {
      result.push(tempRes);
    }
  }
  return result;
}

// Other Users Method
// export function parse(data: string): number[] {
//   var result: number[] = [];
//   var current = 0;

//   data.split("").map((c) => {
//     switch (c) {
//       case "i":
//         current++;
//         break;
//       case "d":
//         current--;
//         break;
//       case "s":
//         current = current ** 2;
//         break;
//       case "o":
//         result.push(current);
//         break;
//     }
//   });

//   return result;
// }
