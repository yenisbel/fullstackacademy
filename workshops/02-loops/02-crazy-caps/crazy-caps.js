// YOUR CODE BELOW
function crazyCaps(sentence) {
    let sentenceCaps = '';
    
    for (let index = 0; index < sentence.length; index++) {
        if (index % 2 === 0) {
            sentenceCaps += sentence[index]; 
        } else {
            sentenceCaps += sentence[index].toUpperCase();  
        }
    }
    return sentenceCaps;
}

