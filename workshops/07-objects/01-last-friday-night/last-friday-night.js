// YOUR CODE BELOW
function lastFridayNight(arryTransa) {
    let sumElement = 0;
    for (let index = 0; index < arryTransa.length; index++) {
        sumElement += arryTransa[index]['amount'];
    //     let currentTransact = arryTransa[index];
    //     let currentAmount = currentTransact.amount;
    //     sumElement += currentAmount;
    // let { amount } = arryTransa[index]; sumElement += amount
    }
    return sumElement;
}