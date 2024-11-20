# Codewars 8
# Title :   Is a number prime
# Question :    Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.  
# Challange Url :   https://www.codewars.com/kata/5262119038c0985a5b00029f
# Level : 6kyu

# Method : 1
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2,int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

# Method : 2
    
# Other user method
def is_prime(n):
    return n>1 and all(n%i for i in range(2, int(n**.5+1)))

# Debug and log
print(is_prime(0))
print(is_prime(1))
print(is_prime(2))
print(is_prime(73))
print(is_prime(75))
print(is_prime(-1))