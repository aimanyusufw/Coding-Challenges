# Codewars 3
# Title :  Rot13
# Question :   ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
# Challange Url :   https://www.codewars.com/kata/530e15517bc88ac656000716
# Level : 6kyu


# Method : 1
def rot13(text):
    result = []
    for char in text:
        if 'a' <= char <= 'z':  # Lowercase letters
            result.append(chr((ord(char) - ord('a') + 13) % 26 + ord('a')))
        elif 'A' <= char <= 'Z':  # Uppercase letters
            result.append(chr((ord(char) - ord('A') + 13) % 26 + ord('A')))
        else:  # Non-alphabetic characters
            result.append(char)
    return ''.join(result)

# Method : 2
    
# Other user method
import string
from codecs import encode as _dont_use_this_

def rot13(message):
    alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    outputMessage = ""
    for letter in message:
        if letter in alpha.lower():
            outputMessage += alpha[(alpha.lower().index(letter) +13) % 26].lower()
        elif letter in alpha:
            outputMessage += alpha[(alpha.index(letter) +13) % 26]
        else:
            outputMessage += letter
    return outputMessage
    

# Debug and log
print(rot13('test'))
print(rot13('Test'))
print(rot13('aA bB zZ 1234 *!?%'))
