def anagrams(word, words):
    arr = []
    w1 = ''.join(sorted(word))
    for i, w in enumerate(words):
        w2 = ''.join(sorted(w))
        if w1 == w2:
            arr.append(*words[i : i+1])
    
    return arr

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('ab', ['cc', 'ac', 'bc', 'cd', 'ab', 'ba', 'racar', 'caers', 'racer'])
