const parse = (data: string): number[] => {
    const arr: number[] = []
    let value: number = 0
    data.split("").forEach((char: string) => {
        switch (char) {
            case "i":
                value += 1
                break
            case "d":
                value -= 1
                break
            case "s":
                value *= value
                break
            case "o":
                arr.push(value)
                break
            default:
                return
        }
    })
    return arr
}

parse("iiisdoso")
parse("iiisxxxdoso")