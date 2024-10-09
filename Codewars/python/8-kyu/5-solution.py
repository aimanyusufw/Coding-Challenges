# Codewars 5
# Title : Reversed string
# Question : Complete the solution so that it reverses the string passed into it. 
# Challange Url : https://www.codewars.com/kata/5168bb5dfe9a00b126000018
# Level : 8kyu

# Method : 1
def solution(string):
    if(string == ''): return ''
    reversed_string = []
    array_string = list(string)
    for i,c in enumerate(array_string):
        reversed_string.append(array_string[len(string) - i - 1])  
    return ''.join(reversed_string)

# Method : 2
def solution(s): return ''.join(reversed(s))

# Other Users Method
def solution(str):
  return str[::-1]

# Log or debug
print(solution('world'))
print(solution('hello'))
print(solution(''))
print(solution('h'))

