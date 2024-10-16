# Codewars 12
# Title : Begginer - Reduce but Grow
# Question : Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
# Challange Url : https://www.codewars.com/kata/57f780909f7e8e3183000078
# Level : 8kyu

# import
import functools
import math

# Method : 1
def grow(arr):
    amount = 1
    for n in arr:
        amount = amount*n
    return amount

# Method : 2
def grow(a): return functools.reduce(lambda a,c:  a * c,a,1)

# Other Users Method
def grow(arr):
    return math.prod(arr)

# Log or debug
print(grow([1, 2, 3]))
print(grow([4, 1, 1, 1, 4]))
print(grow([2, 2, 2, 2, 2, 2]))
