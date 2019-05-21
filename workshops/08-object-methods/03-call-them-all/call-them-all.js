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
    let valuesOfObj = Object.values(addsNums); //array of values= function in this case
    for (let i = 0; i < valuesOfObj.length; i++) {
        let actualFunc = valuesOfObj[i];
        if(typeof actualFunc === 'function'){
            let valueOf = actualFunc(value);
            funcResult.push(valueOf);
        };       
    }
    return funcResult ;  
}