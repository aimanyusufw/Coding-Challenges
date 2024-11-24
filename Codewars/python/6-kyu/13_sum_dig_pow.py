# Codewars 13
# Title :   Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
# Question :    The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 
# Challange Url :   https://www.codewars.com/kata/5626b561280a42ecc50000d1
# Level : 6kyu

# Method : 1
def sum_dig_pow(a,b):
    result = []
    for num in range(a,b+1):
        print(num)
        digits = [int(d) for d in str(num)]
        sum_of_powers = sum(d ** (i+1) for i,d in enumerate(digits))

        if sum_of_powers == num:
            result.append(num)
    return result


# Method : 2
    
# Other user method
# def sum_dig_pow(a, b):
#     return [x for x in range(a, b+1) if sum(int(d)**i for i, d in enumerate(str(x), 1)) == x]

# Debug and log
print(sum_dig_pow(1, 10))
print(sum_dig_pow(1, 100))
print(sum_dig_pow(10, 89))
print(sum_dig_pow(10, 100))
print(sum_dig_pow(90, 100))
print(sum_dig_pow(89, 135))