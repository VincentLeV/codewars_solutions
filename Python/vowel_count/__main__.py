import re

def get_count(sentence):
    count = 0
    for c in sentence:
        if c in "aeiou":
            count = count + 1

    return count
    
get_count("bcdfghjklmnpqrstvwxz y")
get_count("abracadabra")