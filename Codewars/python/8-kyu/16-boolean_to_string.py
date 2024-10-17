# Codewars 16
# Title : Convert a Boolean to a String
# Question : Implement a function which convert the given boolean value into its string representation.
# Challange Url : https://www.codewars.com/kata/551b4501ac0447318f0009cd
# Level : 8kyu


# Method : 1
def boolean_to_string(b):
    defult_string = "False"
    if(b):
        defult_string = "True"
    return defult_string
    
# Method : 2
def boolean_to_string(b): return "True" if b else "False" 

# Other user method
def boolean_to_string(b):
    return str(b)

# Log or debug
print(boolean_to_string(False))
print(boolean_to_string(True))
