const findOdd = (A) => {
    const frequencies = A.reduce((group, item) => {
        return group[item] ? group[item]++ : group[item] = 1, group
    }, {})

    for (const [key, value] of Object.entries(frequencies)) {
        if ( value % 2 !== 0 ) return Number(key)
    }
}

console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))