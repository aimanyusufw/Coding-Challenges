# Codewars 4
# Title : String ends with?
# Question : Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
# Challange Url : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
# Level : 7kyu


# Method : 1
def solution(text,ending):
    is_correct = False
    text_ending = text[(len(text) - len(ending)  ):len(text)]
    if ending == text_ending:
        is_correct = True
    return is_correct
    
# Method : 2
def solution(t,e): return True if t[(len(t) - len(e)):len(t)] == e else False
    
# Other user method
solution = str.endswith

def solution(string, ending):
    return ending in string[-len(ending):]

# Log or debug
print(solution("samurai", "ai" ))
print(solution("ninja",   "ja" ))
print(solution("sumo",    "omo"  ))
