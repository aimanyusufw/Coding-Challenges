# Codewars 9
# Title : Sum off odd numbers
# Question : Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
# Challange Url : https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/
# Level : 7kyu


# Method : 1
def row_sum_odd_numbers(n):
    current_number = 1  
    result = []  
    for i in range(1, n + 1):
        current_level = []  
        for j in range(i):
            current_level.append(current_number)
            current_number += 2  
        if i == n:
            result = current_level
    
    return sum(result)
    
# Method : 2
    
# Other user method
def row_sum_odd_numbers(n):
    return n ** 3

# Log or debug
print(row_sum_odd_numbers(1))
print(row_sum_odd_numbers(2))
print(row_sum_odd_numbers(13))
print(row_sum_odd_numbers(19))
print(row_sum_odd_numbers(41))
