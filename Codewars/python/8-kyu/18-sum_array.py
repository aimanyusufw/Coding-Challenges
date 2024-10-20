# Codewars 18
# Title : Sum arrays
# Question :   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
# Challange Url : https://www.codewars.com/kata/53dc54212259ed3d4f00071c
# Level : 8kyu


# Method : 1
def sum_array(a):
    total = 0
    for n in a:
        total = total + n
    return total
    
# Method : 2
def sum_array(s): return sum(s)

# Other user method
sum_array = sum

# Log or debug
print(sum_array([]))
print(sum_array([1,2,3]))
print(sum_array([1.1,2.2,3.3]))
print(sum_array([4,5,6]))
