const inArray = (arr1, arr2) => {
    let words = []
    arr2.forEach(word2 => {
        arr1.forEach(word1 => {
            if ( word2.includes(word1) ) words.push(word1)
        })
    })
    
    return [...new Set(words)].sort()
}

inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])