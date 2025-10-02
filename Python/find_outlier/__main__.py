def find_outlier(integers):
    even = [e for e in integers if not e % 2]
    odd = [e for e in integers if e % 2]
    return even[0] if len(even) == 1 else odd[0]


print(find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
print(find_outlier([160, 3, 1719, 19, 11, 13, -21]))
