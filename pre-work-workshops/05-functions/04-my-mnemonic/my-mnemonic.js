// YOUR CODE BELOW
function myMnemonic(...words) {
    returnedValue = '';

    for(let i = 0; i < words.length; ++i){
        firstLetter = words[i][0];
        returnedValue += firstLetter;
    }
    return returnedValue;
}