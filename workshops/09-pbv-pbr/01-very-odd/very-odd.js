// YOUR CODE BELOW
function veryOdd(allTheNums) {
    let arryOdd =[];
    for (let i = 0; i < allTheNums.length; i++) {
        if (allTheNums[i] % 2 != 0) {
            arryOdd.push(allTheNums[i]);
        }   
    }
    return arryOdd;
}