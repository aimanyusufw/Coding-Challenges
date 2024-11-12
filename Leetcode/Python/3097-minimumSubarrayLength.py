# Leetcode 3097
# Title :  Shortest array with OR at least K ||
# Instructions :    You are given an array nums of non-negative integers and an integer k.
# An array is called special if the bitwise OR of all of its elements is at least k.
# Return the length of the shortest special non-empty
# subarray
# of nums, or return -1 if no special subarray exists.

# Challange Url :   https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii
# Level : Medium

class Solution:
    # Method : 1
    def minimumSubarrayLength(self, nums: list[int], k: int) -> int:
        n = len(nums)
        cnt = [0] * 32
        ans = n + 1
        s = i = 0
        for j, x in enumerate(nums):
            s |= x
            for h in range(32):
                if x >> h & 1:
                    cnt[h] += 1
            while s >= k and i <= j:
                ans = min(ans, j - i + 1)
                y = nums[i]
                for h in range(32):
                    if y >> h & 1:
                        cnt[h] -= 1
                        if cnt[h] == 0:
                            s ^= 1 << h
                i += 1
        return -1 if ans > n else ans



    # Other user method

# Test the method
class Solution:
    def minimumSubarrayLength(self, nums: list  [int], k: int) -> int:
        if k == 0:
            return 1
        
        ans = len(nums) + 1
        bits = [0] * 32
        left = 0
        n = len(nums)

        for right in range(n):
            temp = 0
            for i in range(32):
                if nums[right] & (1 << i):
                    bits[i] += 1
                if bits[i] > 0:
                    temp |= (1 << i)
            
            if temp >= k:
                ans = min(ans, right - left + 1)
            
            while temp >= k:  # Constraints not satisfying, so move the left pointer
                temp = 0
                for i in range(32):
                    if nums[left] & (1 << i):
                        bits[i] -= 1
                    if bits[i] > 0:
                        temp |= (1 << i)
                
                left += 1
                if temp >= k:
                    ans = min(ans, right - left + 1)

        return -1 if ans == (len(nums) + 1) else ans

solution = Solution()
print(solution.minimumSubarrayLength([1,2,3],2))  
print(solution.minimumSubarrayLength([2,1,8],10))
print(solution.minimumSubarrayLength([1,2],0))


