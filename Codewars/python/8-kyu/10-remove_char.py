# Codewars 10
# Title : Remove First and Last Character
# Question : It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
# Challange Url : https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
# Level : 8kyu

# Method : 1
# def remove_char(s):
#     if len(s) <= 2: return ''
#     final_string = ''
#     for i, char in enumerate(s):
#         if i != 0 and i != len(s) - 1:
#             final_string += char
#     return final_string

# Method : 2
def remove_char(s):
    return s[1:-1]

# Other Users Method
# def remove_char(s):
#     return '' if len(s) <= 2 else s[1:-1]

# Log or debug
print(remove_char('eloquent'))
print(remove_char('country'))
print(remove_char('person'))
print(remove_char('place'))
print(remove_char('ok'))
print(remove_char('oooopsss'))
