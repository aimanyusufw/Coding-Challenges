# Codewars 15
# Title :   Simple encryption #1 - Alternative Split
# Question :    Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
# Challange Url :   https://www.codewars.com/kata/57814d79a56c88e3e0000786
# Level : 6kyu

# Method : 1
def encrypt(expected_text,n):
    if  not issubclass(type(expected_text),str) or n < 1:
        return expected_text
    for _ in range(n):
        encrypted = []
        for i,char in enumerate(expected_text):
            if i % 2 == 0:
                even += char
            else:
                odd += char
        expected_text = ''.join(encrypted)
    return expected_text

def decrypt(text,n):
    if not issubclass(type(text),str) or n < 1:
        return text
    for _ in range(n):
        mid = len(text) // 2
        odd_part = text[:mid]
        even_part = text[mid:]

        decrypted = []
        for e,o in zip(even_part,odd_part):
            decrypted.append(e)
            decrypted.append(o)
        
        if len(even_part) > len(odd_part):
            decrypted.append(even_part[-1])
        text = ''.join(decrypted)

    return text

# Method : 2
    
# Other user method
def decrypt(text, n):
    if not text: return text
    half = len(text) // 2
    arr = list(text)
    for _ in range(n):
        arr[1::2], arr[::2] = arr[:half], arr[half:]
    return ''.join(arr)

def encrypt(text, n):
    for i in range(n):
        text = text[1::2] + text[::2]
    return text

# Debug and log
print(encrypt("This is a test!", 0))
print(encrypt("This is a test!", 1))
print(encrypt("This is a test!", 2))
print(decrypt("This is a test!", 0))
print(decrypt("hsi  etTi sats!", 1))
print(decrypt("s eT ashi tist!", 2))
print(encrypt("", 0))
print(decrypt("", 0))
print(encrypt(None, 0))
print(decrypt(None, 0))