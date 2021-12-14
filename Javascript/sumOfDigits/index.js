const digital_root = (n) => {
    n = String(n).split("").reduce((a,b) => parseInt(a) + parseInt(b))
    return String(n).length > 1 ? digital_root(n) : parseInt(n)
}

console.log(digital_root(16))
console.log(digital_root(132189))