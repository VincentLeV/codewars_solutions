def xo(s):
  xs = [x for x in list(s) if x == "x" or x == "X"]
  os = [o for o in list(s) if o == "o" or o == "O"]
  return len(xs) == len(os)

print(xo("ooxx"))
print(xo("xooxx"))
print(xo("oxOx"))
print(xo(""))

# def xo(s):
#   s = s.lower()
#   return s.count('x') == s.count('o')