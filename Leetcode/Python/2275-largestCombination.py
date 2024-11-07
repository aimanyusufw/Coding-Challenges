# Leetcode 2275
# Title : Largest Combination with bitwise AND Greater than zero
# Instructions :    The bitwise AND of an array nums is the bitwise AND of all integers in nums.
# Challange Url :   https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/
# Level : Medium

class Solution:
    # Method : 1
    def largestCombination(self, candidates: list[int]) -> int:
        result = 0 
        for i in range(32):
            cnt = 0
            for n in candidates:
                cnt += 1 if (n & (1 << i)) != 0 else 0
            result = max(result, cnt)
            
        return result

    # Other user method

# Test the method
solution = Solution()
print(solution.largestCombination([16, 17, 71, 62, 12, 24, 14]))  
print(solution.largestCombination([8, 8]))


