# Codewars 15
# Title : Beginner Series #1 School Paperwork
# Question : Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
# Challange Url : https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
# Level : 8kyu


# Method : 1
def paperwork(n,m):
    blank_pages_count= 0
    if(n > 0 and m > 0):
        blank_pages_count = n * m
    return blank_pages_count
    
# Method : 2
def paperwork(n,m): return n * m if n > 0 and m > 0 else 0

# Other user method
def paperwork(n, m):
    return max(n, 0)*max(m, 0)

# Log or debug
print(paperwork(5,5))
print(paperwork(1,2))
print(paperwork(-5,5))
print(paperwork(5,-5))
print(paperwork(-5,-5))
print(paperwork(5,0))
