def invert(lst):
  arr = []
  for item in lst:
    arr.append(-abs(item)) if item > 0 else arr.append(abs(item))
  return arr