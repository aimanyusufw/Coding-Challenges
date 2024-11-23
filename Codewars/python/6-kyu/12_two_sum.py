# Codewars 12
# Title :   Two Sum
# Question :    Write a function that takes an array of numbers (integers for the tests) and a target number.
# Challange Url :   https://www.codewars.com/kata/52c31f8e6605bcc646000082
# Level : 6kyu

# Method : 1
def two_sum(numbers,target):
    for i in range(len(numbers)):
        for j in range(i+1,len(numbers)):
            if numbers[i] + numbers[j] == target:
                return (i,j)
    return []

# Method : 2
    
# Other user method
def two_sum(nums, target):
    d = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in d:
            return [d[diff], i]
        d[num] = i

# Debug and log
print(two_sum([1,2,3,4],4))
print(two_sum([2,3,4],6))
print(two_sum([1,4,6,7],11))
