// const firstNonRepeatingLetter = (s) => {
//     const frequencies = s.split("").reduce((group, item) => {
//         if ( item.toUpperCase() === item ) {
//             return group[item.toLowerCase()] ? group[item.toLowerCase()]++ : group[item.toLowerCase()] = 1, group
//         }
//         return group[item] ? group[item]++ : group[item] = 1, group
//     }, {})

//     if (
//         Object
//             .values(frequencies)
//             .every((e, i) => Object.values(frequencies)[0] === Object.values(frequencies)[i])
//         && s.length > 1
//         || !s
//     ) return ""


//     let index = 0
//     Object.values(frequencies).forEach((val, i) => {
//         if ( Object.values(frequencies)[i] < Object.values(frequencies)[i - 1] ) index = i
//     })

//     const char = Object.keys(frequencies)[index]

//     return s.charAt(s.indexOf(char.toUpperCase())) || s.charAt(s.indexOf(char.toLowerCase()))
// }

const firstNonRepeatingLetter = (s) => {
    return s.split('').find(c => s.match(new RegExp(`${c}`, 'gi')).length === 1) || ''
}

console.log(firstNonRepeatingLetter("stress"))
console.log(firstNonRepeatingLetter("moonmen"))
console.log(firstNonRepeatingLetter("a"))
console.log(firstNonRepeatingLetter("abba"))
console.log(firstNonRepeatingLetter("sTreSS"))
console.log(firstNonRepeatingLetter(""))