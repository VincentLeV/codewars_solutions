function generateHashtag(str) {
    if ( !str || !str.match(/^[A-Za-z ]+$/) || !str.trim().length ) return false
    const arr = str.trim().split(" ").join(",").split(",")
    let capitalized = []
    arr.forEach(a => capitalized.push(`${a.charAt(0).toUpperCase()}${a.substr(1)}`))

    const final = capitalized.join("")
    if ( final.length >= 140 ) return false
    return `#${final}`
}

console.log(generateHashtag("   Hello there thanks for trying my Kata"))
console.log(generateHashtag("#"))
console.log(generateHashtag(""))
console.log(generateHashtag("      "))
console.log(generateHashtag("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))