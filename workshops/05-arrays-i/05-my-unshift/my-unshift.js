// YOUR CODE BELOW
function myUnshift(arrayValues, addValue) {
    let resultArry = [addValue];
    for (let index = 0; index < arrayValues.length; index++) {
        resultArry.push(arrayValues[index]);        
    }
    return resultArry;
}