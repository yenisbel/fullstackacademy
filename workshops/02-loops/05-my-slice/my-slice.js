// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {

    let resultSlice = '';

    for (let i = startIdx; i < endIdx; i++) {
        const character = originalString[i];
        resultSlice += character;
        
    }
    return resultSlice;
}  
/*
    if (startIdx && endIdx) {
        resultSlice = originalString.substr(startIdx, endIdx-startIdx);
    }
    else if (startIdx) {
        resultSlice = originalString.substr(startIdx);
    }
    else {
        resultSlice = originalString; 
    }
    return resultSlice;
}

//check also substr method
*/