# Codewars 9
# Title : Opposite number
# Question : Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
# Challange Url : https://www.codewars.com/kata/56dec885c54a926dcd001095
# Level : 8kyu

# Method : 1
# def opposite(number):
#     oppositeNumber = 0
#     if number < 0:
#         oppositeNumber = number * -1
#     else:
#         oppositeNumber = number - (number * 2)
#     return oppositeNumber

# Method : 2
# def opposite(n): return abs(n) if n < 0 else n - (n*2)

# Other Users Method
def opposite(number):
    return -number

# Log or debug
print(opposite(1))
print(opposite(-1))
print(opposite(25.6))
print(opposite(0))
