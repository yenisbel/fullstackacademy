// YOUR CODE BELOW
    function mostVowels(sentence) {
        let vowelsWordMax = '';
        let vowels = 'aeiou';
        let wordsSentence = sentence.split(' ');
        let counterMax = 0;
    
        for (let i = 0; i < wordsSentence.length; i++) {
            const word = wordsSentence[i];
            let counter = 0;
            for (let j = 0; j < word.length; j++) {
                //const letter = word[j];
              if (vowels.indexOf(word[j]) !== -1) {
                counter += 1
              }    
            }
            if (counter > counterMax) {
              counterMax = counter;
              vowelsWordMax = word;
            }     
        }
      return vowelsWordMax;
    }