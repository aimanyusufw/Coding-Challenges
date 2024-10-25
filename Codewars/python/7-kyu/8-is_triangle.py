# Codewars 8
# Title : is this a triangle
# Question : Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
# Challange Url : https://www.codewars.com/kata/56606694ec01347ce800001b
# Level : 7kyu


# Method : 1
def is_triangle(a,b,c):
    status = a + b > c and b + c > a and c + a > b                
    return status
    
# Method : 2
def is_triangle(a,b,c): return True if max(a,b,c) < a+b+c - max(a,b,c) else False
    
# Other user method
def is_triangle(a, b, c):
    a, b, c = sorted([a, b, c])
    return a + b > c

# Log or debug
print(is_triangle(1,2,2))
print(is_triangle(7,2,2))
print(is_triangle(1,2,3))