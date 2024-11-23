# Codewars 11
# Title :   The Supermarket Queue
# Question :    There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
# Challange Url :   https://www.codewars.com/kata/57b06f90e298a7b53d000a86
# Level : 6kyu

# Method : 1
def queue_time(customers, n):
    if n == 1:
        return sum(customers)
    if not customers:
        return 0
    if len(customers) < n:
        return max(customers)

    tails = [0] * n
    for time in customers:
        tails.sort()
        tails[0] += time
    return max(tails)

# Method : 2
    
# Other user method
def queue_time(customers, n):
    l=[0]*n
    for i in customers:
        l[l.index(min(l))]+=i
    return max(l)

# Debug and log
print(queue_time([], 1))
print(queue_time([5], 1))
print(queue_time([2], 5))
print(queue_time([1,2,3,4,5], 1))
print(queue_time([1,2,3,4,5], 100))
print(queue_time([2,2,3,3,4,4], 2))
print(queue_time([40, 30, 6, 3, 40, 41, 38, 35, 18, 43, 39, 22, 5], 6))
