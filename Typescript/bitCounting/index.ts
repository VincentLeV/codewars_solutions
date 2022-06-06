const countBits = (n: number): number => { 
    let count: number = 0
    n.toString(2).split("").map(x => Number(x) === 1 ? count += 1 : null)
    return count
}

countBits(1234)