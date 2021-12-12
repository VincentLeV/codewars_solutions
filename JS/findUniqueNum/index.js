const findUniq = (arr) => {
    let arr2 = []
    arr.sort().forEach((x, i) => x === arr[i + 1] ? arr2.push(x) : null)
    const unique = arr.filter(x => x !== arr2[0])
    return unique[0]
}

console.log(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]))
console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))