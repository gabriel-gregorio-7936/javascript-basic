import re

str = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"

def sum_of_integers(string):
    sum =  0
    numbers = re.findall(r'\d+', str)

    for i in numbers:
        sum = sum + int(i)
    
    return sum

print(sum_of_integers(str))
