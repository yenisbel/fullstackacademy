// YOUR CODE BELOW

function chainReaction(startValue, arryFuncts) {
    for (let i = 0; i < arryFuncts.length; i++) {
        //arryFuncts[i], is each of the function inside the array
        startValue = arryFuncts[i](startValue)
    }
    return startValue;
}