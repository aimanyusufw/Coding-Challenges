# Codewars 13
# Title : Reverse word
# Question : Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
# Challange Url : https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
# Level : 7kyu


# Method : 1
def reverse_words(s):
    arr_word = s.split(' ')
    rev_word = []
    for word in arr_word:
        rev_word.append(word[::-1])
    return ' '.join(rev_word)
    
# Method : 2
def reverse_words(s): return ' '.join([word[::-1] for word in s.split(' ')])
    
# Other user method
import re

def reverse_words(str):
  return re.sub(r'\S+', lambda w: w.group(0)[::-1], str)

# Log or debug
print(reverse_words('The quick brown fox jumps over the lazy dog.'))
print(reverse_words('apple'))
print(reverse_words('a b c d'))
print(reverse_words('double  spaced  words'))