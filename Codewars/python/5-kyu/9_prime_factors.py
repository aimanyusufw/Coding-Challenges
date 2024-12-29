# Codewars 9
# Title :   Primes in numbers
# Question :    Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form
# Challange Url :   https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/python
# Level : 5kyu


# Method : 1
def prime_factors(n):
    def get_prime_factors(n):
        factors = {}
        divisor = 2
        while n > 1:
            while n % divisor == 0:
                factors[divisor] = factors.get(divisor, 0) + 1
                n //= divisor
            divisor += 1
        return factors

    factors = get_prime_factors(n)
    result = ""
    for p in sorted(factors):
        power = f"**{factors[p]}" if factors[p] > 1 else ""
        result += f"({p}{power})"
    return result

# Method : 2
    
# Other user method
def primeFactors(n):
    i = 2
    r = ''
    while n != 1:
        k = 0
        while n%i == 0:
            n = n / i
            k += 1
        if k == 1:
            r = r + '(' + str(i) + ')'
        elif k == 0: pass
        else:
            r = r + '(' + str(i) + '**' + str(k) + ')'
        i += 1
        
    return r
    
# Debug and log
print(prime_factors(7775460))
print(prime_factors(7919))