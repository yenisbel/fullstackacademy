// YOUR CODE BELOW
function zeroDarkThirty(number) {
    let resultNumber = '';
    let stringNumber = number.toString();
    if (number === 0) return NaN
    for (let index = 0; index < stringNumber.length; index++) {
        const digitNumber = stringNumber[index];
        if (digitNumber != 0) resultNumber += digitNumber;
        
    }
    return Number(resultNumber);
}