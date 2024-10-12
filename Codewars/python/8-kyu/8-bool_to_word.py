# Codewars 8
# Title : Bool to word
# Question : Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
# Challange Url : https://www.codewars.com/kata/53369039d7ab3ac506000467
# Level : 8kyu

# Method : 1
def bool_to_word(boolean):
    if boolean:
        return 'Yes'
    else:
        return 'No'

# Method : 2
def bool_to_word(b): return 'Yes' if b else 'No'

# Other Users Method
def bool_to_word(bool):
    return ['No', 'Yes'][bool]

# Log or debug
print(bool_to_word(True))
print(bool_to_word(False))
