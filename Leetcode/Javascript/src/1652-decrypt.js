// Leetcode 1652
// Title :  Defuse the Bomb
// Instructions :   You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
// Challange Url :  https://leetcode.com/problems/defuse-the-bomb
// Level : Easy

// Method : 1
export function decrypt(code, k) {
  const N = code.length;
  const res = new Array(N).fill(0);

  if (k === 0) {
    return res;
  }

  for (let i = 0; i < N; i++) {
    if (k > 0) {
      for (let j = i + 1; j <= i + k; j++) {
        res[i] += code[j % N];
      }
    } else if (k < 0) {
      for (let j = i - 1; j >= i - Math.abs(k); j--) {
        res[i] += code[(j + N) % N];
      }
    }
  }

  return res;
}

// Method 2

// Other Users Method
var decrypt = function (code, k) {
  const n = code.length;
  const result = new Array(n).fill(0);

  if (k === 0) return result;

  let start,
    end,
    sum = 0;

  // Define start and end based on k
  if (k > 0) {
    start = 1;
    end = k;
  } else {
    start = n + k;
    end = n - 1;
  }

  // Initialize the sum for the first element
  for (let i = start; i <= end; i++) {
    sum += code[i % n];
  }

  // Apply sliding window to compute the sum for each position
  for (let i = 0; i < n; i++) {
    result[i] = sum;
    // Slide the window
    sum -= code[start % n];
    start++;
    end++;
    sum += code[end % n];
  }

  return result;
};
