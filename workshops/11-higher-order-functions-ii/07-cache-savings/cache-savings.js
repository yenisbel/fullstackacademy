// YOUR CODE BELOW
function cacheSavings(callback) {     
    let cache = {};
    // object[]
    return function (arga) {
        if (arga in cache){
            return cache[arga];
        }
        
        let result = callback(arga);
        cache[arga] = result;
        return result;
    }
}