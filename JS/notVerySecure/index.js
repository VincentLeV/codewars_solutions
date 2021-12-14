const alphanumeric = (string) => {
    for ( const c of string ) {
        if ( !c.match(/[a-zA-Z0-9]/g) ) return false
    }

    return !string ? false : true
}

console.log(alphanumeric("Mazinkaiser"))
console.log(alphanumeric("hello world_"))
console.log(alphanumeric("PassW0rd"))
console.log(alphanumeric("     "))