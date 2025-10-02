def spin_words(sentence):
    if " " not in sentence:
        return sentence if len(sentence) < 5 else sentence[::-1]
    else:
        arr = []
        for w in sentence.split(" "):
            arr.append(w) if len(w) <= 5 else arr.append(w[::-1])
        return " ".join(arr)


spin_words("Welcome")
spin_words("to")
print(spin_words("Hey fellow warriors"))
print(spin_words("This sentence is a sentence"))
print(spin_words("only string all consist letter one function letter word Just more letters letter"))
