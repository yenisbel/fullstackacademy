// YOUR CODE BELOW
function getLongestName(familyTree) {
    let longName = '';
    for (let key in familyTree) {
        let value = familyTree[key];
        if (typeof value === 'object' && value !== null) {
            //recursive case
           currentName = getLongestName(value);
        } else {
            currentName = key;
        }
        if (currentName.length >  longName.length){
            longName = currentName;
        } 
    };
    return longName;
}