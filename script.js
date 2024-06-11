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

function validateNumber(num) {
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