initialisePage()

function isValidNumber(num) {
    const divOutput = document.getElementById('output')

    if(isNaN(num)) {
        divOutput.innerHTML = "Please enter a valid number"
        return false;
    } else if(num < 1) {
        divOutput.innerHTML = "Please enter a number greater than or equal to 1"
        return false;
    } else if(num >= 4000) {
        divOutput.innerHTML = "Please enter a number less than or equal to 3999"
        return false;
    } else {
        return true;
    }
}

function convertNumberToRomanNumeral(num) {
    const romanNumerals = [
        {"M": 1000},
        {"CM": 900},
        {"D": 500},
        {"CD": 400},
        {"C": 100},
        {"XC": 90},
        {"L": 50},
        {"XL": 40},
        {"X": 10},
        {"IX": 9},
        {"V": 5},
        {"IV": 4},
        {"I": 1}
    ]
    
    let romanNumeralString = ""
    let remainder = num
    let index = 0 //start from highest roman numeral, M: 1000
    let multiple
    let romanNumericValue
    let romanLetter

    while(remainder > 0) {
        
        romanNumericValue = Object.values(romanNumerals[index])[0]
        romanLetter = Object.keys(romanNumerals[index])[0]

        if(remainder / romanNumericValue >= 1) {
            multiple = Math.floor(remainder / romanNumericValue)
            romanNumeralString = romanNumeralString.concat(romanLetter.repeat(multiple))
            remainder -= romanNumericValue*multiple
        } else {
            // skip
        }

        index++
    }

    return romanNumeralString
}

function clickConvertButton() {
    const numberField = document.getElementById('number')
    const divOutput = document.getElementById('output')
    const inputNum = numberField.value
    let romanResult

    if(isValidNumber(inputNum)) {
        romanResult = convertNumberToRomanNumeral(inputNum)
        divOutput.innerHTML = romanResult
    }
}

function initialisePage() {
    const convertBtn = document.getElementById('convert-btn')
    convertBtn.addEventListener('click', clickConvertButton)
}