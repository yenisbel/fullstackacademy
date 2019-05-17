// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
    let resultArryRot = [];
    if (rotateNum === 0) {
        return resultArryRot = originalArray.slice();
    //  rotate to the right once  
    } else if (rotateNum > 0) {
        while (rotateNum -- ) {
            let temp = originalArray.pop();
            originalArray.unshift(temp);
        }
    // rotate to the left once    
    } else {
        while (rotateNum ++ ) {
            let temp = originalArray.shift();
            originalArray.push(temp);
        }   
    }
    return resultArryRot = originalArray;
}