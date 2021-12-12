const mix = (s1, s2) => {
    const arr = []
    const groupUp = (str) => {
        const group = {}
        for ( let c of str ) {
            c === c.toLowerCase() && c.match(/[a-z]/g) ? group[c] = group[c] + 1 || 1 : null
        }
        for (const [key, value] of Object.entries(group)) {
            value <= 1 && delete group[key]
        }
        return group
    }

    const getOutput = (g1, g2) => {
        const equal = {}
        for (const [key1, value1] of Object.entries(g1)) {
            for (const [key2, value2] of Object.entries(g2)) {
                if ( key1 === key2 ) {
                    if ( value1 === value2 ) {
                        equal[key1] = value1
                        delete g1[key1]
                        delete g2[key2]
                    } else if ( value1 > value2 ) {
                        delete g2[key2]
                    } else if ( value2 > value1 ) {
                        delete g1[key1]
                    }
                } 
            }
        }
        const final = { 1: {...g1}, 2: {...g2}, 0: {...equal}}

        for (const [key, obj] of Object.entries(final)) {
            for (const [c, val] of Object.entries(obj)) {
                key === "0" ? arr.push(`=:${c.repeat(val)}/`) : arr.push(`${key}:${c.repeat(val)}/`)
            }
        }
    }
    getOutput(groupUp(s1), groupUp(s2))
    const big = []
    arr.sort().forEach((x, i) => arr[0].split(":")[1].length < arr[i].split(":")[1].length && big.push(arr[i]))
    const diff = arr.filter(x => !big.includes(x))

    return str = [...big, ...diff]
        .sort((a, b) => b.split(":")[1].length - a.split(":")[1].length)
        .join("")
        .slice(0, -1)
}

// console.log(mix("Are they here", "yes, they are here"))
// console.log(mix("looping is fun but dangerous", "less dangerous than coding"))
// console.log(mix(" In many languages", " there's a pair of functions"))
console.log(mix("'vkmaZsrypYywom#asba%bciyGirmc", "VucqrYyzyj>wlaq,rquoVvdit'ubll"))