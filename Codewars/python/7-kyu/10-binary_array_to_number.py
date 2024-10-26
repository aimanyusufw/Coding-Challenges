# Codewars 10
# Title : Ones and zeros
# Question : Given an array of ones and zeroes, convert the equivalent binary value to an integer.
# Challange Url : https://www.codewars.com/kata/578553c3a1b8d5c40300037c/
# Level : 7kyu


# Method : 1
def binary_array_to_number(arr):
    string_arr = [str(i) for i in arr]
    b_string = "".join(string_arr)
    int_b = int(b_string,2)
    return int_b
    
# Method : 2
def binary_array_to_number(arr): return int("".join([str(i) for i in arr]),2)
    
# Other user method
def binary_array_to_number(arr):
    return int("".join(map(str, arr)), 2)

# Log or debug
print(binary_array_to_number([0,0,0,1]))
print(binary_array_to_number([0,0,1,0]))
print(binary_array_to_number([1,1,1,1]))
print(binary_array_to_number([0,1,1,0]))
    
