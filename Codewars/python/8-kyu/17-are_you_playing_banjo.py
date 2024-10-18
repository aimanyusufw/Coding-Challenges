# Codewars 17
# Title : Are you playing banjo?
# Question :    Create a function which answers the question "Are you playing banjo?".
#               If your name starts with the letter "R" or lower case "r", you are playing banjo!
# Challange Url : https://www.codewars.com/kata/53af2b8861023f1d88000832/
# Level : 8kyu


# Method : 1
def are_you_playing_banjo(name):
    is_playing = "does not playing banjo"
    if(name[0] == 'R' or name[0] == 'r'):
        is_playing = 'plays banjo'
    return name + " " + is_playing 
    
# Method : 2
def are_you_playing_banjo(name): return f"{name} {'plays banjo' if name[0].lower() == 'r' else 'does not play banjo'}"

# Other user method
def areYouPlayingBanjo(name):
    return name + (' plays' if name[0].lower() == 'r' else ' does not play') + " banjo"

# Log or debug
print(are_you_playing_banjo('martin'))
print(are_you_playing_banjo('Rikke'))
print(are_you_playing_banjo('bravo'))
print(are_you_playing_banjo('rolf'))
