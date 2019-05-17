// YOUR CODE BELOW
function evenAndOdd(arrNumbers) {
    let arrEven = [];
    let arrOdd =[];
    for (let index = 0; index < arrNumbers.length; index++) {
        if (arrNumbers[index] % 2 === 0) {
            let evenNumber = arrNumbers[index];
            arrEven.push(evenNumber);
        } else {
            let oddNumber = arrNumbers[index];
            arrOdd.push(oddNumber);
        }    
    }
    let arrResul = [arrEven,arrOdd];
    return arrResul;
    // As well if I use concat method : return [arrEven].concat([arrOdd]);
}
    

