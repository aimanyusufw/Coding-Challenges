# Codewars 7
# Title : Growth of population
# Question : In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
# Challange Url : https://www.codewars.com/kata/563b662a59afc2b5120000c6
# Level : 7kyu


# Method : 1
def nb_year(p0,percent,aug,p):
    total_population = p0
    year = 0
    while total_population < p:
        total_population =  total_population + (total_population * (percent / 100) ) + aug
        total_population = int(total_population)
        year += 1
    return year

    
# Method : 2
    
# Other user method
def nb_year(p0, percent, aug, p):
    t = 0
    while p0 < p:
        p0 = int(p0*(1 + percent/100)) + aug  # my mathematical brain hates that I need to round this
        t += 1
    return t

# Log or debug
print(nb_year(1500, 5, 100, 5000))
print(nb_year(1500000, 2.5, 10000, 2000000))
print(nb_year(1500000, 0.25, 1000, 2000000))
