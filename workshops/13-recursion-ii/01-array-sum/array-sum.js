// YOUR CODE BELOW
function arraySum(arryNumbers) {
    let suma = 0;
    // recursive call
    arryNumbers.forEach(element => {
        if (Array.isArray(element)){
            suma += arraySum(element);
        }else{
            // case base arr.lenght === 1
            suma += element;  
        }   
    });
    return suma;
}