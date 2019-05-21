// YOUR CODE BELOW
function dogBreeder( dogName = 'Steve', dogAge = 0) {
    let dogObject = {};
    if (typeof dogName === 'number') {
        dogAge = dogName;
        dogName = 'Steve'
    }
    if ((dogName && dogAge) || (dogName || dogAge)){
        dogObject['name'] = dogName;
        dogObject['age'] = dogAge;
    }

    return dogObject;
}