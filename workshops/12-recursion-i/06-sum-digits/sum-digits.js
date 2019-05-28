// // YOUR CODE BELOW
// function sumDigits(number) {
//     number = number.toString();
//     if (number.length === 0) return 0; 
//     return number[0] + sumDigits(number.slice(1));
// }

function sumDigits(number) {
    number = number.toString();
    return number.length === 0
        ? 0
        : +number[0] + sumDigits(number.slice(1));			
}