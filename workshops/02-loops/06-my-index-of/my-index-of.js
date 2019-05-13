// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {

    for (let i = startIdx; i < source.length; i++) {
        const letterSource = source.slice(i, i + searchValue.length);
        if (letterSource === searchValue) return i;
    }
    return -1;
}