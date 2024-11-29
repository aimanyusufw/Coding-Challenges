# Codewars 18
# Title :   Tittle Case
# Question :    Write a function that will convert a string into title case, given an optional list of exceptions (minor words)
# Challange Url :  https://www.codewars.com/kata/5202ef17a402dd033c000009
# Level : 6kyu


# Method : 1
def title_case(title,minor_word=''):
    minor_word = minor_word.lower().split(" ") if minor_word else []
    words = title.split(" ")
    result = []
    for i,word in enumerate(words):
        if i == 0 or word.lower() not in minor_word:
            result.append(word.capitalize())
        else:
            result.append(word.lower())
    return " ".join(result)
     
    

# Method : 2

    
# Other user method  
def title_case(title, minor_words=''):
    title, minor_words = title.lower().split(), minor_words.lower().split()
    for i in range(len(title)):
        if i == 0 or title[i] not in minor_words:
            title[i] = title[i].capitalize()
    return ' '.join(title)	

# Log or debug
print(title_case(''))
print(title_case('a clash of KINGS', 'a an the of'))
print(title_case('THE WIND IN THE WILLOWS', 'The In'))
print(title_case('the quick brown fox'))
