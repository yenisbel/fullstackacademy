// YOUR CODE BELOW
function howEqual(arg1, arg2) {
    let messageShow = '';
    if (arg1 === arg2) {
        return messageShow += 'strictly';
    } else if (arg1 == arg2){
        return messageShow += 'loosely';
    }else{
        return messageShow += 'not equal'
    }
}