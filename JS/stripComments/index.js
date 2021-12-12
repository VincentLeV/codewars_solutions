const stripComment = (input, markers) => {
    const arr = input.trim().split("")
    const result = []

    for ( let i = 0; i < arr.length; i++ ) {
        for  ( let y = 0; y < markers.length; y++ ) {
            if ( markers[y] !== arr[i] ) {
                const c = arr.shift()
                result.push(c)
            
                // let removed = arr.slice(arr.indexOf(arr[i]), arr.indexOf(("\n")) + 1)
                // let test = arr.slice(0, arr.indexOf(arr[i]))
                // arr.splice(arr.indexOf(arr[i]), arr.indexOf(arr[i].match('/\n/')))
                // console.log(test)
            }
        }
    }

    console.log(result)
    // return arr.join("")
}

// stripComment("      apples, pears # and bananas", ["#", "!"])
// stripComment("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(stripComment("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))