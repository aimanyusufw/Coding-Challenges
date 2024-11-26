# Codewars 16
# Title :   WeIrD StRiNg CaSe
# Question :    Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.
# Challange Url :   https://www.codewars.com/kata/52b757663a95b11b3d00062d
# Level : 6kyu


# Method : 1
def to_weird_case(words):
    word = words.split(' ')
    result  = []
    for i in range(len(word)):
        index_word = ''
        for j,char in enumerate(word[i]):
            if j % 2 == 0:
                index_word += char.upper()
            else:
                index_word += char.lower()
        result.append(index_word)
    return ' '.join(result)
    
# Method : 2
def to_weird_case(words): 
    return " ".join( "".join(
            char.upper() if i % 2 == 0 else char.lower() 
            for i, char in enumerate(word)
        ) for word in words.split(' '))
    
# Other user method  	
def to_weird_case(string):
    recase = lambda s: "".join([c.upper() if i % 2 == 0 else c.lower() for i, c in enumerate(s)])
    return " ".join([recase(word) for word in string.split(" ")])

# Log or debug
print(to_weird_case('This'))
print(to_weird_case('is'))
print(to_weird_case('THIs iS a TEST'))
