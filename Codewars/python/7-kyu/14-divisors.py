# Codewars 14
# Title : Find the divisors
# Question :    Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself),
# Challange Url :   https://www.codewars.com/kata/544aed4c4a30184e960010f4
# Level : 7kyu

# import
from math import ceil

# Method : 1
def divisors(n):
    divisors_number = []
    middle_n = ceil(n / 2)
    for i in range(2,middle_n+1):
        if n % i == 0:
            divisors_number.append(i)
    return f"{n} is prime" if len(divisors_number) < 1 else divisors_number
    
# Method : 2
def advisors(n):
    divisors = [i for i in range(2, ceil(n / 2) + 1) if n % i == 0]
    return f"{n} is prime" if len(divisors) == 0 else divisors
    
# Other user method
def divisors(integer):
  return [n for n in range(2, integer) if integer % n == 0] or '{} is prime'.format(integer)
  	

# Log or debug
print(divisors(15))
print(divisors(253))
print(divisors(24))
print(divisors(25))
print(divisors(13))
print(divisors(3))
print(divisors(29))