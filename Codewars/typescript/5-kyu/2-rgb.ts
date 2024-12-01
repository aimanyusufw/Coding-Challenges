// Codewars 2
// Title :  RGB to hex Conversion
// Question :   The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// Challange Url :  https://www.codewars.com/kata/513e08acc600c94f01000001
// Level : 6kyu

// Method : 1
export function rgb(r: number, g: number, b: number): string {
  function toHex(c: number) {
    const hex = c < 0 ? "00" : c > 255 ? "FF" : c.toString(16);
    return hex.padStart(2, "0");
  }
  return [r, g, b]
    .map((c) => toHex(c))
    .join("")
    .toUpperCase();
}

// Method : 2

// Other Users Method
// const hex = (d: number) =>
//   Math.max(0, Math.min(255, d)) // Limit the value
//     .toString(16) // Convert to hex
//     .padStart(2, "0") // Add 0 if needed
//     .toUpperCase(); // Make it uppercase

// export const rgb = (r: number, g: number, b: number) =>
//   `${hex(r)}${hex(g)}${hex(b)}`;
