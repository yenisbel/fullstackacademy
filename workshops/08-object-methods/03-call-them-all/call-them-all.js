// YOUR CODE BELOW

let addsNums = {
    addTen: function(num) {
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
  };


function callThemAll(addsNums, value) {
    let funcResult = [];
    let keysOfObj = Object.keys(addsNums);
    for (let i = 0; i < keysOfObj.length; i++) {
        let actualkey = keysOfObj[i];
        if(typeof addsNums[actualkey] === 'function'){
            let valueOf = addsNums[actualkey](value);
            funcResult.push(valueOf);
        };       
    }
    return funcResult ;  
}