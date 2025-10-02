def scramble(str1, str2):
    chars = []
    for i1, c1 in enumerate(str1):
        for i2, c2 in enumerate(str2):
            if c1 == c2:
                chars.append(c2)
            else:
                continue

    print(chars)


# print(scramble('rkqodlw', 'world'))
scramble('rkqodlw', 'world')
scramble('katas', 'steak')
