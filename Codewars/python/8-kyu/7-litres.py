# Codewars 7
# Title : Keep hydrated
# Question : You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value
# Challange Url : https://www.codewars.com/kata/582cb0224e56e068d800003c
# Level : 8kyu

# Method : 1
def litres(time):
    return (0.5 * time).__floor__() 

# Method : 2

# Other Users Method
def letres(time):
    return int(time // 2)

# Log or debug
print(litres(2))
print(litres(1.4))
print(litres(12.3))
print(litres(0.82))
print(litres(11.8))
print(litres(1787))
print(litres(0))
