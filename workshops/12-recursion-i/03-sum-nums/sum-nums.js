// YOUR CODE BELOW
function sumNums(number) {
    //case base when number === 1, return number
	if(number - 1 > 0){
		return (number) + sumNums(number - 1);
	} else {
		return number;
	}
}