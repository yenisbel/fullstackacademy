// YOUR CODE BELOW
function theTruthCounts(nestArryValues) {
    let counter = 0;
    nestArryValues.forEach(element => {
        if(Array.isArray(element)){
            counter+= theTruthCounts(element);
        } else if (element) {
            counter ++;
        }
    });
    return counter;
}



