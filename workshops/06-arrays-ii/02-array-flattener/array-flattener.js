// YOUR CODE BELOW
function arrayFlattener(twoDimensArry) {
    let oneResultArr = [];
    for (let index = 0; index < twoDimensArry.length; index++) {
        const value = twoDimensArry[index];
        if (Array.isArray(value)) {
            for (let j = 0; j < value.length; j++) {
                oneResultArr.push(value[j]);               
            }
        } else {
            oneResultArr.push(value);
        } 
    }
    return oneResultArr;
}