// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    let totalMinutes = 0;
    let numberBacteria = currentNum;

    if (targetNum < currentNum) {
        return 'targetNum must be larger than currentNum';
    } 
    while (numberBacteria < targetNum) {
        totalMinutes += 20;
        numberBacteria *= 2;
    }
    return totalMinutes;
}