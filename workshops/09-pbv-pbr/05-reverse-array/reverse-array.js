// YOUR CODE BELOW
function reverseArray(arryOriginal) {
    let arrReverse = [];
    while (arryOriginal.length) {
        arrReverse.push(arryOriginal.pop());
    }

    while (arrReverse.length) {
        arryOriginal.unshift(arrReverse.pop());
    }
    return arryOriginal;
}