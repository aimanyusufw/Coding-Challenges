# Codewars 10
# Title :   Count characters in your string   
# Question :    The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
# Challange Url :   https://www.codewars.com/kata/52efefcbcdf57161d4000091
# Level : 6kyu

# Method : 1
def count(s):
    count_char = {}
    for char in s:
        if char not in count_char:
            count_char[char] = 1
        else:
            count_char[char] += 1
    return count_char

# Method : 2
from collections import Counter

def count(string):
    return Counter(string)
    
# Other user method
def count(string): return {i: string.count(i) for i in string}

# Debug and log
print(count('aba'))
print(count(''))
print(count('aa'))
print(count('aabb'))