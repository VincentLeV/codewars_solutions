const wave = (str: string): string[] => {
    const arr: string[] = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue
        arr.push(`${str.substring(0, i)}${str.substring(i, i + 1).toUpperCase()}${str.substring(i + 1)}`)
    }
    return arr
}

console.log(wave("hello"))
console.log(wave("two words"))
