# Codewars 2
# Title : Unique in order
# Question :    Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
# Challange Url :   https://www.codewars.com/kata/54e6533c92449cc251001667
# Level : 6kyu


# Method : 1
def unique_in_order(sequence):
    unique = []
    for i in range(len(sequence)):
        if i == 0 or sequence[i] != sequence[i-1]:
            unique.append(sequence[i])
    return unique

# Method : 2
def unique_in_order(sequence): return [sequence[i] for i in range(len(sequence)) if i == 0 or sequence[i] != sequence[i-1]]
    
# Other user method
unique_in_order = lambda l: [z for i, z in enumerate(l) if i == 0 or l[i - 1] != z]

# Debug and log
print(unique_in_order(""))
print(unique_in_order([]))
print(unique_in_order(()))
print(unique_in_order("A"))
print(unique_in_order("AAAABBBCCDAABBB"))
print(unique_in_order("ABBCcA"))
print(unique_in_order(["a", "b", "b", "a"]))