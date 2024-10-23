# Codewars 6
# Title : Binnary addition
# Question : Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
# Challange Url : https://www.codewars.com/kata/551f37452ff852b7bd000139/
# Level : 7kyu


# Method : 1
def add_binary(a,b):
    binnary = format(a+b,'b')
    return binnary
    
# Method : 2
def add_binary(a,b): return format(a+b,'b')
    
# Other user method
def add_binary(a,b):
    return '{0:b}'.format(a + b)

# Log or debug
print(add_binary(1,1))
print(add_binary(1,0))
print(add_binary(0,1))
print(add_binary(2,2))
print(add_binary(51,12))