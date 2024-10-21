# Codewars 20
# Title : Begginer Series #2 Clock
# Question :   Your task is to write a function which returns the time since midnight in milliseconds.
# Challange Url : https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
# Level : 8kyu


# Method : 1
def past(h,m,s):
    h_to_millisecond = h * 60  * 60 * 1000
    m_to_millisecond = m * 60  * 1000
    s_to_millisecond = s * 1000
    return sum([h_to_millisecond,m_to_millisecond,s_to_millisecond])

    
# Method : 2
def past(h,m,s): return sum([h*60*60*1000,m*60*1000,s*1000,])

# Other user method
def past(h, m, s):
    # Good Luck!
    return 3600000 * h + 60000 * m + 1000 * s

# Log or debug
print(past(0,1,1))
print(past(0,0,0))
print(past(1,0,1))
print(past(1,0,0))
