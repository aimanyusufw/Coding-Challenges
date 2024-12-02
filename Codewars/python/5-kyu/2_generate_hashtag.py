# Codewars 2
# Title :  The hastag genetator
# Question :    The marketing team is spending way too much time typing in hashtags.
# Challange Url :   https://www.codewars.com/kata/52449b062fb80683ec000024
# Level : 6kyu


# Method : 1
def generate_hashtag(s):
    s = s.strip()
    if not s:return False
    hashtag = "#"+ ''.join(word.capitalize() for word in s.split(' '))  
    return hashtag if len(hashtag) <= 140 else False

# Method : 2
    
# Other user method
def generate_hashtag(s):
    ans = '#'+ str(s.title().replace(' ',''))
    return s and not len(ans)>140 and ans or False

# Debug and log
print(generate_hashtag('Codewars'))
print(generate_hashtag('Codewars      '))
print(generate_hashtag('      Codewars'))
print(generate_hashtag('Codewars Is Nice'))