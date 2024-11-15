# Codewars 5
# Title :   Split string 
# Question :    Complete the solution so that it splits the string into pairs of two characters.
# Challange Url :   https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
# Level : 6kyu


# Method : 1
def solution(s):
    output = []
    s += "_" if len(s) % 2 != 0 else ""
    temp = ""
    for char in s:
        temp += char 
        if len(temp) == 2:
            output.append(temp)
            temp = ""
    return output

# Method : 2
    
# Other user method
def solution(s):
    return [(s + "_")[i:i + 2] for i in range(0, len(s), 2)]

# Debug and log
print(solution("asdfadsf"))
print(solution("asdfads"))
print(solution(""))
print(solution("x"))
