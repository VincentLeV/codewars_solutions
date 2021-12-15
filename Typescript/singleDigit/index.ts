const singleDigit = (n: number): number => {
    if ( String(n).length === 1 ) return n 
    
    let result: number = n
        .toString(2)
        .split("")
        .map((x: string) => parseInt(x))
        .reduce((a: number, b: number) => a + b)
    
    return String(result).length > 1 ? result = singleDigit(result) : result
}

console.log(singleDigit(5))
singleDigit(5665)
console.log(singleDigit(123456789))