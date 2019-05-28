// YOUR CODE BELOW
function countToTen(number) {
    //case base (number ===10 so console.log(10) else simple 
    // recursive case number ===9, so console.log(9) and number ++ to show 10)
    if(number <=10){
        console.log(number);
        number ++;
        countToTen(number);
    }
}



