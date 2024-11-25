# Codewars 14
# Title :   IP validation
# Question :    Write an algorithm that will identify valid IPv4 addresses in dot-decimal format
# Challange Url :   https://www.codewars.com/kata/515decfd9dcfc23bb6000006/
# Level : 6kyu

# Method : 1
def is_valid_IP(ip):
    parts = ip.split('.')
    if len(parts) != 4:
        return False

    for part in parts:
        if not part.isdigit():
            return False
        n = int(part) 
        if n < 0 or n > 255:
            return False
        if part != '0' and part.startswith('0'):
            return False
            
    return True

# Method : 2
    
# Other user method
import socket

def is_valid_IP(addr):
    try:
        socket.inet_pton(socket.AF_INET, addr)
        return True
    except socket.error:
        return False

# Debug and log
print(is_valid_IP('12.255.56.1'))
print(is_valid_IP(''))
print(is_valid_IP('abc.def.ghi.jkl'))
print(is_valid_IP('123.456.789.0'))
print(is_valid_IP('12.34.56'))
print(is_valid_IP('12.34.56 .1'))
print(is_valid_IP('12.34.56.-1'))
print(is_valid_IP('123.045.067.089'))
print(is_valid_IP('127.1.1.0'))
print(is_valid_IP('0.0.0.0'))
print(is_valid_IP('0.34.82.53'))
print(is_valid_IP('192.168.1.300'))