# Codewars 5
# Title : Regex validation pin code
# Question : If the function is passed a valid PIN string, return true, else return false.
# Challange Url : https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
# Level : 7kyu

# import 
import re

# Method : 1
def validate_pin(pin):
    is_valid = False
    if len(pin) == 5: return is_valid 
    if len(pin) > 6 or len(pin) < 4: return is_valid
    if not pin.isdigit(): return is_valid
    
    is_valid = True

    return is_valid
    
# Method : 2
def validate_pin(p): return True if re.fullmatch("^\d{4}$|^\d{6}$",p) else False
    
# Other user method
def validate_pin(pin):
    return len(pin) in (4, 6) and pin.isdigit()

# Log or debug
print(validate_pin("1"))
print(validate_pin("12"))
print(validate_pin("123"))
print(validate_pin("1234"))
print(validate_pin("12345"))
print(validate_pin("12345"))
print(validate_pin("1234567"))
print(validate_pin("1.234"))
print(validate_pin("1234                   "))
