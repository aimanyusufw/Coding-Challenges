# Codewars 1
# Title : Even or Odd
# Question : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
# Challange Url : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
# Level : 8kyu

# Method : 1
# def even_or_odd(number):
#     if number % 2 == 0:
#       return 'Odd' 
#     else:
#       return 'Even' 

# Method : 2
def even_or_odd(n) : return "Odd" if n % 2==0 else 'Even' 


# Other Users Method

# Log or debug
print(even_or_odd(2))
print(even_or_odd(4))
print(even_or_odd(7))
print(even_or_odd(9))
print(even_or_odd(23))

