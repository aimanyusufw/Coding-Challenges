# Codewars 2
# Title : The speed of letters
# Question : Given a string as input, return a new string with each letter pushed to the right by its respective index in the alphabet.
# Challange Url : https://www.codewars.com/kata/5fc7caa854783c002196f2cb
# Level : 8kyu


# Method : 1
def speedify(s):
    result = [' '] * (len(s) + 26)
    for i,char in enumerate(s):
        shift = i + ord(char) - 65 
        result[shift] = char
    return ''.join(result).rstrip()
    
# Method : 2
    
# Other user method
def speedify(s): 
    lst = [' '] * (len(s)+26)
    for i,c in enumerate(s):
        lst[i+ord(c)-65] = c
    return ''.join(lst).rstrip()

# Log or debug
print(speedify("AZ"))
print(speedify("ABC"))
print(speedify("ACE"))
print(speedify("CBA"))
print(speedify("HELLOWORLD"))