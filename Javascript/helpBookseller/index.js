const stockList = (listOfArt, listOfCat) => {
    const cat = [...listOfCat]
    const res = []
    let newList = []
    const frequencies = listOfArt.reduce((group, item) => {
        const sub = item.substring(0, 1)
        const quantity = Number(item.split(" ")[1])
        return group[sub] ? group[sub] += quantity : group[sub] = quantity, group
    }, {})
    
    for (const [key, value] of Object.entries(frequencies)) {
        listOfCat.forEach((c, i) => {
            if (key === c) {
                res.push(`(${key} : ${value})`)
                listOfCat.splice(i, 1)
                newList = listOfCat.map(x => `(${x} : 0)`)
            }
        })
    }

    return [...res, ...newList].sort((a, b) => cat.indexOf(a.split(" : ")[0].slice(1)) - cat.indexOf(b.split(" : ")[0].slice(1))).join(" - ")
}

console.log(stockList(["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]))