// Codewars 1
// Title :  Human readable time
// Question :   Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format
// Challange Url :  https://www.codewars.com/kata/52685f7382004e774f0001f7/
// Level : 6kyu

// Method : 1
// export function humanReadable(seconds: number) {
//   const h = Math.floor(seconds / 3600)
//     .toString()
//     .padStart(2, "0");
//   const m = Math.floor((seconds % 3600) / 60)
//     .toString()
//     .padStart(2, "0");
//   const s = Math.floor((seconds % 3600) % 60)
//     .toString()
//     .padStart(2, "0");

//   return `${h}:${m}:${s}`;
// }

// Method : 2
export const humanReadable = (s: number): string => {
  const time = [(s / 3600) | 0, ((s % 3600) / 60) | 0, (s % 3600) % 60 | 0];
  return time.map((t) => t.toString().padStart(2, "0")).join(":");
};

// Other Users Method
// const formatTime = (sec: number) => (sec > 9 ? `${sec}` : `0${sec}`);

// export function humanReadable(seconds: number): string {
//   const hh = Math.floor(seconds / 3600);
//   const mm = Math.floor(seconds / 60) % 60;
//   const ss = seconds % 60;

//   return [hh, mm, ss].map(formatTime).join(":");
// }
