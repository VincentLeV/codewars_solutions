const rowSumOddNumbers = (n) => {
    // const nums = [ ...Array(29).keys() ].filter(x => x % 2)
    // const arr = [[1]]

    // for ( let i = 1; i < 5; i++ ) {
    //     nums.splice(0, 1)
    //     arr.push(nums.slice(i - 1, i + i))
    //     nums.splice(0, i - 1)
    // }

    // const result = arr[row - 1].reduce((a, b) => a + b)
    // console.log(result)

    const lastNum = 2 * n - 1
    const sum = Math.pow(4 * n, (3 / 4))
    console.log(lastNum)
}

rowSumOddNumbers(2)