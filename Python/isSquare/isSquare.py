import math

def is_square(n): 
    if n < 0:
        return False

    if math.sqrt(n) % 1 == 0:
        return True
    else:
        return False


print(is_square(1128355281))
print(is_square(-1))
print(is_square(0))
print(is_square(25))
print(is_square(26))