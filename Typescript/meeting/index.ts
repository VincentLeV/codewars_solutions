const meeting = (s: string): string => {
    return s
        .split(";")
        .map((x: string) => {
            const last = x.substring(x.indexOf(":") + 1).toUpperCase()
            const first = x.substring(0, x.indexOf(":")).toUpperCase()
            return `(${last}, ${first})`
        })
        .sort((a: string, b: string) => a.localeCompare(b))
        .join("")
}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))