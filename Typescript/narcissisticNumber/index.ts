const narcissistic = (value: number) => {
    const result: number =  String(value)
        .split("")
        .map(n => Math.pow(parseInt(n), String(value).length))
        .reduce((a, b): number => a + b)
    
    return result === value
}

console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(1634))