# Codewars 19
# Title : How good are you really
# Question :   You receive an array with your peers' test scores. Now calculate the average and compare your score!
# Challange Url : https://www.codewars.com/kata/5601409514fc93442500010b
# Level : 8kyu

# import
from statistics import mean

# Method : 1
def better_than_average(class_points,your_point):
    # decalre variable is better
    is_better = False
    
    # Sum all class points
    class_points_totals = 0
    for p in class_points:
        class_points_totals = class_points_totals + p

    # count average class points
    average_class_points = class_points_totals / len(class_points)

    # Set better to True if your point is better than average class points
    if your_point > average_class_points:
        is_better = True

    # return it
    return is_better 
    
# Method : 2
def better_than_average(cp,yp):
    return True if yp > sum(cp) / len(cp) else False

# Other user method
def better_than_average(class_points, your_points):
    return your_points > mean(class_points)

# Log or debug
print(better_than_average([2, 3], 5))
print(better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75))
print(better_than_average([12, 23, 34, 45, 56, 67, 78, 89, 90], 69))
print(better_than_average([41, 75, 72, 56, 80, 82, 81, 33], 50))
print(better_than_average([29, 55, 74, 60, 11, 90, 67, 28], 21))