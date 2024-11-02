# Codewars 15
# Title :   Sum of the first nth of the series
# Question :    Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
# Challange Url :   https://www.codewars.com/kata/555eded1ad94b00403000071/
# Level : 7kyu


# Method : 1
def series_sum(n):
    finall_number = 0
    for i in range(n):
        dominator = 1 + i * 3
        finall_number += 1 /dominator
    return f"{round(finall_number,2):.2f}"   
    
# Method : 2
def series_sum(n): return f"{round(sum([1 / (1 + i * 3) for i in range(n)]), 2):.2f}" 
    
# Other user method  	
def series_sum(n):
    return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))

# Log or debug
print(series_sum(1))
print(series_sum(2))
print(series_sum(3))