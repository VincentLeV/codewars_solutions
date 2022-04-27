const code = {
    A: ".-",
    B: "-...",
    C: "-.-. ",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.--",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    SOS: "...---..."
}

const decodeMorse = (morseCode: string): string => {
    let result: string = ""
    morseCode.trim().split(" ").forEach((c: string) => {
        for (const [key, value] of Object.entries(code)) {
            if (c === value) {
                result += key
            } 
            if (c === "") {
                result += " "
            }
        }
    })
    return result.replace(/\s\s+/g, " ")
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."))
console.log(decodeMorse("... --- ..."))