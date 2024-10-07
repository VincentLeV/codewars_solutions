const rot13 = (str) => {
  const lowerAlphaArr = "abcdefghijklmnopqrstuvwxyz".split("")
  const upperAlphaArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  let result = ""
  
  str.split("").forEach((char) => {
    if (char.match(/[a-zA-Z]/g)) {
      const targetArr = char.match(/[a-z]/g) ? lowerAlphaArr : upperAlphaArr
      const index = targetArr.findIndex((c) => c === char)
      let decodedIndex = index + 13
      if (decodedIndex >= targetArr.length) {
        decodedIndex = index + 13 - targetArr.length
      }
      result += targetArr[decodedIndex]
    } else {
      result += char
    }
  })

  return result
}

rot13("EBG13 rknzcyr.")