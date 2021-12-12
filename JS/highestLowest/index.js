function highAndLow(numbers){
    const distinctArr = numbers.split(" ")
                        .filter(( item, index, arr ) =>  arr.indexOf(item) == index)
                        .sort( (a,b) => a - b );
    return `${distinctArr[distinctArr.length - 1]} ${distinctArr[0]}`;
}