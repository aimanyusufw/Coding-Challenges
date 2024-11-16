# Codewars 6
# Title :   Find the missing letter
# Question :    Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
# Challange Url :   https://www.codewars.com/kata/5839edaa6754d6fec10000a2
# Level : 6kyu


# Method : 1
def find_missing_letter(chars):
    for i in range(len(chars) - 1):
        if ord(chars[i + 1]) != ord(chars[i]) + 1:
            return chr(ord(chars[i]) + 1)

# Method : 2
    
# Other user method
def find_missing_letter(c):
    return next(chr(ord(c[i])+1) for i in range(len(c)-1) if ord(c[i])+1 != ord(c[i+1]))

# Debug and log
print(find_missing_letter(['a','b','c','d','f']))
print(find_missing_letter(['O','Q','R','S']))
print(find_missing_letter(['b','d']))