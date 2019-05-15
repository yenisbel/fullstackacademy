// YOUR CODE BELOW
function myReverse(arrElement) {
    let reverseArry = [];
    if(arrElement.length === 1) return reverseArry = arrElement;
    //loop through the array (backwards)
    for (let index = arrElement.length-1; index >= 0; index--) {
        reverseArry.push(arrElement[index]);        
    }
    return reverseArry;
}

//reversal coul be also with a pop-unshift or a shift-push, 
//but that would affect the original array !!!