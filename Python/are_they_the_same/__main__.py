import math


def comp(array1, array2):
    if array1 == [] and array2 == []:
        return True
    if array1 is None or array2 is None or sorted(array1) == sorted(array2):
        return False

    def square_root(x):
        return math.sqrt(x)

    def int_to_float(y):
        return abs(float(y))

    return sorted(list(map(square_root, array2))) == sorted(list(map(int_to_float, array1)))


# print(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
# print(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]))
print(comp([-121, -144, 19, -161, 19, -144, 19, -11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
print(comp([], []))
print(comp([], None))
