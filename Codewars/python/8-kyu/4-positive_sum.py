# Codewars 4
# Title : Sum of positive
# Question : You get an array of numbers, return the sum of all of the positives ones.
# Challange Url : https://www.codewars.com/kata/5715eaedb436cf5606000381/
# Level : 8kyu

# Method : 1
# def positive_sum(numbers):
#     amount = 0
#     for n in numbers:
#         if n > 0 : amount += n 
#     return amount

# Method : 2

# Other Users Method
def positive_sum(arr):
    return sum(x for x in arr if x > 0)

# Log or debug
print(positive_sum([1,2,3,4,5]))
print(positive_sum([1,-2,3,4,5]))
print(positive_sum([-1,2,3,4,-5]))

