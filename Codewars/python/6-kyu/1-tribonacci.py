# Codewars 1
# Title : Tribonaci squance
# Question :    Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
# Challange Url :   https://www.codewars.com/kata/556deca17c58da83c00002db
# Level : 6kyu


# Method : 1
def tribonacci(signature, n):
    if n < 1:
        return []
    elif n <= 3:
        return signature[:n]
    tribonacci_sequence = signature[:]
    for i in range(n - 3):
        next_value = sum(tribonacci_sequence[-3:])  
        tribonacci_sequence.append(next_value)  
    return tribonacci_sequence
     
# Method : 2
def tribonacci(signature, n):
    if n <= 3:
        return signature[:n]
    while 3 < n:
        signature.append(sum(signature[-3:]))  
    return signature

# Other user method
def tribonacci(signature, n):
  res = signature[:n]
  for i in range(n - 3): res.append(sum(res[-3:]))
  return res

# Log or debug
print(tribonacci([1, 1, 1], 10))
print(tribonacci([0, 0, 1], 10))
print(tribonacci([0, 1, 1], 10))
print(tribonacci([1, 0, 0], 10))
print(tribonacci([0, 0, 0], 10))
print(tribonacci([1, 2, 3], 10))
print(tribonacci([3, 2, 1], 10))
print(tribonacci([1, 1, 1], 1))
print(tribonacci([300, 200, 100], 0))