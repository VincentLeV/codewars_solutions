const pigIt = (str) => {
    const arr = []
    str.split(" ").forEach(word => {
        word.match(/[a-zA-z]/g) 
        ? arr.push(`${word.substr(1)}${word.substr(0, 1)}ay`) 
        : arr.push(word)
    })

    return arr.join(" ")
}

console.log(pigIt('Pig latin is cool !'))