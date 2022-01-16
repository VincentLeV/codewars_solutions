import collections


def number_of_pairs(gloves):
    pairs = dict(collections.Counter(gloves))
    count = 0
    for p in pairs.values():
        if p >= 2:
            count += int((p / 2) // 1)

    return count


# number_of_pairs(["red", "green", "red", "blue", "blue"])
print(number_of_pairs(['red', 'green', 'blue', 'blue', 'red', 'green', 'red', 'red', 'red']))
print(number_of_pairs(['White', 'Teal', 'Aqua', 'Aqua', 'Navy', 'Yellow', 'Gray', 'Yellow', 'Blue', 'White', 'Gray', 'Lime', 'Red', 'Black', 'Purple', 'Navy', 'Aqua', 'Gray', 'Navy']))