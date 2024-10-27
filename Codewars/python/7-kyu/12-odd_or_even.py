# Codewars 12
# Title : Odd or even
# Question : Given a list of integers, determine whether the sum of its elements is odd or even.
# Challange Url : https://www.codewars.com/kata/5949481f86420f59480000e7
# Level : 7kyu


# Method : 1
def odd_or_even(arr):
    sum_array = sum(arr)
    number_type = 'odd' if sum_array % 2 else "even"
    return number_type
    
# Method : 2
def odd_or_even(a):return 'odd' if sum(a) % 2 else 'even'
    
# Other user method
def oddOrEven(arr):
    return ('even', 'odd')[sum(arr) % 2]

# Log or debug
print(odd_or_even([0, 1, 2]))
print(odd_or_even([0, 1, 3]))
print(odd_or_even([1023, 1, 2]))