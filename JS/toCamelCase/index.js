function toCamelCase(str){
    const clean = str.replace( /[^A-Z0-9]/gi, " " ).split(" ");
    const capitalizedWords = [];
    const first = clean.splice( 0, 1 );

    clean.forEach( word => {
        const firstChar = word.charAt(0).toUpperCase();
        const rest = word.substr(1);
        const finalWord = `${firstChar}${rest}`;
        capitalizedWords.push( finalWord );
    })
    return finalStr = first + capitalizedWords.join("");
}