# Codewars 4
# Title :  Maximum subarray sum
# Question :   The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
# Challange Url :   https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
# Level : 5kyu


# Method : 1
def max_sequence(arr):
    max_sum = 0
    current_sum = 0
    for n in arr:
        current_sum = current_sum + n
        if current_sum > max_sum:
            max_sum = current_sum
        if current_sum < 0:
            current_sum = 0
    return max_sum

# Method : 2
    
# Other user method
def maxSequence(arr):
    max,curr=0,0
    for x in arr:
        curr+=x
        if curr<0:curr=0
        if curr>max:max=curr
    return max
    
# Debug and log
print(max_sequence([]))
print(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
print(max_sequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]))
print(max_sequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]))
