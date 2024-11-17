# Codewars 7
# Title :   Highest scoring word
# Question :    Given a string of words, you need to find the highest scoring word.
# Challange Url :   https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
# Level : 6kyu


# Method : 1
def high(x):
    alphabet = 'abcdefghijklmnoprqstuvwxyz'
    split_string = x.split(" ")
    highest = []
    for word in split_string:
        sum = 0
        for char in word:
            sum += alphabet.index(char) + 1
        highest.append(sum)
    return split_string[highest.index(max(highest))]

# Method : 2
def high(x):
    words=x.split(' ')
    list = []
    for i in words:
        scores = [sum([ord(char) - 96 for char in i])]
        list.append(scores)
    return words[list.index(max(list))]
    
# Other user method
def high(x):
    return max(x.split(), key=lambda k: sum(ord(c) - 96 for c in k))

# Debug and log
print(high('man i need a taxi up to ubud'))
print(high('what time are we climbing up the volcano'))
print(high('take me to semynak'))
print(high('aa b'))
print(high('b aa'))
print(high('bb d'))
print(high('d bb'))
print(high("aaa b"))