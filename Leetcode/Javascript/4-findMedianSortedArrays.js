// Leetcode 4
// Title : Median of Two Sorted Arrays
// Instructions : Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Challange Url : https://leetcode.com/problems/median-of-two-sorted-arrays
// Level : Hard

// Method : 1
// var findMedianSortedArrays = function (nums1, nums2) {
//   const lengthArray = [...nums1, ...nums2].sort((a, b) => a - b);

//   if (lengthArray.length % 2) {
//     return lengthArray[Math.floor(lengthArray.length / 2)];
//   } else {
//     return (
//       (lengthArray[lengthArray.length / 2 - 1] +
//         +lengthArray[lengthArray.length / 2]) /
//       2
//     );
//   }
// };

// Other Users Method
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0,
    right = m;

  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minX = partitionX === m ? Infinity : nums1[partitionX];

    const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minY = partitionY === n ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
}

// Result or debug
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([2, 2, 4, 4], [2, 2, 2, 4, 4]));
console.log(
  findMedianSortedArrays(
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  )
);
