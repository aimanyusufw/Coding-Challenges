# Codewars 21
# Title : Calculate average
# Question : Write a function which calculates the average of the numbers in a given list.
# Challange Url : https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
# Level : 8kyu


# Method : 1
def find_average(numbers):
    if len(numbers) < 1: return 0
    total = 0
    for n in numbers:
        total = total + n
    average = total / len(numbers)
    return average
    
# Method : 2
def find_average(n): return 0 if len(n) < 1 else sum(n) / len(n)

# Other user method
def find_average(array):
    try:
        return sum(array) / len(array)
    except ZeroDivisionError:
        return 0

# Log or debug
print(find_average([1, 2, 3]))
print(find_average([]))
print(find_average([1,2]))
