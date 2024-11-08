# Codewars 23
# Title :   Make a function that does arithmetic
# Question :    Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
# Challange Url :   https://www.codewars.com/kata/583f158ea20cfcbeb400000a
# Level : 7kyu


# Method : 1     
def arithmetic(a, b, operator):
    operators = {'add' : lambda x,y: x+y ,'subtract' : lambda x,y: x-y , 'divide' : lambda x,y: x/y , 'multiply' : lambda x,y: x*y }
    return  operators[operator](a,b) 

# Method : 2
    
# Other user method  
def arithmetic(a, b, operator):
    return {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }[operator]

# Log or debug
print(arithmetic(1,2,'add'))