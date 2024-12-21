# Codewars 8
# Title :   String incrementer
# Question :    Your job is to write a function which increments a string, to create a new string.
# Challange Url :   https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/python
# Level : 5kyu

from re import search

# Method : 1
def increment_string(strng):
    match = search(r"(\d*)$",strng)
    digit = match.group(1)
    return strng[:match.start()] + (str(int(digit)+1).zfill(len(digit)) if digit else "1")


# Method : 2
    
# Other user method
def increment_string(strng):
    head = strng.rstrip('0123456789')
    tail = strng[len(head):]
    if tail == "": return strng+"1"
    return head + str(int(tail) + 1).zfill(len(tail))

# Debug and log
print(increment_string("foo"))
print(increment_string("foobar001"))
print(increment_string("foobar1"))
print(increment_string("foobar00"))
print(increment_string("foobar99"))
print(increment_string("foobar099"))
print(increment_string("fo99obar99"))
print(increment_string(""))