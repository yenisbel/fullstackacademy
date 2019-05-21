let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

function leetTranslator(strLetters) {
    let strResultLeet = '';
    let leetCodex = {} ;
    
    for (let index = 0; index < letters.length; index++) {
        // Creating Dictionary(object from combination of two arrays) 
        let key = letters[index];
        let value = leetChars[index];
        leetCodex[key]= value;    
    }
    //Iterating trough the input letters string && finding the match in Object
    for (let j = 0; j < strLetters.length; j++) {
        //let currentLetter = strLetters[j];
        strResultLeet += leetCodex[strLetters[j].toLowerCase()];
        
    }

    return strResultLeet;
}
