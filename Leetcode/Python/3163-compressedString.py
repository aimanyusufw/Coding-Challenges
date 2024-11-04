# Leetcode 3163
# Title : String commpression
# Instructions : Given a string word, compress it using the following algorithm:

#     Begin with an empty string comp. While word is not empty, use the following operation:
#         Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
#         Append the length of the prefix followed by c to comp.

# Return the string comp.
# Challange Url : https://leetcode.com/problems/string-compression-iii
# Level : Medium

# Method : 1
def compressedString(word):
    comp = ""
    i = 0
    while i < len(word):
        current_char = word[i]
        count = 1
        while i + count < len(word) and word[i + count] == current_char and count < 9:
            count += 1
        comp += str(count) + current_char
        i += count

    return comp

# Other Users Method
def compressedString(self, word: str) -> str:
    n, l, r=len(word), 0, 0
    ans=[]
    while r<n:
        while r<n and word[r]==word[l]:
            r+=1
        q, rem=divmod(r-l, 9)
        for _ in range(q):
            ans+='9'+word[l]
        if rem>0:
            ans+=chr(rem+ord('0'))+word[l]
        l=r
    return "".join(ans)

# Result or debug
print(compressedString('aaaabbbcc'))
print(compressedString('abcdeeeff'))
print(compressedString('aabbbccceee'))
