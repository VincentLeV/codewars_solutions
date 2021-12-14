const humanReadable = (seconds) => {
    if ( typeof seconds == "string" || seconds < 0 || seconds > 359999 ) return 
    // new Date(seconds * 1000).toISOString().substr(11, 8)
    const hour = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds % 3600) / 60)
    let totalSeconds = seconds % 60

    if ( minutes === 60 ) {
        minutes = 0
    } else if ( seconds === 60 ) {
        totalSeconds = 0
    }

    return `${format(hour)}:${format(minutes)}:${format(totalSeconds)}`
}

const format = (val) => {
    if ( val < 10 ) {
        return `0${val}`
    } else {
        return val
    }
}

console.log(humanReadable(3662))