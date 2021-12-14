function disemvowel(str) {
    return str.replace( /[aeiouAEIOU]/gi, "" );
}

disemvowel( "This website is for losers LOL!" );