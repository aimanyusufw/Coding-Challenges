# Codewars 14
# Title : Is n divisible by x and y
# Question : Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
# Challange Url : https://www.codewars.com/kata/5545f109004975ea66000086
# Level : 8kyu


# Method : 1
def is_divisible(n,x,y):
    divisible_status = False
    if(n % x == 0 and n % y == 0):
        divisible_status = True
    return divisible_status

# Method : 2
def is_divisible(n,x,y): return True if n % x == 0 and n % y == 0 else False

# Other user method
def is_divisible(n,x,y):
    return not (n%x or n%y)

# Log or debug
print(is_divisible(3,2,2))
print(is_divisible(3,3,4))
print(is_divisible(12,3,4))
print(is_divisible(8,3,4))