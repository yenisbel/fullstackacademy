// YOUR CODE BELOW
function mySlice(originalArry, startIdx = 0, endIdx = originalArry.length) {

    let resultSlice = [];
    let postStartIdx = Math.abs(startIdx);

    for (let i = postStartIdx; i < endIdx; i++) {
        const value = originalArry[i];
        resultSlice.push(value);       
    }
    return resultSlice;
} 