function findMissingLetter(array) {
    const alphabetArr = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"].toString().split(",");
    let letter;

    alphabetArr.map( char => {
        if ( char === array[0].toLowerCase() ) {
            const startIndex = alphabetArr.indexOf(char);
            const subArr = alphabetArr.splice(startIndex, array.length);
            for ( let i = 0; i < array.length; i++ ) {
                if ( subArr[i] !== array[i].toLowerCase() ) {
                    array[0].toUpperCase() === array[0] ? letter = subArr[i].toUpperCase() : letter = subArr[i];
                    break;
                }
            }
        }
    })
    
    return letter;
}