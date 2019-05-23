// YOUR CODE BELOW

function deeperCopy(arryValues) {
    let arryCopy = [];

    for(let i = 0; i < arryValues.length; i++){
        if (Array.isArray(arryValues[i])){
            let nestArry = arryValues[i];
            let innerArry =[];

            for (j = 0; j < nestArry.length; j++);{
                innerArry.push(nestArry[j]);
            } 
            arryCopy.push(innerArry);
        } else{
            arryCopy.push(arryValues[i]);
        }
    }
    return arryCopy
}

// this solution pass the tests but put the array on the same reference in memory
//	function deeperCopy (originalArray) {
	//     let returnedValue = arryValues;
	//     return returnedValue;
	// } 
