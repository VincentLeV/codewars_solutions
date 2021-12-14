const bmi = (weight: number, height: number): string => {
    const result = weight / Math.pow(height, 2)
    if ( result <= 18.5 ) return "Underweight"
    else if ( result <= 25 ) return "Normal"
    else if ( result <= 30 ) return "Overweight"
    return "Obese"
}

console.log(bmi(80, 1.80))