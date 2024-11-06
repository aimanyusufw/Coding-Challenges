# Codewars 22
# Title :   Breaking chocolate problem
# Question :    mplement a function that will return minimum number of breaks needed.
# Challange Url :   https://www.codewars.com/kata/534ea96ebb17181947000ada/
# Level : 7kyu


# Method : 1     
def break_chocolate(n, m):
    return 0 if n * m == 0 else n * m - 1

# Method : 2
    
# Other user method  
def breakChocolate(n, m):
    return max(m * n - 1, 0)	

# Log or debug
print(break_chocolate(5, 5))
print(break_chocolate(7, 4))
print(break_chocolate(1, 1))
print(break_chocolate(0, 0))
print(break_chocolate(6, 1))