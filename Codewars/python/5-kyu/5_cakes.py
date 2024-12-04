# Codewars 5
# Title :  Pete, the baker
# Question :   Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
# Challange Url :   https://www.codewars.com/kata/525c65e51bf619685c000059
# Level : 5kyu


# Method : 1
def cakes(recipe,available):
    result = float('inf')
    for ing in recipe:
        if ing not in available:
            return 0
        result = min(result,available[ing] // recipe[ing])
    return result

# Method : 2
    
# Other user method
def cakes(recipe, available):
	return min(available.get(k, 0)/recipe[k] for k in recipe)
    
# Debug and log
recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
print(cakes(recipe, available))

recipe = {"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}
available = {"sugar": 500, "flour": 2000, "milk": 2000}
print(cakes(recipe, available))