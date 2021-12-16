const isPangram = (phrase: string): boolean => {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz"
    const cleaned: string[] = phrase
        .toLowerCase()
        .replace(/[^a-z]+/g, "")
        .split("")
        .sort()
    return [ ...new Set(cleaned) ].join("") === alphabet ? true : false
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram."))