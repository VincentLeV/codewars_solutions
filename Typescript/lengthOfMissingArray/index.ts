const getLengthOfMissingArray = (arrayOfArrays: any[]): number => {
    if (arrayOfArrays.length === 0) return 0

    const sorted = arrayOfArrays
        .map(x => x.length)
        .sort((a: number, b: number): number => a - b)
    const count = [...Array(sorted[sorted.length - 1] - sorted[0] + 1).keys()].map(x => x + sorted[0])
    
    if (count[0] === 0) return 0

    return count.filter(item => sorted.indexOf(item) === -1)[0]
}

// console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
// console.log(getLengthOfMissingArray([[ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]))
// console.log(getLengthOfMissingArray([[ null ], [ null, null, null ]]))
// console.log(getLengthOfMissingArray([]))

// console.log(getLengthOfMissingArray(
//     [[3, 1, 0],
//     [0, 1, 4, 4, 0],
//     [0, 2],
//     [3, 4, 1, 0, 2, 4],
//     [2, 3, 1, 2],
//     [0, 1, 3, 0, 1, 3, 3],
//     [4, 3, 0, 1, 0, 0, 0, 1],
//     [1, 2, 4, 1, 3, 0, 1, 1, 4],
//     [2, 4, 3, 1, 2, 4, 0, 4, 0, 3, 4]]))

console.log(getLengthOfMissingArray([[2, 3, 1, 4, 2, 1],
    [2, 3, 2, 2, 4, 0, 4, 0],
    [0, 4, 4],
    [0, 4, 0, 0],
    [3, 1, 0, 4, 3],
    [4, 2, 1, 3, 4, 0, 1, 1, 3, 4],
    [2, 1, 3, 4, 4, 2, 2],
    [1, 1, 0, 2, 3, 4, 3, 4, 2, 3, 3],
    [2, 3, 2, 1, 2, 0, 2, 2, 2],
    [],
    [2, 3]]))
