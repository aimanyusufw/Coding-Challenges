# Codewars 21
# Title :   Money, Money, Mony
# Question :    Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
# Challange Url :   https://www.codewars.com/kata/563f037412e5ada593000114
# Level : 7kyu


# Method : 1     
def calculate_years(principal,interest,tax,desired):
    money = principal
    years = 0
    while money < desired:
      profit = money * interest
      after_tax = profit * (1-tax)
      money += after_tax
      years += 1
    return years

# Method : 2
    
# Other user method  	
f=calculate_years=lambda p,i,t,d,n=0:f(p+p*i*(1-t),i,t,d,n+1)if p<d else n

# Log or debug
print(calculate_years(1000, 0.05, 0.18, 1100))
print(calculate_years(1000,0.01625,0.18,1200))
print(calculate_years(1000,0.05,0.18,1000))