# Codewars 9
# Title :   Write a number in expanded form
# Question :    You will be given a number and you will need to return it as a string in Expanded Form. For example:
# Challange Url :   
# Level : 6kyu

# Method : 1
def expanded_form(num):
    num = str(num)
    numbers = []
    for i in range(len(num)):
        if num[i] != "0":
            numbers.append(num[i]+ "0" * (len(num) - (i + 1)))
    return " + ".join(numbers)

# Method : 2
def expanded_form(num): return " + ".join([n + "0" * (len(str(num)) - (i +1))  for i,n in enumerate(str(num)) if n != "0" ])
    
# Other user method
def expanded_form(num):
    num = list(str(num))
    return ' + '.join(x + '0' * (len(num) - y - 1) for y,x in enumerate(num) if x != '0')

# Debug and log
print(expanded_form(12))
print(expanded_form(42))
print(expanded_form(70304))
