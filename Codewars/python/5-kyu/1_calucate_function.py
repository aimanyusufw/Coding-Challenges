# Codewars 1
# Title :   Calucalte With Function
# Question :    This time we want to write calculations using functions and get the results. Let's have a look at some examples
# Challange Url :   https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
# Level : 5kyu


# Method : 1
def zero(func=None):
    return func(0) if func else 0

def one(func=None):
    return func(1) if func else 1

def two(func=None):
    return func(2) if func else 2

def three(func=None):
    return func(3) if func else 3

def four(func=None):
    return func(4) if func else 4

def five(func=None):
    return func(5) if func else 5

def six(func=None):
    return func(6) if func else 6

def seven(func=None):
    return func(7) if func else 7

def eight(func=None):
    return func(8) if func else 8

def nine(func=None):
    return func(9) if func else 9

def ten(func=None):
    return func(10) if func else 10

def plus(b):
    return lambda a:a+b

def minus(b):
    return lambda a:a-b

def times(b):
    return lambda a:a*b

def divided_by(b):
    return lambda a:int(a/b)
     
# Method : 2

# Other user method
def zero(arg=""):  return eval("0" + arg)
def one(arg=""):   return eval("1" + arg)
def two(arg=""):   return eval("2" + arg)
def three(arg=""): return eval("3" + arg)
def four(arg=""):  return eval("4" + arg)
def five(arg=""):  return eval("5" + arg)
def six(arg=""):   return eval("6" + arg)
def seven(arg=""): return eval("7" + arg)
def eight(arg=""): return eval("8" + arg)
def nine(arg=""):  return eval("9" + arg)

def plus(n):       return '+' + str(n)
def minus(n):      return '-' + str(n)
def times(n):      return '*' + str(n)
def divided_by(n): return '//' + str(n)

# Log or debug
print(seven(times(five())))
print(four(plus(nine())))
print(eight(minus(three())))
print(six(divided_by(two())))
