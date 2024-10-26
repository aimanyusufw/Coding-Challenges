# Codewars 11
# Title : Number of people in the bus
# Question : Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop
# Challange Url : https://www.codewars.com/kata/5648b12ce68d9daa6b000099
# Level : 7kyu

# Import 
from functools import reduce

# Method : 1
def number(bus_stop):
    people_in_bus = 0
    for people in bus_stop:
        people_in_bus = people_in_bus + people[0] - people[1]
    return people_in_bus
    
# Method : 2
def number(bus_stop):return reduce(lambda a,c: a + c[0] - c[1]  ,bus_stop,0)
    
# Other user method
def number(bus_stops):
    return sum([stop[0] - stop[1] for stop in bus_stops])

# Log or debug
print(number([[10,0],[3,5],[5,8]]))
print(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
print(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))