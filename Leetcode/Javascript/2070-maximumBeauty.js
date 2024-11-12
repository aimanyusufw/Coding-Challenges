// Leetcode 2070
// Title :  Most beautiful Items for each queries
// Instructions :   You are given a 2D integer array items where items[i] = [pricei, beautyi] denotes the price and beauty of an item respectively.
// Challange Url :      https://leetcode.com/problems/most-beautiful-item-for-each-query
// Level : Medium

// Method : 1
function maximumBeauty(items, queries) {
  items.sort((a, b) => a[0] - b[0]);

  const result = new Array(queries.length).fill(0);

  const sortedQueries = queries
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value);

  let maxBeautySoFar = 0;
  let itemIndex = 0;

  for (const { value: queryValue, index: queryIndex } of sortedQueries) {
    while (itemIndex < items.length && items[itemIndex][0] <= queryValue) {
      maxBeautySoFar = Math.max(maxBeautySoFar, items[itemIndex][1]);
      itemIndex++;
    }

    result[queryIndex] = maxBeautySoFar;
  }

  return result;
}

// Method 2

// Other Users Method
var maximumBeauty = function (items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  let maxBeauty = 0;
  let prefixMaxBeauty = [];
  for (let [price, beauty] of items) {
    prefixMaxBeauty.push((maxBeauty = Math.max(maxBeauty, beauty)));
  }
  let answer = [];
  for (let queryPrice of queries) {
    let low = 0;
    let high = items.length - 1;
    while (low <= high) {
      let mid = ~~(low / 2 + high / 2);
      if (items[mid][0] <= queryPrice) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    answer.push(high >= 0 ? prefixMaxBeauty[high] : 0);
  }
  return answer;
};

// Result or debug
console.log(
  maxBeauty(
    [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ],
    [1, 2, 3, 4, 5, 6]
  )
);
console.log(
  maxBeauty(
    [
      [1, 2],
      [1, 2],
      [1, 3],
      [1, 4],
    ],
    [1]
  )
);
console.log(maxBeauty([[10, 1000]], [5]));
