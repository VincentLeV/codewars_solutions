const formatDuration = (seconds) => {
    if ( seconds === 0 ) return "now"
    const result = {}                                                               // result
    const dict = {                                                                  // structure
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    Object.keys(dict).forEach((key) => {
        result[key] = Math.floor(seconds / dict[key])
        seconds -= result[key] * dict[key]
    })

    const arr = []

    for (const [key, value] of Object.entries(result)) {
        if ( value !== 0 ) {
            value > 1 ? arr.push(`${value} ${key}s`) : arr.push(`${value} ${key}`)
        }
    }
    
    if ( arr.length <= 1 ) {
        return arr.join("")
    } else {
        const last = arr.pop()
        return `${arr.join(", ")} and ${last}`
    }
}

console.log(formatDuration(0))
console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(3662))