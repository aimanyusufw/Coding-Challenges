# Codewars 17
# Title :   Give me diamond
# Question :    Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
# Challange Url :  https://www.codewars.com/kata/5503013e34137eeeaa001648
# Level : 6kyu


# Method : 1
def diamond(n):
    if n <= 0 or n % 2 == 0:  
        return None
    
    result = []
    for i in range(n):
        spaces = abs(n // 2 - i)  
        stars = n - 2 * spaces  
        result.append(" " * spaces + "*" * stars)
    
    return "\n".join(result) + "\n"

# Method : 2
    
# Other user method  	
def diamond(n):
    if n < 0 or n % 2 == 0:
        return None
    
    result = "*" * n + "\n";
    spaces = 1;
    n = n - 2
    while n > 0:
        current = " " * spaces + "*" * n + "\n"
        spaces = spaces + 1
        n = n - 2
        result = current + result + current
    
    return result

# Log or debug
print(diamond(1))
print(diamond(5))
print(diamond(0))
