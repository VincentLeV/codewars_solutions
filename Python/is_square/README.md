# You're a Square!

Given an integral number, determine if it's a square number
In mathematics, a square number or perfect square is an integer that is the square of an integer; 
in other words, it is the product of some integer with itself.

def is_square(n): 
    if n < 0:
        return False

    if str(math.sqrt(n)).split(".")[1] == "0":
        num = int(math.sqrt(n))
        if num * num == n:
            return True 
        else: 
            return False
    else:
        return False
