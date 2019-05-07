// YOUR CODE BELOW
function defaultGreet(first_name, last_name) {
    if (last_name === undefined){
        last_name = 'Doe';
    } 
    return `Hi ${first_name} ${last_name}!`;
}