# Codewars 3
# Title : Printer Errors
# Question : You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression. 
# Challange Url : https://www.codewars.com/kata/56541980fa08ab47a0000040
# Level : 7kyu


# Method : 1
def printer_error(s):
    valid_chars = 'abcdefghijklm'
    errors = 0
    for char in s:
        if char not in valid_chars:
            errors += 1
        else:
            pass
            
    return f"{errors}/{len(s)}"
    
# Method : 2
def printer_error(s): return f"{sum(1 for char in s if char not in 'abcdefghijklm')}/{len(s)}"
    
# Other user method
def printer_error(s):
    return '{}/{}'.format(sum(color > 'm' for color in s), len(s))

# Log or debug
print(printer_error("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
print(printer_error("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
print(printer_error("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"))
