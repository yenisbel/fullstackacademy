// YOUR CODE BELOW
function myIncludes(arrValues, searchValue) {
    for (let index = 0; index < arrValues.length; index++) {
        if (arrValues[index] === searchValue) return true;
    }
    return false;
}
