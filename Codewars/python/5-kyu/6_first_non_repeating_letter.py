# Codewars 6
# Title :  First non-repeating character
# Question :  Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
# Challange Url :   https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/python
# Level : 5kyu


# Method : 1
def first_non_repeating_letter(s):
    if s == '':
        return ''
    char_map = {}  
    for char in s:
        lower_char = char.lower()
        char_map[lower_char] = char_map.get(lower_char, 0) + 1
    for char in s:
        if char_map[char.lower()] == 1:
            return char
    return ''


# Method : 2
    
# Other user method
    
# Debug and log
print(first_non_repeating_letter('a'))
print(first_non_repeating_letter('stress'))
print(first_non_repeating_letter('moonmen'))
print(first_non_repeating_letter(''))
print(first_non_repeating_letter('sTreSS'))