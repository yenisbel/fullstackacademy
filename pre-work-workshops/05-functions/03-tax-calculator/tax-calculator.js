// YOUR CODE BELOW
function taxCalculator(price, state) {
    switch (state) {
        case 'NY':
            return returnedValue = price +(price * 0.04);
        case 'NJ':
            return returnedValue = price+(price * 0.06625);
        default:
            return returnedValue = price;
    }
    //if (state === 'NY') returnedValue = price +(price * 0.04);
     //else returnedValue = price+(price * 0.06625);
    //return returnedValue
}