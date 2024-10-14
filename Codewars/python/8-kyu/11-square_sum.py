# Codewars 11
# Title : Square sum
# Question : Complete the square sum function so that it squares each number passed into it and then sums the results together.
# Challange Url : https://www.codewars.com/kata/515e271a311df0350d00000f
# Level : 8kyu

# import 
import functools

# Method : 1
def square_sum(numbers):
    amount = 0
    for n in numbers:
        amount += n * n
    return amount

# Method : 2
def square_sum(n): return functools.reduce(lambda a,c: a +c* c, n ,0)

# Other Users Method
def square_sum(numbers):
     return sum(x ** 2 for x in numbers)

# Log or debug
print(square_sum([1,2]))
print(square_sum([0, 3, 4, 5]))
print(square_sum([]))
print(square_sum([-1,-2]))
print(square_sum([-1,0,1]))