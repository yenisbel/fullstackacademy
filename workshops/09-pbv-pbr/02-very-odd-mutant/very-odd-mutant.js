// YOUR CODE BELOW
function veryOddMutant(allTheNums) {
    let counter = 0;
    for (let i = 0; i < allTheNums.length; i++) {
        if (allTheNums[i] % 2 == 0) {
            allTheNums[i] = 'normie';
            counter ++;
            //arryOdd.push(allTheNums[i]);
        }   
    }

    return counter;
    
}