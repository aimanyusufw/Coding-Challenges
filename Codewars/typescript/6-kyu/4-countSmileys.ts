// Codewars 4
// Title :  Count the smiley faces!
// Question :   Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Challange Url :  https://www.codewars.com/kata/583203e6eb35d7980400002a
// Level : 7kyu

// Method : 1
// export function countSmileys(arr: string[]): number {
//   const smileyFaces = {
//     face: [":", ";"],
//     nose: ["-", "~"],
//     smile: [")", "D"],
//   };
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i].length === 2 &&
//       smileyFaces.face.includes(arr[i][0]) &&
//       smileyFaces.smile.includes(arr[i][1])
//     ) {
//       count++;
//     } else if (
//       smileyFaces.face.includes(arr[i][0]) &&
//       smileyFaces.nose.includes(arr[i][1]) &&
//       smileyFaces.smile.includes(arr[i][2])
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// Method : 2
export function countSmileys(arr: string[]): number {
  const faces = [":", ";"];
  const noses = ["-", "~"];
  const smiles = [")", "D"];

  return arr.filter(
    (face) =>
      (face.length === 2 &&
        faces.includes(face[0]) &&
        smiles.includes(face[1])) ||
      (face.length === 3 &&
        faces.includes(face[0]) &&
        noses.includes(face[1]) &&
        smiles.includes(face[2]))
  ).length;
}

// Other Users Method
// export function countSmileys(arr: string[]) {
//   return arr.filter((s) => /^[:;][-~]?[)D]$/.test(s)).length;
// }
