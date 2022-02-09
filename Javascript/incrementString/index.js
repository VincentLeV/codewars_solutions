const incrementString = (str) => {
    if (str.substr(-1).match(/[a-zA-z]/g) || !str) return `${str}1`

    const index = str.split("").findIndex(x => x.match(/[0-9]/g))
    const text = str.substr(0, index)
    const numTemp = str.substr(index)
    if (numTemp.substr(0, 1) === "0") {
        const i = numTemp.split("").findIndex(x => x !== "0")
        let numPart
        numTemp.substr(0, i)
        ? numPart = numTemp.substring(0, i).concat(parseInt(numTemp.substr(i)) + 1)
        : numPart = numTemp.substr(0, numTemp.length - 1).concat(parseInt(numTemp.substr(-1)) + 1)
        if (numPart.length > 3) numPart = numPart.substr(1)
        return `${text}${numPart}`
    } else {
        return `${str.substr(0, index)}${parseInt(str.substr(index)) + 1}`
    }
}

console.log(incrementString("foobar000"))
console.log(incrementString("foobar001"))
console.log(incrementString("foobar099"))