def accum(s):
    final = []

    for i, char in enumerate(s):
        final.append(char.upper() + char.lower() * i)

    return "-".join(final)

print(accum("ZpglnRxqenU"))
print(accum("NyffsGeyylB"))
