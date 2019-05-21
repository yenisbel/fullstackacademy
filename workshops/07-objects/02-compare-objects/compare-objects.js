// YOUR CODE BELOW
function compareObjects(nameObj1, nameObj2) {
    if (Object.keys(nameObj1).length != Object.keys(nameObj2).length) return false; 
    for (const key in nameObj1) {
        if (nameObj1[key] != nameObj2[key]) return false;      
    }
    return true;
}


//Try to have the combination of the keys for both Objs
//and then for(key in Combined Keys) just check (obj1[key]!= obj2[key])