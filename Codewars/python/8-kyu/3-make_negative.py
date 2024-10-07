# Codewars 3
# Title : Retunrn Negative
# Question : In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
# Challange Url : https://www.codewars.com/kata/55685cd7ad70877c23000102
# Level : 8kyu

# Method : 1
# def make_negative(number):
#     if number > 0:
#         return -number
#     else:
#         return number

# Method : 2
def make_negative(n): return n if n < 0 else -n


# Other Users Method

# Log or debug
print(make_negative(3))
print(make_negative(4))
print(make_negative(-1))
print(make_negative(2))
print(make_negative(3))

