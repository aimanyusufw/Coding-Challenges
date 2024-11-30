# Codewars 20
# Title :   Find the missing term in an Arithmathic Progression 
# Question :   An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression.
# Challange Url :  https://www.codewars.com/kata/52de553ebb55d1fca3000371
# Level : 6kyu


# Method : 1
def find_missing(sequence):
    difference = [sequence[i+1] - sequence[i] for i in range(len(sequence) -1 )]
    common_diffrence = max(set(difference) , key=difference.count)
    for i in range(len(difference)):
        if difference[i] != common_diffrence:
            return sequence[i] + common_diffrence
     
# Method : 2

# Other user method  
def find_missing(sequence):
    t = sequence
    return (t[0] + t[-1]) * (len(t) + 1) / 2 - sum(t)
    
# Log or debug
print(find_missing([1, 3, 4, 5, 6, 7, 8, 9]))
print(find_missing([1, 2, 3, 4, 6, 7, 8, 9]))
