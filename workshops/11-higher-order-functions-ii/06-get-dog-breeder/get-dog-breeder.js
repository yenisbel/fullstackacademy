// YOUR CODE BELOW
function getDogBreeder(name, age) {
    return function ( dogName = name, dogAge = age) {
        let dogObject = {};
        if (typeof dogName === 'number') {
            dogAge = dogName;
            dogName = name
        }
        if ((dogName && dogAge) || (dogName || dogAge)){
            dogObject['name'] = dogName;
            dogObject['age'] = dogAge;
        }
        return dogObject;
    }
}