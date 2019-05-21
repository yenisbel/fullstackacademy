// YOUR CODE BELOW

function frequencyAnalysis(strWords) {
    let objLetter = {};
    let arryletters = strWords.split('');
    for (let index = 0; index < arryletters.length; index++) {
        const letter = arryletters[index];
        //if(objLetter[letter]) objLetter[letter] +=1;
        //else objLetter[letter] = 1;

        objLetter[letter] = helperCounter(strWords,letter) ;     
    }
    return objLetter;
}


function helperCounter(strSentence, letterArry) {
    let counter = 0;
    for (let j = 0; j < strSentence.length; j++) {
        if (letterArry === strSentence[j]) counter ++;    
    }
    return counter
}