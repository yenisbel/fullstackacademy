// YOUR CODE BELOW
function finderFunction(arryValue, callback) {
    for (let i = 0; i < arryValue.length; i++) {
        if (callback(arryValue[i])) return i;    
    } 
    return -1   
}
