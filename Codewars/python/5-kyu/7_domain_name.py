# Codewars 7
# Title :  Extract domain name from a URL
# Question :    Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example
# Challange Url :   https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python
# Level : 5kyu


# Method : 1
def domain_name(url):
    if "://" in url:
        url = url.split("://", 1)[1]
    domain = url.split("/", 1)[0]
    if domain.startswith("www."):
            domain = domain[4:]
    domain_parts = domain.split(".")
    if len(domain_parts) > 1:
            return domain_parts[0]

# Method : 2
    
# Other user method
def domain_name(url):
    return url.split("//")[-1].split("www.")[-1].split(".")[0]
    
# Debug and log
print(domain_name("http://google.com"))
print(domain_name("http://google.co.jp"))
print(domain_name("https://123.net"))
print(domain_name("https://hyphen-site.org"))
print(domain_name("http://codewars.com"))
print(domain_name("www.xakep.ru"))
print(domain_name("https://youtube.com"))
print(domain_name("http://www.codewars.com/kata/"))
print(domain_name("icann.org"))