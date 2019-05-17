// YOUR CODE BELOW

function zooInventory(multiArry) {
    let flatResultArry = [];
    for (let index = 0; index < multiArry.length; index++) {
        const row = multiArry[index];
        flatResultArry.push(helperTwoToOne(row));         
    }
    return flatResultArry;
}



function helperTwoToOne(twoDimensArry) {
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
    // convert into string
    return oneResultArr.join(' ');
}