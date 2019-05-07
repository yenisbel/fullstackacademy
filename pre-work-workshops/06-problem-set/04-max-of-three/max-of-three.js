// YOUR CODE BELOW
function maxOfThree(...numbers) {
    let i = 0;
    bigNumber = numbers[0];

    while (i <= numbers.length) {
        if (numbers[i] < numbers[i + 1]){
            bigNumber = numbers[i + 1];
        };
        i ++;    
    }
    return returnedValue = bigNumber;
}
