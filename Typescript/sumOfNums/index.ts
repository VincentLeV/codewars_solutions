const getSum = (a: number, b: number): number => {
    const start: number = Math.min(a, b)
    const end: number = Math.max(a, b)
    if ( a === b ) return a || b

    let sum = 0
    for ( let i = start; i <= end; i++ ) {
        sum += i
    }

    return sum
}

console.log(getSum(-1, 7))
console.log(getSum(2, -1))
console.log(getSum(0, 0))
console.log(getSum(-20, -11))