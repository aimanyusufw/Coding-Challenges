# Codewars 20
# Title :   Sort array by string length
# Question :    Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
# Challange Url :   https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/
# Level : 7kyu


# Method : 1     
def sort_by_length(arr):
    result = arr[:]
    for i in range(len(arr)):
        for j in range(0,len(result)-i-1):
            if len(result[j]) > len(result[j + 1]):
                result[j], result[j + 1] = result[j + 1], result[j]     
    return result

# Method : 2
def sort_by_length(arr): return sorted(arr, key=len)
    
# Other user method  	
def sort_by_length(arr):
    words={}
    for word in arr:
        words[int(len(word))]=word
    return [words[key] for key in sorted(words.keys())]

# Log or debug
print(sort_by_length(["beg", "life", "i", "to"]))
print(sort_by_length(["", "moderately", "brains", "pizza"]))
print(sort_by_length(["dog", "food", "a", "of"]))