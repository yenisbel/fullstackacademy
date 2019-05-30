// YOUR CODE BELOW
function allSystemsGo(nestObjSys) {
    // let status = true;
    for (let key in nestObjSys) {
        let value = nestObjSys[key];
        if (typeof value === 'object') {
            //recursive case
           status = allSystemsGo(value);
        } else {
            status = value;
        }
        if (status ===  'false'){
            return false;
        } 
    };
    return true;
}