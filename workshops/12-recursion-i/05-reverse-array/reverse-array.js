// YOUR CODE BELOW
function reverseArray(arryValues) {
    if (arryValues.length === 1 || arryValues.length === 0) {
        return arryValues; 
    }
    let itemArry = arryValues[arryValues.length - 1];
    let reverse = [itemArry];
    let subArry = arryValues.slice(0, arryValues.length-1);
    let resulRecur = reverseArray(subArry);
    return reverse.concat(resulRecur); 
}
