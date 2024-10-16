# Codewars 13
# Title : A needle in the haystack
# Question : Write a function findNeedle() that takes an array full of junk but containing one "needle"
# Challange Url : https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
# Level : 8kyu


# Method : 1
# def find_needle(haystack):
#     position = 0
#     for i, a in enumerate(haystack):
#         if haystack[i] == 'needle':
#           position = i
#     return f"found the needle at position {position}" 

# Method : 2
def find_needle(arr): return f"found the needle at position {arr.index('needle')}" 

# Other Users Method

# Log or debug
print(find_needle(['3', '123124234', None, 'needle', 'world', 'hay', 2, '3', True, False]))
print(find_needle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))
print(find_needle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]))
