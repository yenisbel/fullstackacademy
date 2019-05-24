// YOUR CODE BELOW
function getDogBreeder(name, age) {
    // function dogBreeder( dogName = 'Rufus', dogAge = 5) {
    //     let dogObject = {};
    //     if (typeof dogName === 'number') {
    //         dogAge = dogName;
    //         dogName = 'Rufus'
    //     }
    //     if ((dogName && dogAge) || (dogName || dogAge)){
    //         dogObject['name'] = dogName;
    //         dogObject['age'] = dogAge;
    //     }
    
    //     return dogObject;
    // }
    return dogBreeder;
}

function dogBreeder( dogName = 'Rufus', dogAge = 5) {

let dogObject = {};
if (typeof dogName === 'number') {
    dogAge = dogName;
    dogName = 'Rufus'
}
if ((dogName && dogAge) || (dogName || dogAge)){
    dogObject['name'] = dogName;
    dogObject['age'] = dogAge;
}

return dogObject;
}