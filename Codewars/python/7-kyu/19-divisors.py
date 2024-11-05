# Codewars 19
# Title :   Count the divisors a number
# Question :    Count the number of divisors of a positive integer n.
# Challange Url :
# Level : 7kyu


# Method : 1     
def divisors(n):
    devide_n = int(n ** 0.5)
    devided_numbers = []
    for i in range(1,devide_n + 1):
        if n  % i   == 0:
            devided_numbers.append(i)
            if i != n // i:  
                devided_numbers.append(n // i)
                
    return len(devided_numbers)
    
# Method : 2
def devisors(n): return len([i for i in range(n + 1) if n % i == 0])
    
# Other user method  	
def divisors(n):
    return sum(n%i==0 for i in range(1,n+1))

# Log or debug
print(divisors(1))
print(divisors(4))
print(divisors(5))
print(divisors(12))
print(divisors(30))
print(divisors(4096))