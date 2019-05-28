// YOUR CODE BELOW
function countVowels(strWords) {
    let counter = 0;
    let vowels = 'aeiou';
    let arryWords = strWords.split('');
    arryWords.forEach(letter => {
        if (vowels.includes(letter)){
            counter ++
        }
    });
    return counter;
}



// let counter = 0;
// return function(){
//     counter ++
//         return counter;
// };