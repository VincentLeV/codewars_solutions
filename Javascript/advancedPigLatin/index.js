const translate = (str) => {
    const arr = []
    str.split(" ").forEach(word => {
        let final
        let special = ""
        let firstChar = ""
        const firstVowel = word.search(/[aeiouAEIOU]/)
        for (let i in word) {
            if (word[i].match(/[^0-9a-zA-Z ]/g)) {
                special += word[i]
            }
        }
    
        word = word.replace(/[^0-9a-zA-Z ]/g, "")

        word.substr(0, firstVowel).substr(0, 1) === word.substr(0, firstVowel).substr(0, 1).toLowerCase()
        ? firstChar = word.substr(firstVowel).substr(0, 1).toLowerCase()
        : firstChar = word.substr(firstVowel).substr(0, 1).toUpperCase()

        firstVowel === 0
        ? final = `${word}way${special}` 
        : final = `${firstChar}${word.substr(firstVowel).substr(1)}${word.substr(0, firstVowel).toLowerCase()}ay${special}`
        arr.push(final)
    })

    return arr.join(" ")
}

// console.log(translate("Pizza? Yes Please!!"))
// console.log(translate("hello"))
console.log(translate("Algorithm"))
console.log(translate("How are you?"))