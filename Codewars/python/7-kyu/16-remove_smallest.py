# Codewars 16
# Title :   Remove the minimum
# Question :    Given an array of integers, remove the smallest value. Do not mutate the original array/list.
# Challange Url :   https://www.codewars.com/kata/563cf89eb4747c5fb100001b/
# Level : 7kyu


# Method : 1
def remove_smallest(numbers):
    if not numbers: 
        return []
    min_value = min(numbers)
    min_index = numbers.index(min_value)
    return numbers[:min_index] + numbers[min_index + 1:]
    
# Method : 2
    
# Other user method  	
def remove_smallest(numbers):
    a = numbers[:]
    if a:
        a.remove(min(a))
    return a

# Log or debug
print(remove_smallest([1, 2, 3, 4, 5]))
print(remove_smallest([5, 3, 2, 1, 4]))
print(remove_smallest([1, 2, 3, 1, 1]))
print(remove_smallest([]))
