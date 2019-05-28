// YOUR CODE BELOW


function isPalindrome(word){
    word = word.toLowerCase();
    if ((word.length === 1) || (word.length === 0)) return true; 
    if (word[0]=== word[word.length-1]){
        return isPalindrome(word.substr(1,-2));
    }
    return false;
}