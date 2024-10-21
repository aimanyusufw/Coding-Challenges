# Codewars 1
# Title : Find the next square
# Question : Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
# Challange Url : https://www.codewars.com/kata/56269eb78ad2e4ced1000013/
# Level : 8kyu

# import 
from math import sqrt

# Method : 1
def find_next_square(n): 
    n_sqaure = sqrt(n)
    if(n_sqaure % 1 != 0): return -1
    next_square = n_sqaure + 1
    return next_square * next_square
    
# Method : 2
def find_next_square(n): return -1 if sqrt(n) % 1 != 0 else (sqrt(n) + 1) * (sqrt(n) + 1)

# Other user method
def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1)**2
    return -1

# Log or debug
print(find_next_square(121))
print(find_next_square(625))
print(find_next_square(319225))
print(find_next_square(15241383936))
print(find_next_square(155))
print(find_next_square(342786627))
