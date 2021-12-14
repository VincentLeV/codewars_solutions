// const anagrams = (word, words) => {
//     let arr = []
//     const theWord = groupUp(word.split(""))

//     words.forEach(x => {
//         const count = groupUp(x.split(""))
//         arr.push(count)
//     })

//     arr.forEach((y, i) => {
//         const sorted = Object.keys(y)
//             .sort()
//             .reduce((acc, key) => { 
//                 acc[key] = y[key]
//                 return acc
//             }, {})

//         JSON.stringify(theWord) !== JSON.stringify(sorted) && arr.splice(i, 1)
//         console.log((Object.keys(y) * Object.values(y)))
//     })

//     console.log(arr)
// }

// const groupUp = (arr) => {
//     const result = arr.reduce((group, item) => {
//         return group[item] ? group[item]++ : group[item] = 1, group
//     }, {})

//     return result
// }

const anagrams = (word, words) => {
    // const copy = [...words]
    // words.forEach((x, i) => {
    //     x.split("").sort().join("") !== word && copy.splice(i, 1)
    // })
    // const anagrs = words.filter(y => copy.indexOf(y) === -1)
    // // return anagrs
    // console.log(anagrs)

    words.forEach((x, i) => {
        x.split("").sort().join("") !== word && words.splice(i, i)
    })

    return words
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])