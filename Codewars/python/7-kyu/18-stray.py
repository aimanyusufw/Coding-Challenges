# Codewars 18
# Title :   Find the stray number
# Question :    Complete the method which accepts such an array, and returns that single different number.
# Challange Url :   https://www.codewars.com/kata/57f609022f4d534f05000024
# Level : 7kyu


# Method : 1
def stray(arr):
    data = {}
    single_number = 0
    for n in arr:
        if n in data:
            data[n] += 1
        else:
            data[n] = 1
    
    for key,val in data.items():
        if val == 1:
            single_number = key
     
    return single_number
     
    
# Method : 2
    
# Other user method  	
def stray(arr):
    for x in arr:
        if arr.count(x) == 1:
            return x
        
def stray(arr):
    return [x for x in set(arr) if arr.count(x) == 1][0]

# Log or debug
print(stray([1, 1, 1, 1, 1, 1, 2]))
print(stray([2, 3, 2, 2, 2]))
print(stray([3, 2, 2, 2, 2]))