# Codewars 19
# Title :   Good vs evil
# Question :    Middle Earth is about to go to war. 
# Challange Url :  https://www.codewars.com/kata/52761ee4cffbc69732000738
# Level : 6kyu


# Method : 1
def good_vs_evil(good,evil):
    good_weights = [1,2,3,3,4,10]
    evil_weights = [1,2,2,2,3,5,10]
    good_result = sum([int(n) * w for n,w in zip(good.split(" "),good_weights)])
    evil_result = sum([int(n) * w for n,w in zip(evil.split(" "),evil_weights)])
    if good_result > evil_result:
        return "Battle Result: Good triumphs over Evil"
    if good_result < evil_result:
        return "Battle Result: Evil eradicates all trace of Good"
    else:
        return "Battle Result: No victor on this battle field"
         
# Method : 2

# Other user method  
def goodVsEvil(good, evil):
    good = sum([int(x) * y for x, y in zip(list(good.split(' ')), [1, 2, 3, 3, 4, 10])])
    evil = sum([int(x) * y for x, y in zip(list(evil.split(' ')), [1, 2, 2, 2, 3, 5, 10])])
    result = ['Battle Result: No victor on this battle field', 'Battle Result: Good triumphs over Evil', 'Battle Result: Evil eradicates all trace of Good']
    return result[0] if good == evil else result[1] if good > evil else result[2]
    

# Log or debug
print(good_vs_evil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
print(good_vs_evil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
print(good_vs_evil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))
