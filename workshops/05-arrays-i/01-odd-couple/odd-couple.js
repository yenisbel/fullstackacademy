// YOUR CODE BELOW
function oddCouple(arrNumbers) {
    let arrNumResult = [];
    for (let index = 0; index < arrNumbers.length; index++) {
        if ((arrNumbers[index] % 2 != 0) && (arrNumResult.length < 2)) {
            arrNumResult.push(arrNumbers[index]);
        }
        
    }
    return arrNumResult;
}
