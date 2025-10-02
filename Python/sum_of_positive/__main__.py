def positive_sum(arr):
    result = 0
    for num in arr:
      if num > 0:
        result += num
    return result