// YOUR CODE BELOW
function backwardString(strWord) {
    //case base
    // if (strWord.length === 1){
    //     return strWord;
    // }
    if (strWord.length > 0){
        let reverse = strWord[strWord.length - 1];
        console.log(reverse);
        backwardString(strWord.slice(0, strWord.length-1))
    }
}