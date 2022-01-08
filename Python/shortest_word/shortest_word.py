def find_short(s):
    lengths = []

    for word in s.split(" "):
        lengths.append(len(word))

    lengths.sort()

    return lengths[0]

print(find_short("bitcoin take over the world maybe who knows perhaps"))