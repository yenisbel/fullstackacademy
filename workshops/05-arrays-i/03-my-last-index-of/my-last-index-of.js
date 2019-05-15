// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx = array.length -1) {
//The array is searched backwards (starting at the optional parameter), fromIndex.    
    for (let index = startIdx; index > -1 ; index--) {
        if (array[index] === searchValue) {
           return index;
        } 
    }
    return -1;
}

//The lastIndexOf() method returns the last index at which a 
//given element can be found in the array, or -1 if it is not 
//present. 
