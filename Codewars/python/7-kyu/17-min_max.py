# Codewars 17
# Title :   The highest profirt win!
# Question :   Write a function that returns both the minimum and maximum number of the given list/array. 
# Challange Url :   https://www.codewars.com/kata/559590633066759614000063/
# Level : 7kyu


# Method : 1
def min_max(a):
    min_val = min(a)
    max_val = max(a)
    return [min_val,max_val]
    
# Method : 2
def min_max(arr):
    return [min(arr),max(arr)]
    
# Other user method  	
def min_max(lst):
  lst.sort()
  tempor = [lst[0],lst[-1]]
  return tempor
  

# Log or debug
print(min_max([1,2,3,4,5]))
print(min_max([2334454,5]))
