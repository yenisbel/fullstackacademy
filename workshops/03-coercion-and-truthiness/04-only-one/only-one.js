// YOUR CODE BELOW

function onlyOne(arg1,arg2,arg3){
    return ((!!arg1 && !arg2 && !arg3) || 
            (!arg1 && !!arg2 && !arg3) ||
            (!arg1 && !arg2 && !!arg3))
}
 

