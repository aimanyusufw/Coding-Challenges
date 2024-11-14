# Codewars 3
# Title :   Detect Pangram
# Question :    A pangram is a sentence that contains every single letter of the alphabet at least once.
# Challange Url :   https://www.codewars.com/kata/545cedaa9943f7fe7b000048
# Level : 6kyu


# Method : 1
def is_pangram(st):
    alphabet = set('abcdefghijklmnopqrsstuvwxyz')
    unique_chars = set(char for char in st.lower() if char.isalpha())
    return alphabet.issubset(unique_chars)

# Method : 2
def is_pangram(st): return set('abcdefghijklmnopqrsstuvwxyz').issubset(set(char for char in st.lower() if char.isalpha()))
    
# Other user method
def is_pangram(s):
    s = s.lower()
    for char in 'abcdefghijklmnopqrstuvwxyz':
        if char not in s:
            return False
    return True

# Debug and log
print(is_pangram("The quick brown fox jumps over the lazy dog."))
print(is_pangram("This isn't a pangram!"))
print(is_pangram('Cwm fjord bank glyphs vext quiz'))
