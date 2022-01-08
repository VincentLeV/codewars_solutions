from functools import reduce


def digital_root(n):
    arr = []
    for c in str(n):
        arr.append(int(c))

    n = reduce(lambda a, b: a + b, arr)

    if len(str(n)) > 1:
        return digital_root(n)
    else:
        return n


print(digital_root(132189))
